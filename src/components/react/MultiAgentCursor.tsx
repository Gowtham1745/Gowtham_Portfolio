'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

// SVG Cursor Icon - White with black outline
const CursorIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ pointerEvents: 'none' }}
  >
    <path
      d="M4 4l10 10M4 4l3.5 0M4 4l0 3.5M14 14l5 5M14 14l-3.5 0M14 14l0 -3.5"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 4l10 10M4 4l3.5 0M4 4l0 3.5M14 14l5 5M14 14l-3.5 0M14 14l0 -3.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG Cursor with "grabbing" state
const CursorIconActive = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ pointerEvents: 'none' }}
  >
    <path
      d="M6 6l12 12M6 6l4 0M6 6l0 4M18 18l-6 -6M18 18l-4 0M18 18l0 -4"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6l12 12M6 6l4 0M6 6l0 4M18 18l-6 -6M18 18l-4 0M18 18l0 -4"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface DraggableElement {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  width: number;
  height: number;
  isDragging: boolean;
  dragCursorId: string | null;
  content: React.ReactNode;
  className?: string;
}

interface Cursor {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isActive: boolean;
  assignedElementId: string | null;
  phase: 'idle' | 'approaching' | 'grabbing' | 'moving' | 'releasing' | 'returning';
  phaseProgress: number;
}

const CURSOR_COUNT = 12;
const ANIMATION_DURATION = 7000; // 7 seconds loop
const ELEMENTS_COUNT = 5;

const initialElements: DraggableElement[] = [
  {
    id: 'heading',
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    width: 280,
    height: 60,
    isDragging: false,
    dragCursorId: null,
    content: 'Gowtham A',
    className: 'text-3xl md:text-4xl font-bold text-white tracking-tight'
  },
  {
    id: 'subtitle',
    x: 0,
    y: 80,
    targetX: 0,
    targetY: 80,
    width: 320,
    height: 40,
    isDragging: false,
    dragCursorId: null,
    content: 'Aeronautical Engineer • CGI Artist • Simulation Specialist',
    className: 'text-lg md:text-xl text-teal-300 font-medium'
  },
  {
    id: 'card-1',
    x: 0,
    y: 160,
    targetX: 0,
    targetY: 160,
    width: 240,
    height: 140,
    isDragging: false,
    dragCursorId: null,
    content: (
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <span className="text-xs text-amber-400 font-mono tracking-wider uppercase">Project</span>
          <h3 className="mt-2 text-lg font-bold text-white">ABHYAAS UAV S-Duct</h3>
          <p className="mt-2 text-sm text-gray-400">CFD optimization • 3D printed • Wind tunnel validated</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">ANSYS</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">SolidWorks</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">CFD</span>
        </div>
      </div>
    ),
    className: 'bg-gray-900/50 border border-gray-700 rounded-xl p-4'
  },
  {
    id: 'card-2',
    x: 260,
    y: 160,
    targetX: 260,
    targetY: 160,
    width: 240,
    height: 140,
    isDragging: false,
    dragCursorId: null,
    content: (
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <span className="text-xs text-amber-400 font-mono tracking-wider uppercase">Project</span>
          <h3 className="mt-2 text-lg font-bold text-white">Pandora Environment</h3>
          <p className="mt-2 text-sm text-gray-400">Unreal Engine 5.4 • Procedural terrain • Cinematic lighting</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">UE5</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Blender</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Niagara</span>
        </div>
      </div>
    ),
    className: 'bg-gray-900/50 border border-gray-700 rounded-xl p-4'
  },
  {
    id: 'card-3',
    x: 520,
    y: 160,
    targetX: 520,
    targetY: 160,
    width: 240,
    height: 140,
    isDragging: false,
    dragCursorId: null,
    content: (
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <span className="text-xs text-amber-400 font-mono tracking-wider uppercase">Project</span>
          <h3 className="mt-2 text-lg font-bold text-white">RC Aircraft</h3>
          <p className="mt-2 text-sm text-gray-400">Jet Aerospace • Full build • Flight tested</p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">CAD</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">RC Systems</span>
          <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">Composite</span>
        </div>
      </div>
    ),
    className: 'bg-gray-900/50 border border-gray-700 rounded-xl p-4'
  },
];

// Grid positions for snapping
const gridPositions = [
  { x: 80, y: 40 },      // heading
  { x: 80, y: 120 },     // subtitle
  { x: 80, y: 200 },     // card 1
  { x: 340, y: 200 },    // card 2
  { x: 600, y: 200 },    // card 3
];

export function MultiAgentCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [elements, setElements] = useState<DraggableElement[]>(initialElements);
  const [cursors, setCursors] = useState<Cursor[]>([]);
  const [animationTime, setAnimationTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const loopStartRef = useRef<number>(Date.now());

  // Spring animations for elements
  const elementSprings = elements.map((_, i) => ({
    x: useSpring(useMotionValue(gridPositions[i].x), { stiffness: 300, damping: 30, mass: 1 }),
    y: useSpring(useMotionValue(gridPositions[i].y), { stiffness: 300, damping: 30, mass: 1 }),
    scale: useSpring(useMotionValue(1), { stiffness: 400, damping: 35, mass: 0.5 }),
  }));

  // Spring animations for cursors
  const cursorSprings = Array.from({ length: CURSOR_COUNT }, () => ({
    x: useSpring(useMotionValue(0), { stiffness: 500, damping: 40, mass: 0.3 }),
    y: useSpring(useMotionValue(0), { stiffness: 500, damping: 40, mass: 0.3 }),
    scale: useSpring(useMotionValue(1), { stiffness: 600, damping: 50, mass: 0.2 }),
    rotation: useSpring(useMotionValue(0), { stiffness: 400, damping: 30, mass: 0.2 }),
  }));

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize cursors
  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const newCursors: Cursor[] = Array.from({ length: CURSOR_COUNT }, (_, i) => ({
      id: `cursor-${i}`,
      x: Math.random() * 800,
      y: Math.random() * 400,
      targetX: Math.random() * 800,
      targetY: Math.random() * 400,
      isActive: false,
      assignedElementId: null,
      phase: 'idle',
      phaseProgress: 0,
    }));

    setCursors(newCursors);
    loopStartRef.current = Date.now();
  }, [prefersReducedMotion, isMobile]);

  // Animation loop
  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - loopStartRef.current;
      const loopProgress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
      setAnimationTime(elapsed);

      setCursors(prevCursors => {
        return prevCursors.map((cursor, cursorIndex) => {
          // Each cursor has its own timeline offset
          const cursorOffset = cursorIndex / CURSOR_COUNT;
          const cursorProgress = (loopProgress + cursorOffset) % 1;

          // Determine which element this cursor should interact with
          const elementIndex = cursorIndex % ELEMENTS_COUNT;
          const element = elements[elementIndex];
          const gridPos = gridPositions[elementIndex];

          let newCursor = { ...cursor };
          newCursor.phaseProgress = cursorProgress;

          // Phase timing (each phase takes portion of the 7s loop)
          const approachEnd = 0.15;
          const grabEnd = 0.25;
          const moveEnd = 0.55;
          const releaseEnd = 0.65;
          const returnEnd = 0.85;

          if (cursorProgress < approachEnd) {
            // APPROACHING: Move toward element's current position
            newCursor.phase = 'approaching';
            newCursor.targetX = element.x + element.width / 2;
            newCursor.targetY = element.y + element.height / 2;
            newCursor.assignedElementId = element.id;
          } else if (cursorProgress < grabEnd) {
            // GRABBING: Scale up element, cursor at center
            newCursor.phase = 'grabbing';
            newCursor.targetX = element.x + element.width / 2;
            newCursor.targetY = element.y + element.height / 2;
          } else if (cursorProgress < moveEnd) {
            // MOVING: Drag element to grid position
            newCursor.phase = 'moving';
            const moveProgress = (cursorProgress - grabEnd) / (moveEnd - grabEnd);
            const eased = moveProgress < 0.5
              ? 2 * moveProgress * moveProgress
              : 1 - Math.pow(-2 * moveProgress + 2, 2) / 2;

            newCursor.targetX = element.x + element.width / 2 + (gridPos.x - element.x) * eased;
            newCursor.targetY = element.y + element.height / 2 + (gridPos.y - element.y) * eased;
          } else if (cursorProgress < releaseEnd) {
            // RELEASING: Element snaps to grid, cursor releases
            newCursor.phase = 'releasing';
            newCursor.targetX = gridPos.x + element.width / 2;
            newCursor.targetY = gridPos.y + element.height / 2;
          } else if (cursorProgress < returnEnd) {
            // RETURNING: Cursor returns to random position
            newCursor.phase = 'returning';
            const returnProgress = (cursorProgress - releaseEnd) / (returnEnd - releaseEnd);
            const randomX = 100 + Math.random() * 600;
            const randomY = 100 + Math.random() * 300;
            newCursor.targetX = gridPos.x + element.width / 2 + (randomX - gridPos.x - element.width / 2) * returnProgress;
            newCursor.targetY = gridPos.y + element.height / 2 + (randomY - gridPos.y - element.height / 2) * returnProgress;
            newCursor.assignedElementId = null;
          } else {
            // IDLE: Cursor floats organically
            newCursor.phase = 'idle';
            const idleProgress = (cursorProgress - returnEnd) / (1 - returnEnd);
            const floatX = Math.sin(idleProgress * Math.PI * 4 + cursorIndex) * 50;
            const floatY = Math.cos(idleProgress * Math.PI * 3 + cursorIndex) * 30;
            const randomBaseX = 100 + (cursorIndex * 57) % 600;
            const randomBaseY = 100 + (cursorIndex * 43) % 300;
            newCursor.targetX = randomBaseX + floatX;
            newCursor.targetY = randomBaseY + floatY;
            newCursor.assignedElementId = null;
          }

          return newCursor;
        });
      });

      // Update element positions based on cursor dragging
      setElements(prevElements => {
        return prevElements.map((element, elementIndex) => {
          const assignedCursor = cursors.find(c => c.assignedElementId === element.id);
          if (assignedCursor && (assignedCursor.phase === 'grabbing' || assignedCursor.phase === 'moving')) {
            const gridPos = gridPositions[elementIndex];
            const moveProgress = assignedCursor.phase === 'moving'
              ? (assignedCursor.phaseProgress - 0.25) / 0.3
              : 0;

            return {
              ...element,
              x: element.x + (gridPos.x - element.x) * moveProgress * 0.1,
              y: element.y + (gridPos.y - element.y) * moveProgress * 0.1,
              isDragging: true,
              dragCursorId: assignedCursor.id,
            };
          }
          // Snap to grid when not being dragged
          if (!element.isDragging || !assignedCursor) {
            const gridPos = gridPositions[elementIndex];
            return {
              ...element,
              x: element.x + (gridPos.x - element.x) * 0.15,
              y: element.y + (gridPos.y - element.y) * 0.15,
              isDragging: false,
              dragCursorId: null,
            };
          }
          return element;
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current!);
  }, [prefersReducedMotion, isMobile, elements, cursors]);

  // Update spring values
  useEffect(() => {
    elements.forEach((element, i) => {
      elementSprings[i].x.set(element.x);
      elementSprings[i].y.set(element.y);
      elementSprings[i].scale.set(element.isDragging ? 1.02 : 1);
    });
  }, [elements]);

  useEffect(() => {
    cursors.forEach((cursor, i) => {
      cursorSprings[i].x.set(cursor.targetX);
      cursorSprings[i].y.set(cursor.targetY);
      cursorSprings[i].scale.set(cursor.phase === 'grabbing' ? 1.3 : cursor.phase === 'moving' ? 1.15 : 1);
      cursorSprings[i].rotation.set(cursor.phase === 'idle' ? Math.sin(animationTime / 1000 + i) * 0.1 : 0);
    });
  }, [cursors, animationTime]);

  if (prefersReducedMotion || isMobile) {
    // Static fallback for reduced motion / mobile
    return (
      <div className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Gowtham A</h1>
            <p className="mt-4 text-lg md:text-xl text-teal-300 font-medium">
              Aeronautical Engineer • CGI Artist • Simulation Specialist
            </p>
          </div>
          <div className="lg:col-span-3 grid gap-4 md:grid-cols-3">
            {initialElements.slice(2).map((el) => (
              <motion.div
                key={el.id}
                className={el.className}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {el.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-20 overflow-visible"
      style={{ minHeight: '480px' }}
    >
      {/* Draggable Elements */}
      {elements.map((element, index) => (
        <motion.div
          key={element.id}
          className={element.className}
          style={{
            position: 'absolute',
            left: elementSprings[index].x,
            top: elementSprings[index].y,
            transformOrigin: 'center center',
            zIndex: element.isDragging ? 20 : 10,
            willChange: 'transform',
            scale: elementSprings[index].scale,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {element.content}
        </motion.div>
      ))}

      {/* Cursors */}
      <div
        className="absolute inset-0 pointer-events-none overflow-visible"
        style={{ zIndex: 30 }}
      >
        {cursors.map((cursor, index) => (
          <motion.div
            key={cursor.id}
            className="pointer-events-none"
            style={{
              position: 'absolute',
              transformOrigin: 'center center',
              willChange: 'transform, opacity',
              opacity: cursor.phase === 'idle' ? 0.4 : 1,
              x: cursorSprings[index].x,
              y: cursorSprings[index].y,
              scale: cursorSprings[index].scale,
              rotate: cursorSprings[index].rotation,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          >
            {cursor.phase === 'grabbing' || cursor.phase === 'moving' ? (
              <CursorIconActive size={28} />
            ) : (
              <CursorIcon size={24} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle grid lines for visual reference */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ zIndex: 5 }}>
        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}

export default MultiAgentCursor;