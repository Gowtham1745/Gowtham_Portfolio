// Lightweight, self-contained multi-cursor design intro for the home hero.
(() => {
  const hero = document.querySelector('[data-hero-redesign]');
  if (!hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4;
  const layer = document.createElement('div');
  layer.className = 'hero-cursor-layer';
  layer.setAttribute('aria-hidden', 'true');
  hero.appendChild(layer);

  const skip = hero.querySelector('[data-agent-skip]');
  const agentCount = hero.querySelector('[data-agent-count]');
  const layerCount = hero.querySelector('[data-layer-count]');
  const ns = 'http://www.w3.org/2000/svg';
  const colors = ['#69adff','#ff8b75','#a88cff','#6de0b5','#f1c46b','#f08bc8','#75d9e8','#c4e879'];
  const names = ['Design','Motion','Type','Color','Layout','Detail','Grid','Flow','Scale','Light','Form','Edit'];
  const desktopCount = lowPower ? 30 : 36;
  const count = reduceMotion ? 0 : (coarse ? 11 : desktopCount);
  const svg = document.createElementNS(ns,'svg');
  svg.setAttribute('class','hero-cursor-svg');
  layer.appendChild(svg);

  const NS = 'http://www.w3.org/2000/svg';
  const make = (tag,attrs,parent) => {
    const el=document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v)));
    parent.appendChild(el);return el;
  };
  const cursors=[];
  let frame=0, raf=0, start=0, introDone=false, stopped=false;
  const bounds=()=>hero.getBoundingClientRect();
  const size=()=>({w:Math.max(1,hero.clientWidth),h:Math.max(1,hero.clientHeight)});
  const selection=make('g',{class:'hero-selection-group'},svg);
  const selectRect=make('rect',{class:'hero-selection',x:0,y:0,width:120,height:60,rx:2},selection);
  const handles=[];
  for(let i=0;i<8;i++) handles.push(make('rect',{class:'hero-selection-handle',width:6,height:6,rx:1},selection));
  const label=make('text',{fill:'#78b8ff','font-size':10,'font-family':'IBM Plex Mono,monospace'},selection);

  const pathPoints=(w,h,i)=>{
    const x=w*(.08+Math.random()*.84), y=h*(.1+Math.random()*.75);
    return {x,y,phase:Math.random()*Math.PI*2,speed:.45+Math.random()*.8,rx:Math.max(30,w*(.08+Math.random()*.1)),ry:Math.max(25,h*(.05+Math.random()*.1)),color:colors[i%colors.length]};
  };
  for(let i=0;i<count;i++){
    const g=make('g',{class:'hero-cursor',opacity:0},svg);
    const group=make('g',{},g);
    make('path',{d:'M1 1 L1 20 L6 15 L10 24 L14 22 L10 13 L18 13 Z',fill:colors[i%colors.length],stroke:'#090909','stroke-width':1.2},group);
    const tag=make('g',{},group);
    make('rect',{x:17,y:1,width:Math.max(39,names[i%names.length].length*6+12),height:15,rx:3,fill:colors[i%colors.length]},tag);
    const t=make('text',{x:22,y:11,'font-size':8,'font-family':'IBM Plex Mono,monospace','font-weight':700,fill:'#111'},tag);
    t.textContent=names[i%names.length];
    const p=pathPoints(size().w,size().h,i);
    cursors.push({g,p,x:p.x,y:p.y,delay:Math.random()*650});
  }
  const updateSelection=(t,w,h)=>{
    const target=hero.querySelector(t<.3?'.hero-redesign-word':t<.62?'.hero-redesign-left':'.hero-redesign-photo');
    if(!target)return;
    const r=target.getBoundingClientRect(),b=bounds();
    const x=r.left-b.left,y=r.top-b.top;
    selectRect.setAttribute('x',x);selectRect.setAttribute('y',y);
    selectRect.setAttribute('width',r.width);selectRect.setAttribute('height',r.height);
    selectRect.classList.toggle('active',!introDone && t>.08 && t<.92);
    const pts=[[x,y],[x+r.width/2,y],[x+r.width,y],[x,y+r.height/2],[x+r.width,y+r.height/2],[x,y+r.height],[x+r.width/2,y+r.height],[x+r.width,y+r.height]];
    handles.forEach((el,i)=>{el.setAttribute('x',pts[i][0]-3);el.setAttribute('y',pts[i][1]-3);el.setAttribute('opacity',!introDone&&t>.08&&t<.92?1:0)});
    label.setAttribute('x',x);label.setAttribute('y',Math.max(12,y-7));label.textContent=Math.round(r.width)+' × '+Math.round(r.height);
    label.setAttribute('opacity',!introDone&&t>.08&&t<.92?1:0);
  };
  const animate=(now)=>{
    if(stopped)return;
    if(!start)start=now;
    const elapsed=now-start;
    const t=Math.min(1,elapsed/6800);
    const {w,h}=size();
    frame++;
    if(!introDone){
      const n=Math.round(18*t),l=Math.round(364*t);
      agentCount.textContent=String(n).padStart(2,'0');
      layerCount.textContent=String(l).padStart(3,'0');
      updateSelection(t,w,h);

      // Choreographed "live editing": transform/opacity only, with the final layout untouched.
      const headline=hero.querySelector('.hero-redesign-word');
      const portrait=hero.querySelector('.hero-redesign-photo');
      const copy=hero.querySelector('.hero-redesign-left');
      const glow=hero.querySelector('.hero-redesign-glow');
      const cta=hero.querySelector('.hero-redesign-cta');
      const phase=Math.min(1,elapsed/6800);
      if(headline) headline.style.transform=`scale(${phase<.32?(.94+phase*.24):phase<.62?(1.017-(phase-.32)*.08):1})`;
      if(portrait) portrait.style.translate=`0 ${phase>.34&&phase<.72?Math.sin(phase*18)*7:0}px`;
      if(copy) copy.style.translate=`${phase>.15&&phase<.52?Math.sin(phase*13)*9:0}px 0`;
      if(glow) glow.style.opacity=String(.68+.28*Math.sin(phase*Math.PI*5));
      if(cta) cta.style.scale=phase>.72&&phase<.82?'1.035':'1';
    }
    cursors.forEach((c,i)=>{
      const active=!introDone || i<Math.min(8,count);
      const p=c.p,phase=now*.00035*p.speed+p.phase;
      const targetX=p.x+Math.sin(phase+i)*p.rx+Math.cos(phase*.7)*p.rx*.35;
      const targetY=p.y+Math.cos(phase*1.1+i)*p.ry+Math.sin(phase*.8)*p.ry*.3;
      const ease=introDone?.018:.055;
      c.x+=(targetX-c.x)*ease;c.y+=(targetY-c.y)*ease;
      const opacity=introDone?(i<8?.42:0):(elapsed>c.delay?.95:0);
      c.g.setAttribute('transform',`translate(${c.x.toFixed(1)} ${c.y.toFixed(1)})`);
      c.g.setAttribute('opacity',String(opacity));
    });
    if(!introDone&&elapsed>=6800){
      introDone=true;
      cursors.forEach((c,i)=>{if(i>=8)c.g.style.transition='opacity .8s ease';});
      selectRect.classList.remove('active');
      handles.forEach(h=>h.setAttribute('opacity',0));
      label.setAttribute('opacity',0);
      agentCount.textContent='18';layerCount.textContent='364';
    }
    raf=requestAnimationFrame(animate);
  };
  const finish=()=>{
    if(introDone)return;
    start=performance.now()-6800;
    introDone=true;
    agentCount.textContent='18';layerCount.textContent='364';
    selectRect.classList.remove('active');handles.forEach(h=>h.setAttribute('opacity',0));label.setAttribute('opacity',0);
    cursors.forEach((c,i)=>c.g.setAttribute('opacity',i<8?'.42':'0'));
  };
  if(reduceMotion){
    layer.remove();
    hero.querySelector('[data-agent-bar]')?.remove();
    return;
  }
  skip?.addEventListener('click',finish);
  raf=requestAnimationFrame(animate);
  const onResize=()=>{const {w,h}=size();svg.setAttribute('viewBox',`0 0 ${w} ${h}`);};
  window.addEventListener('resize',onResize,{passive:true});
  onResize();
  // Fine-pointer parallax; touch devices keep the cut-out centered and still.
  if(!coarse){
    let px=0,py=0,scheduled=false;
    hero.addEventListener('pointermove',(event)=>{
      if(event.pointerType!=='mouse')return;
      const r=bounds();px=(event.clientX-r.left)/r.width-.5;py=(event.clientY-r.top)/r.height-.5;
      if(scheduled)return;scheduled=true;
      requestAnimationFrame(()=>{
        hero.querySelector('.hero-redesign-word-wrap').style.transform=`translate3d(calc(-50% + ${px*7}px),${py*5}px,0)`;
        hero.querySelector('.hero-redesign-photo').style.transform=`translate3d(calc(-50% + ${px*-10}px),${py*-6}px,0)`;
        scheduled=false;
      });
    },{passive:true});
    hero.addEventListener('pointerleave',()=>{
      hero.querySelector('.hero-redesign-word-wrap').style.transform='translateX(-50%)';
      hero.querySelector('.hero-redesign-photo').style.transform='translateX(-50%)';
    });
  }
  window.addEventListener('pagehide',()=>{stopped=true;cancelAnimationFrame(raf);window.removeEventListener('resize',onResize);},{once:true});
})();


// Site-wide 64-cursor swarm with real pointer tracking and live element selection.
(() => {
  const layer = document.querySelector('[data-cursor-swarm]');
  if (!layer || layer.dataset.initialized === 'true') return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;
  layer.dataset.initialized = 'true';

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'cursor-swarm-svg');
  svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);
  svg.setAttribute('preserveAspectRatio', 'none');
  layer.appendChild(svg);

  const colors = ['#b9eee2','#e9c58c','#8edfd1','#b8c9ff','#f0a9bb','#d7e9f2','#9cc9b8','#f1d6a7'];
  const labels = ['Gowtham','Design','Motion','Aero','Simulation','Visual','Creative','Explore','Detail','Engineering','Studio','Ideas'];
  const cursors = [];
  const make = (tag, attrs, parent) => {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    parent.appendChild(node);
    return node;
  };

  const selection = make('g', { class: 'swarm-selection', opacity: 0 }, svg);
  const selectionRect = make('rect', {
    x: 0, y: 0, width: 10, height: 10, rx: 5,
    fill: 'rgba(126,218,199,.045)', stroke: '#a7e5d7',
    'stroke-width': 1.15, 'stroke-dasharray': '5 4'
  }, selection);
  const handles = [];
  for (let i = 0; i < 8; i++) {
    handles.push(make('rect', {
      x: 0, y: 0, width: 6, height: 6, rx: 1.5,
      fill: '#0b1b20', stroke: '#e9c58c', 'stroke-width': 1.1
    }, selection));
  }
  const selectionLabel = make('text', {
    x: 0, y: 0, fill: '#e9c58c', 'font-size': 9,
    'font-family': 'IBM Plex Mono, monospace', 'letter-spacing': 1.2
  }, selection);
  let pointerX = window.innerWidth * .5;
  let pointerY = window.innerHeight * .4;
  let active = false;
  let pressed = false;
  let raf = 0;
  let lastTarget = null;
  let targetName = '';
  let pointerTime = 0;

  for (let i = 0; i < 64; i++) {
    const group = make('g', { class: 'swarm-cursor', opacity: 0 }, svg);
    const color = colors[i % colors.length];
    const size = i < 8 ? 1 : (i < 24 ? .86 : .72);
    const arrow = make('path', {
      d: 'M1 1 L1 20 L6.5 15 L10.5 24 L14 22 L10 13 L18 13 Z',
      fill: color, stroke: '#071116', 'stroke-width': 1.05,
      'stroke-linejoin': 'round'
    }, group);
    arrow.setAttribute('transform', 'scale(' + size + ')');
    if (i % 4 === 0) {
      const tag = make('g', {}, group);
      const labelText = labels[(i / 4) % labels.length];
      make('rect', { x: 15, y: 1, width: labelText.length * 5.5 + 10, height: 14, rx: 3, fill: '#0a1a20', stroke: color, 'stroke-width': .7 }, tag);
      const textNode = make('text', {
        x: 20, y: 10.5, fill: '#edf8f3', 'font-size': 7.5,
        'font-family': 'IBM Plex Mono, monospace', 'font-weight': 600
      }, tag);
      textNode.textContent = labelText;
    }
    const angle = i * 2.399963;
    const radius = 10 + Math.sqrt(i) * 17;
    cursors.push({
      group, x: pointerX, y: pointerY, angle, radius,
      lag: .12 + (i % 7) * .012,
      speed: .35 + (i % 9) * .055,
      phase: i * .47,
      size
    });
  }

  const setSize = () => {
    svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);
  };

  const isInside = (rect, x, y) =>
    rect && x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

  const chooseTarget = () => {
    const direct = document.elementFromPoint(pointerX, pointerY);
    const profile = document.querySelector('[data-profile-focus]');
    const portrait = document.querySelector('.hero-redesign-photo');
    const profileRect = profile?.getBoundingClientRect();
    const portraitRect = portrait?.getBoundingClientRect();

    if (isInside(profileRect, pointerX, pointerY)) return { element: profile, label: 'PROFILE PHOTO' };
    if (isInside(portraitRect, pointerX, pointerY)) return { element: portrait, label: 'PORTRAIT / 01' };

    const candidate = direct?.closest(
      '.hero-redesign-left, .hero-redesign-cta, .project-card, .featured-card, .skill-detail-card, .timeline-content, .contact-card, a, button, summary'
    );
    if (!candidate || candidate === layer || candidate === document.body) return null;
    let label = candidate.getAttribute('data-cursor-label');
    if (!label) {
      if (candidate.matches('.hero-redesign-left')) label = 'PROFILE / INFO';
      else if (candidate.matches('.hero-redesign-cta')) label = 'CALL TO ACTION';
      else if (candidate.matches('.project-card,.featured-card')) label = 'PROJECT';
      else if (candidate.matches('.skill-detail-card')) label = 'SKILLS';
      else if (candidate.matches('.timeline-content')) label = 'EXPERIENCE';
      else if (candidate.matches('a,button,summary')) label = 'INTERACT';
      else label = 'EXPLORE';
    }
    return { element: candidate, label };
  };

  const updateSelection = (target) => {
    if (!target?.element) {
      selection.setAttribute('opacity', '0');
      lastTarget = null;
      targetName = '';
      return;
    }
    const rect = target.element.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      selection.setAttribute('opacity', '0');
      return;
    }
    const pad = target.label === 'PORTRAIT / 01' ? 7 : 5;
    const x = rect.left - pad, y = rect.top - pad;
    const width = rect.width + pad * 2, height = rect.height + pad * 2;
    selectionRect.setAttribute('x', x);
    selectionRect.setAttribute('y', y);
    selectionRect.setAttribute('width', width);
    selectionRect.setAttribute('height', height);
    const points = [
      [x,y],[x+width/2,y],[x+width,y],[x,y+height/2],
      [x+width,y+height/2],[x,y+height],[x+width/2,y+height],[x+width,y+height]
    ];
    handles.forEach((handle, index) => {
      handle.setAttribute('x', points[index][0] - 3);
      handle.setAttribute('y', points[index][1] - 3);
    });
    selectionLabel.setAttribute('x', x);
    selectionLabel.setAttribute('y', Math.max(12, y - 9));
    selectionLabel.textContent = target.label;
    selection.setAttribute('opacity', '.96');
    lastTarget = target.element;
    targetName = target.label;
  };

  const move = (event) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen' || event.pointerType === 'mouse') {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerTime = performance.now();
      active = true;
      const target = chooseTarget();
      if (target?.element !== lastTarget || target?.label !== targetName) updateSelection(target);
    }
  };

  const animate = (now) => {
    raf = 0;
    if (!active || document.hidden) return;
    const elapsed = now * .001;
    const target = chooseTarget();
    if (target?.element !== lastTarget || target?.label !== targetName) updateSelection(target);
    else if (target?.element) updateSelection(target);

    cursors.forEach((cursor, index) => {
      const drift = elapsed * cursor.speed + cursor.phase;
      const orbit = cursor.radius * (1 + Math.sin(drift * .58) * .12);
      const targetX = pointerX + Math.cos(cursor.angle + drift) * orbit;
      const targetY = pointerY + Math.sin(cursor.angle + drift) * orbit * .62;
      cursor.x += (targetX - cursor.x) * cursor.lag;
      cursor.y += (targetY - cursor.y) * cursor.lag;
      const scale = pressed && index < 8 ? 1.16 : cursor.size;
      const opacity = Math.max(.28, .92 - index * .0095);
      cursor.group.setAttribute(
        'transform',
        'translate(' + cursor.x.toFixed(1) + ' ' + cursor.y.toFixed(1) + ') scale(' + scale + ')'
      );
      cursor.group.setAttribute('opacity', String(opacity));
    });

    // Keep the swarm alive briefly after the last movement so the trail settles naturally.
    if (now - pointerTime < 12000) raf = requestAnimationFrame(animate);
    else {
      active = false;
      cursors.forEach((cursor) => cursor.group.setAttribute('opacity', '0'));
      selection.setAttribute('opacity', '0');
      lastTarget = null;
      targetName = '';
    }
  };

  const schedule = () => {
    if (!raf && active) raf = requestAnimationFrame(animate);
  };

  window.addEventListener('pointermove', (event) => {
    move(event);
    schedule();
  }, { passive: true });
  window.addEventListener('pointerdown', (event) => {
    move(event);
    pressed = true;
    schedule();
  }, { passive: true });
  window.addEventListener('pointerup', () => { pressed = false; }, { passive: true });
  window.addEventListener('resize', setSize, { passive: true });
  window.addEventListener('scroll', () => {
    if (active) {
      const target = chooseTarget();
      if (target?.element !== lastTarget || target?.label !== targetName) updateSelection(target);
      schedule();
    }
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      active = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      cursors.forEach((cursor) => cursor.group.setAttribute('opacity', '0'));
      selection.setAttribute('opacity', '0');
    }
  });
  setSize();
})();
