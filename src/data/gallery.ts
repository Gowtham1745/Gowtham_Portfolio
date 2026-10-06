export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  poster?: string;
  title: string;
  caption: string;
  category: 'aerospace' | 'realtime' | 'blender' | 'awards';
  tags: string[];
}

export const galleryItems: GalleryItem[] = [
  // Aerospace & Flight Systems
  {
    id: "rc-aircraft-flight-ready",
    type: "image",
    url: "/media/projects/rc-aircraft/1.jpeg",
    title: "Flight-Ready High-Wing RC Trainer",
    caption: "Gowtham A holding the completed flight-ready high-wing RC aircraft at Jet Aerospace, Palakkad, Kerala.",
    category: "aerospace",
    tags: ["RC Aircraft", "Airframe Build", "Jet Aerospace"]
  },
  {
    id: "drone-multirotor-completed",
    type: "image",
    url: "/media/projects/drone/3.jpeg",
    title: "Assembled Quadcopter & 2.4GHz Avionics",
    caption: "Gowtham holding the completed quadcopter platform and Avionic transmitter at Jet Aerospace Drone Hub.",
    category: "aerospace",
    tags: ["Drone", "DfAM", "Avionics"]
  },
  {
    id: "rc-wing-rib-alignment",
    type: "image",
    url: "/media/projects/rc-aircraft/3.jpeg",
    title: "Wing Rib & Structural Spar Alignment",
    caption: "Hands-on assembly aligning coroplast cambered ribs across the extruded aluminum spar.",
    category: "aerospace",
    tags: ["Aerodynamics", "Fabrication", "RC Aircraft"]
  },
  {
    id: "rc-empennage-rigging",
    type: "image",
    url: "/media/projects/rc-aircraft/5.jpeg",
    title: "Empennage Pushrod Linkage Rigging",
    caption: "Precision installation of nylon control horns and steel pushrod linkages for elevator and rudder control.",
    category: "aerospace",
    tags: ["Servos", "Controls", "RC Aircraft"]
  },
  {
    id: "drone-flight-controller-telemetry",
    type: "image",
    url: "/media/projects/drone/2.jpeg",
    title: "KK Flight Controller Sensor Telemetry",
    caption: "On-board LCD showing real-time roll/pitch angle calculations and self-level status.",
    category: "aerospace",
    tags: ["Flight Controller", "Telemetry", "Drone"]
  },
  {
    id: "rc-camber-inspection",
    type: "image",
    url: "/media/projects/rc-aircraft/6.jpeg",
    title: "Wing Camber Profile Inspection",
    caption: "Verifying leading-edge radius and upper surface curvature prior to final skin fastening.",
    category: "aerospace",
    tags: ["Quality Check", "Airfoil", "Aerospace"]
  },

  // Real-Time & Unreal Engine 5.4
  {
    id: "ue5-the-horizon-video",
    type: "video",
    url: "/media/projects/pandora/the-horizon.mp4",
    title: "The Horizon — UE 5.4 Cinematic Pass",
    caption: "Volumetric fog, distant terrain lighting, and alien biome world-building in Unreal Engine 5.4.",
    category: "realtime",
    tags: ["Unreal Engine 5.4", "Lumen", "Cinematics"]
  },
  {
    id: "ue5-ancient-stillness-video",
    type: "video",
    url: "/media/projects/pandora/ancient-stillness.mp4",
    title: "Ancient Stillness — Tracking Shot",
    caption: "Subsurface foliage scattering and layered plant canopy in a Pandora-inspired biome.",
    category: "realtime",
    tags: ["Unreal Engine 5.4", "Foliage", "Real-Time"]
  },
  {
    id: "ue5-environment-art-reel",
    type: "video",
    url: "/media/projects/pandora/environment-art.mp4",
    title: "Environment Art Showcase Reel",
    caption: "Technical asset breakdown highlighting material shader responses and lighting interaction.",
    category: "realtime",
    tags: ["Environment Art", "Unreal Engine 5.4", "Lighting"]
  },

  // 3D Animation & Blender Simulation
  {
    id: "blender-character-turntable",
    type: "image",
    url: "/media/projects/blender/char-turnaround-1.jpeg",
    title: "Stylized 3D Character & Creature Turnaround",
    caption: "Detailed turnaround model demonstrating character anatomy, cloak draping, and companion creature modeling.",
    category: "blender",
    tags: ["Character Modeling", "Blender", "Turnaround"]
  },
  {
    id: "blender-clay-turntable",
    type: "image",
    url: "/media/projects/blender/char-turnaround-2.jpeg",
    title: "Character Clay Pass & Silhouette Inspection",
    caption: "Clay shader render highlighting mesh topology, silhouette, and proportion control.",
    category: "blender",
    tags: ["Topology", "Clay Render", "Blender"]
  },
  {
    id: "blender-creature-anatomy",
    type: "image",
    url: "/media/projects/blender/7.jpeg",
    title: "Creature Muscular System & Biomechanics",
    caption: "Anatomical muscle layer simulation and bone attachment framework for quadruped locomotion.",
    category: "blender",
    tags: ["Biomechanics", "Muscle Simulation", "Blender"]
  },
  {
    id: "blender-feline-locomotion",
    type: "image",
    url: "/media/projects/blender/10.jpeg",
    title: "Quadruped Locomotion Breakdown (Skin, Muscle, Bone)",
    caption: "Three-tier anatomical animation pass comparing outer skin mesh, intermediate muscle volume, and skeletal kinematics.",
    category: "blender",
    tags: ["Anatomy", "Walk Cycle", "CGI Simulation"]
  },
  {
    id: "blender-handcrafted-rig",
    type: "image",
    url: "/media/projects/blender/3.jpeg",
    title: "Full Body Skeletal Armature Rigging",
    caption: "Inverse kinematics (IK) rigging setup across head, chest, spine, and lower limbs in Blender.",
    category: "blender",
    tags: ["Rigging", "IK Armature", "Blender"]
  },
  {
    id: "blender-character-anim-reel",
    type: "video",
    url: "/media/projects/blender/character-animation.mp4",
    title: "Character Locomotion Animation Reel",
    caption: "Full-body character walking dynamics, foot roll, weight shift, and timing study.",
    category: "blender",
    tags: ["Locomotion", "Character Animation", "Blender"]
  },
  {
    id: "nuke-ocean-sim-reel",
    type: "video",
    url: "/media/projects/nuke/ocean-simulation.mp4",
    title: "Ocean Wave Simulation & Compositing",
    caption: "Dynamic ocean fluid wave displacement and surface foam simulation composited in Nuke.",
    category: "realtime",
    tags: ["Nuke", "Fluid Simulation", "VFX"]
  },

  // Awards & Milestones
  {
    id: "nvidia-stage-award",
    type: "image",
    url: "/media/awards/1.jpeg",
    title: "NVIDIA RTX AI PC Day Stage Presentation",
    caption: "Gowtham A on stage receiving the Award for Excellence in CGI Simulation with the official voucher and certificate.",
    category: "awards",
    tags: ["NVIDIA", "Award", "Recognition"]
  },
  {
    id: "nvidia-venue-photo",
    type: "image",
    url: "/media/awards/3.jpeg",
    title: "NVIDIA RTX AI PC Day Milestone",
    caption: "Gowtham at the NVIDIA RTX AI PC Day event in front of the keynote welcome banner.",
    category: "awards",
    tags: ["NVIDIA RTX", "Milestone", "Event"]
  },
  {
    id: "nvidia-workstation-demo",
    type: "image",
    url: "/media/awards/5.jpeg",
    title: "GPU Real-Time Simulation Interactive Test",
    caption: "Evaluating real-time graphics performance and simulation responsiveness on high-performance workstation.",
    category: "awards",
    tags: ["Hardware", "Simulation", "NVIDIA RTX"]
  }
];
