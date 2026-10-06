export interface ProjectMediaItem {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  caption: string;
  alt: string;
}

export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  domain: 'aerospace' | 'systems' | 'cgi' | 'design';
  year: string;
  period: string;
  status: string;
  featured: boolean;
  blurb: string;
  association: string;
  role: string;
  location?: string;
  tools: string[];
  heroImage: string;
  href: string;
  objectives: string[];
  workflow: string[];
  sections: ProjectSection[];
  media: ProjectMediaItem[];
}

export const projects: Project[] = [
  {
    slug: "abhyaas-uav-s-duct",
    title: "ABHYAAS UAV — S-Duct Intake",
    subtitle: "CFD-Based Design and Optimization of Intake Duct for High-Speed Target UAV",
    category: "Aerospace · CFD",
    domain: "aerospace",
    year: "2025–2026",
    period: "October 2025 – April 2026",
    status: "Completed",
    featured: true,
    blurb: "CFD-based design and aerodynamic optimization of an S-duct air intake for the ABHYAAS aerial target UAV, fabricated via 3D printing and validated through wind tunnel testing.",
    association: "Kumaraguru College of Technology",
    role: "Lead CFD & Aerodynamic Design Engineer",
    tools: ["ANSYS Fluent", "CFD", "SolidWorks", "Additive Manufacturing", "Wind Tunnel Testing"],
    heroImage: "/media/cover.jpeg",
    href: "/projects/abhyaas-uav-s-duct",
    objectives: [
      "Design an aggressive compact S-duct intake conforming strictly to the internal volume envelope of the ABHYAAS high-speed target aircraft airframe.",
      "Deliver smooth, high-energy airflow to the micro gas turbine engine face while minimizing pressure loss.",
      "Mitigate flow separation and severe secondary flow vortex generation typical of aggressive curved bends.",
      "Minimize circumferential and radial total pressure distortion at the aerodynamic interface plane (AIP).",
      "Validate computational predictions against physical subsonic wind tunnel experimental measurements using a 3D-printed prototype."
    ],
    workflow: [
      "Parametric CAD airframe boundary and intake centerline curve definition in SolidWorks.",
      "3D Navier-Stokes CFD domain discretization and boundary-layer prism meshing in ANSYS.",
      "Turbulence modeling (k-omega SST) to resolve boundary-layer adverse pressure gradients and swirl distortion.",
      "Geometric inflection optimization to prevent centerline flow stall and total pressure deficit.",
      "Design for Additive Manufacturing (DfAM) slicing and precision 3D printing of the duct assembly.",
      "Low-speed wind tunnel testing with multi-hole Pitot-static pressure rake instrumentation.",
      "Experimental-to-computational correlation and performance validation."
    ],
    sections: [
      {
        title: "Engineering Background",
        content: "The ABHYAAS UAV is an indigenous high-speed unmanned aerial target vehicle designed for testing weapon systems. Powered by a micro turbojet/gas turbine engine, the propulsion unit demands clean, undistorted airflow to prevent compressor surge and flameout. However, airframe packaging constraints dictate a serpentine (S-duct) intake geometry with compound curvature, where centrifugal forces generate transverse pressure gradients, secondary vortex pairs, and flow separation along the lower bend."
      },
      {
        title: "Aerodynamic Challenges & Solutions",
        content: [
          "Curvature-Induced Secondary Flow: In an S-duct, the dual inflection points generate counter-rotating vortices that transport low-momentum boundary layer fluid to the engine face. Solution: Optimized cross-sectional area distribution and fillet radii along the duct centerline to attenuate cross-stream pressure gradients.",
          "Engine Face Distortion: High distortion levels jeopardize micro gas turbine operability. Solution: Refined the diffusion angle and length-to-diameter ratio (L/D) to ensure continuous positive pressure recovery gradient.",
          "Fabrication Precision: Internal surface roughness in 3D-printed conduits can induce premature turbulence trip. Solution: Optimized build orientation, fine layer height printing, and post-process surface smoothing prior to wind tunnel installation."
        ]
      },
      {
        title: "Experimental Validation",
        content: "The optimized S-duct geometry was 3D printed and mounted into the subsonic wind tunnel test section. Total pressure and static pressure taps at the aerodynamic interface plane measured recovery characteristics across varying angles of attack and inlet velocities. Comparison between ANSYS Fluent CFD simulations and physical test data confirmed consistent pressure recovery and low distortion patterns matching computational predictions."
      }
    ],
    media: [
      {
        type: "image",
        url: "/media/projects/ev-design/2.jpeg",
        caption: "CAD surface layout and parametric duct modeling interface.",
        alt: "CAD model preparation and geometry definition"
      },
      {
        type: "image",
        url: "/media/certificates/ansys-structural-analysis.jpeg",
        caption: "Structural Analysis Virtual Internship certification supported by Ansys.",
        alt: "Ansys Structural Analysis Certificate"
      }
    ]
  },
  {
    slug: "rc-aircraft",
    title: "RC Aircraft — Jet Aerospace",
    subtitle: "Aerodynamic Design, Airframe Fabrication & Flight Systems Integration",
    category: "Aerospace · Systems",
    domain: "aerospace",
    year: "2025",
    period: "June 2025 – July 2025",
    status: "Completed",
    featured: true,
    blurb: "Design, coroplast airfoil cutting, lightweight aluminum spar assembly, propulsion/servo rigging, and flight-readiness testing of a high-wing trainer RC aircraft.",
    association: "Jet Aerospace Aviation Research Center",
    role: "Aircraft Design & Flight Systems Intern",
    location: "Pudussery, Palakkad, Kerala, India",
    tools: ["CAD Modeling", "Flight Dynamics", "Coroplast Airfoil Fabrication", "Brushless Propulsion", "ESC & Servos", "2.4GHz RC Systems"],
    heroImage: "/media/projects/rc-aircraft/1.jpeg",
    href: "/projects/rc-aircraft",
    objectives: [
      "Design a stable, high-wing trainer RC aircraft optimized for predictable low-speed flight characteristics and stall recovery.",
      "Calculate wing loading, center of gravity (CG), aerodynamic center, and tail volume ratios for longitudinal and directional stability.",
      "Fabricate a durable, impact-resistant airframe using lightweight corrugated plastic (coroplast) and structural aluminum spars.",
      "Integrate brushless outrunner propulsion, electronic speed controller (ESC), LiPo battery pack, and high-torque micro servos.",
      "Rig control linkages (ailerons, elevator, rudder) and execute ground telemetry tests and pre-flight validation."
    ],
    workflow: [
      "Wing geometry definition: aspect ratio, chord length, camber profile, and polyhedral angle determination.",
      "Airfoil profile cutting from coroplast sheets and spacing rib sections along an extruded aluminum spar.",
      "Fuselage layout, motor firewall fabrication, and internal electronics tray positioning for precise CG alignment.",
      "Empennage fabrication: cutting horizontal and vertical stabilizers with control horn installations.",
      "Control rod wire bending, servo zeroing, linkage hookup, and travel limit calibration via 2.4GHz transmitter.",
      "Power train testing: static thrust measurement, motor heat dissipation check, and control-surface deflection verification.",
      "Pre-flight taxi checks, glide angle evaluation, and flight-readiness handover."
    ],
    sections: [
      {
        title: "Hands-on Aerospace Engineering",
        content: "Conducted on-site at Jet Aerospace's drone manufacturing facility in Palakkad, Kerala, this project translated theoretical aerodynamics directly into physical flight hardware. Every phase — from tracing the cambered airfoil template onto corrugated sheets to calculating the tail moment arm — was executed by hand with engineering precision."
      },
      {
        title: "Airframe Architecture & Structural Integrity",
        content: [
          "Wing Assembly: Utilized high-visibility yellow coroplast folded over precision-spaced airfoil ribs with an extruded aluminum channel spar. This ensured exceptional bending rigidity under high aerodynamic load while retaining elasticity to absorb rough landings.",
          "Tail Surface Alignment: Rigged horizontal and vertical empennage surfaces with zero angular deflection, securing steel pushrod linkages from fuselage-mounted servos to nylon control horns.",
          "Propulsion Integration: Matched brushless outrunner motor KV rating with optimal propeller pitch/diameter to achieve a favorable thrust-to-weight ratio for sustained climb gradients."
        ]
      },
      {
        title: "Validation & Findings",
        content: "Pre-flight checks verified center of gravity within 28-30% of the mean aerodynamic chord (MAC). Control surface throws responded linearly without mechanical slop, and static motor run-ups demonstrated clean throttle response across the operational envelope."
      }
    ],
    media: [
      {
        type: "image",
        url: "/media/projects/rc-aircraft/1.jpeg",
        caption: "Gowtham A holding the completed flight-ready high-wing RC aircraft at Jet Aerospace, Palakkad, Kerala.",
        alt: "Gowtham holding the completed yellow RC plane"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/7.jpeg",
        caption: "Full aircraft assembly displaying wing dihedral, high-wing cabin mount, and tail control surfaces.",
        alt: "Assembled RC plane showing overall airframe"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/3.jpeg",
        caption: "Precision alignment of wing ribs and structural spar on the assembly workbench.",
        alt: "Wing rib and spar alignment during build"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/4.jpeg",
        caption: "Detail of corrugated plastic airfoil templates cut for chord and camber consistency.",
        alt: "Airfoil ribs cut from sheet material"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/5.jpeg",
        caption: "Rigging the empennage pushrod linkages and control horn on the vertical and horizontal stabilizers.",
        alt: "Empennage servo linkage installation"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/6.jpeg",
        caption: "Inspecting wing camber profile and leading-edge curvature prior to top skin sealing.",
        alt: "Wing camber inspection"
      },
      {
        type: "image",
        url: "/media/projects/rc-aircraft/2.jpeg",
        caption: "Underside perspective highlighting propulsion wiring, battery compartment, and Jet Aerospace banner.",
        alt: "Underside view of RC plane airframe"
      }
    ]
  },
  {
    slug: "pandora-unreal-environment",
    title: "Pandora-Inspired Unreal Environment",
    subtitle: "Real-Time World Building, Volumetric Lighting & Cinematic Rendering in UE 5.4",
    category: "CGI/VFX · Real-Time",
    domain: "cgi",
    year: "Dec 2025",
    period: "December 2025",
    status: "Completed",
    featured: true,
    blurb: "A rich Pandora-inspired alien environment crafted in Unreal Engine 5.4 over an intense one-week sprint — featuring custom terrain sculpting, foliage ecosystems, lighting, and cinematic camera passes.",
    association: "Kumaraguru College of Technology",
    role: "Environment Artist & Cinematic Animator",
    tools: ["Unreal Engine 5.4", "Lumen Global Illumination", "Nanite", "Blender", "After Effects", "Particle VFX"],
    heroImage: "/media/projects/blender/11.jpeg",
    href: "/projects/pandora-unreal-environment",
    objectives: [
      "Construct a highly detailed alien biome environment in Unreal Engine 5.4 within a concentrated seven-day development timeframe.",
      "Sculpt dynamic multi-tier terrain featuring dramatic rock overhangs, chasms, and layered elevations reminiscent of bioluminescent worlds.",
      "Implement dense procedural foliage scattering, custom asset placement, and subsurface scattering foliage shaders.",
      "Configure dynamic Lumen real-time global illumination, atmospheric fog, and particle-based light rays for cinematic mood.",
      "Direct, animate, and render high-fidelity camera sequences showcasing environmental storytelling."
    ],
    workflow: [
      "Concept moodboard and architectural spatial breakdown for the biome layout.",
      "Landscape heightmap generation, sculpting of natural landforms and rocky outcrops in Unreal Engine 5.4.",
      "Custom 3D asset modeling and hard-surface element prep in Blender with PBR texturing.",
      "Layered foliage painting with density masks, wind vertex animation, and biome-specific material instances.",
      "Lighting design: volumetric fog, directional key light simulating atmospheric filtration, and local bioluminescent accents.",
      "Cinematic sequencer setup: keyframing multi-focal focal lengths, camera shake, and slow tracking pans.",
      "High-resolution rendering output and final color grade."
    ],
    sections: [
      {
        title: "Artistic & Technical Philosophy",
        content: "This project served as an intensive exploration of modern real-time visualization pipelines. Taking inspiration from the exotic ecology of Pandora, the goal was to build a convincing natural world that felt both grand in scale and biologically believable, while maintaining interactive framerates using Unreal Engine 5.4's Nanite virtualized geometry and Lumen dynamic lighting systems."
      },
      {
        title: "Core Technical Systems",
        content: [
          "Terrain & Topography: Multi-layered landscape materials with slope-based auto-blending between moss, rock, and damp soil to eliminate repetitive tiling.",
          "Foliage Density: Implemented custom foliage systems with wind shaders, subsurface light scattering, and LOD optimization to maintain visual fidelity without geometry pop-in.",
          "Atmosphere & Lighting: Tuned volumetric cloud shadows and local particle emitters to simulate suspended spore dust and moisture hazes illuminated by distant planetary light."
        ]
      },
      {
        title: "Recognition & Creative Progression",
        content: "This technical visualization work, combined with continuous 3D CGI practice in Blender, established the foundation that led to receiving the NVIDIA AI PC Day Award for Excellence in CGI Simulation."
      }
    ],
    media: [
      {
        type: "video",
        url: "/media/projects/pandora/the-horizon.mp4",
        caption: "The Horizon — Cinematic sequence panning across the distant terrain and atmospheric lighting.",
        alt: "The Horizon cinematic render in Unreal Engine 5"
      },
      {
        type: "video",
        url: "/media/projects/pandora/ancient-stillness.mp4",
        caption: "Ancient Stillness — High-fidelity tracking shot focusing on dense foliage layers and volumetric fog.",
        alt: "Ancient Stillness cinematic render in Unreal Engine 5"
      },
      {
        type: "video",
        url: "/media/projects/pandora/environment-art.mp4",
        caption: "Environment Art Reel — Technical asset and biome showcase highlighting material responses.",
        alt: "Environment art showcase reel"
      }
    ]
  },
  {
    slug: "contra-rotating-vawt",
    title: "Contra-Rotating VAWT",
    subtitle: "Dual-Rotor Vertical Axis Wind Turbine for Variable Low-Speed Wind Regimes",
    category: "Aerospace · Clean Energy",
    domain: "aerospace",
    year: "2025",
    period: "2025",
    status: "Completed",
    featured: false,
    blurb: "Aerodynamic and structural design of a contra-rotating vertical axis wind turbine (VAWT) engineered to enhance kinetic energy harvesting across low and turbulent wind conditions.",
    association: "Kumaraguru College of Technology",
    role: "Aerodynamic & Structural Design Engineer",
    tools: ["SolidWorks", "Aerodynamic Simulation", "Structural Design", "Kinetic Systems"],
    heroImage: "/media/cover.jpeg",
    href: "/projects/contra-rotating-vawt",
    objectives: [
      "Overcome the self-starting torque limitations of conventional Darrieus/Savonius vertical axis wind turbine configurations.",
      "Design a dual-stage counter-rotating rotor system where the inner and outer blades rotate in opposite directions.",
      "Improve overall power coefficient (Cp) in urban and variable low-velocity wind streams without requiring wind orientation mechanisms.",
      "Model structural shaft loads, bearing interfaces, and gearless counter-rotating generator coupling in SolidWorks.",
      "Analyze blade aerodynamic interactions and wake recovery across rotational cycles."
    ],
    workflow: [
      "Aerodynamic evaluation of symmetrical vs asymmetrical airfoil profiles under high local angles of attack.",
      "3D parametric modeling of upper and lower blade sets, central drive shafts, and planetary concentric shafts in SolidWorks.",
      "Blade structural loading calculations to evaluate centrifugal bending stress during peak rotational velocity.",
      "Assessment of counter-directional rotational torque balance and wake vortex dissipation.",
      "Design evaluation for decentralized urban micro-generation applications."
    ],
    sections: [
      {
        title: "Engineering Rationale",
        content: "Standard horizontal axis wind turbines (HAWTs) require active yaw mechanisms and laminar high-altitude winds, making them ill-suited for turbulent urban or localized low-wind environments. Vertical axis turbines are omnidirectional, but conventional single-rotor designs suffer from low initial starting torque and limited aerodynamic efficiency. By introducing counter-rotating stages, the relative rotational velocity between stator and rotor equivalents is doubled, significantly lowering the cut-in wind speed."
      },
      {
        title: "Structural & Kinematic Design",
        content: [
          "Blade Profile Selection: Engineered curved aerofoil blades designed to maximize lift-based torque during the upwind pass while minimizing drag resistance during the downwind return.",
          "Concentric Shaft Architecture: Modeled concentric coaxial drive shafts enabling independent contra-rotation without mechanical interference.",
          "Stress Mitigation: Optimized blade strut connections and hub fillets in SolidWorks to withstand cyclic centrifugal and aerodynamic shear stresses."
        ]
      }
    ],
    media: [
      {
        type: "image",
        url: "/media/cover.jpeg",
        caption: "Industrial design principles applied across mechanical energy systems.",
        alt: "Clean energy design concept"
      }
    ]
  },
  {
    slug: "drone-additive-manufacturing",
    title: "Drone Design & Additive Manufacturing",
    subtitle: "DfAM-Driven Airframe Components, Flight Electronics Packaging & Multirotor Prototyping",
    category: "Aerospace · DfAM",
    domain: "aerospace",
    year: "2024–2025",
    period: "September 2023 – July 2025",
    status: "Completed",
    featured: false,
    blurb: "Drone components designed for additive manufacturing, applying Design for Additive Manufacturing (DfAM) principles from CAD through physical multirotor build and validation.",
    association: "Jet Aerospace Drone Manufacturing Hub / IHFC IIT Delhi / KCT",
    role: "Drone Design & Additive Manufacturing Specialist",
    location: "Kanjikode & Pudussery, Kerala, India",
    tools: ["CAD", "Additive Manufacturing", "DfAM", "KK Multicopter Board", "Brushless Motors", "Propulsion Integration"],
    heroImage: "/media/projects/drone/3.jpeg",
    href: "/projects/drone-additive-manufacturing",
    objectives: [
      "Apply Design for Additive Manufacturing (DfAM) principles to eliminate excessive mechanical fasteners and reduce airframe structural mass.",
      "Design custom 3D-printed brackets, motor mount adapters, and vibration-damped electronics trays for multirotor platforms.",
      "Assemble and wire a four-rotor quadcopter platform incorporating brushless outrunners, ESC power harness, and LiPo batteries.",
      "Configure and calibrate the KK multicopter flight controller board (gyro/accelerometer self-leveling, pitch/roll telemetry).",
      "Execute motor direction validation, electronic speed calibration, and structural load tests."
    ],
    workflow: [
      "Structural topology study to identify non-critical load-bearing material for weight reduction.",
      "CAD modeling of interlocking arm clamps, landing gear pods, and central flight computer mounting decks.",
      "Selection of engineering thermoplastics (PETG/ABS) with optimized infill orientation for tensile load distribution.",
      "Mechanical assembly: mounting brushless motors, securing ESCs, and soldering power distribution harness.",
      "Flight computer installation: mounting KK board with silicone vibration dampening, LCD screen status verification.",
      "Transmitter binding, ESC throttle range calibration, gyro leveling, and roll/pitch response tuning.",
      "Hands-on flight testing and system handover at Jet Aerospace Drone Manufacturing Hub."
    ],
    sections: [
      {
        title: "Integration of DfAM with Drone Systems",
        content: "This project bridged additive manufacturing technology with functional drone development. Supported by training through IHFC (Technology Innovation Hub of IIT Delhi) and practical fabrication at Jet Aerospace, the work focused on replacing conventional heavy metallic brackets with custom 3D-printed thermoplastic components engineered to withstand high vibrational loads."
      },
      {
        title: "Avionics & Flight Control Configuration",
        content: [
          "Flight Controller Setup: Installed and configured a KK multi-copter control board featuring on-board LCD telemetry for real-time sensor monitoring (gyro calibration, roll/pitch angles, self-leveling verification).",
          "Power Distribution & Propulsion: Matched high-efficiency outrunner brushless motors with balanced composite propellers and dedicated ESCs to maintain steady hover authority.",
          "Structural Assembly: Validated rigid square-arm frame geometry ensuring true 90-degree motor alignment for uniform thrust vectoring."
        ]
      }
    ],
    media: [
      {
        type: "image",
        url: "/media/projects/drone/3.jpeg",
        caption: "Gowtham holding the assembled quadcopter drone and Avionic 2.4GHz transmitter at Jet Aerospace, Kanjikode, Kerala.",
        alt: "Gowtham holding quadcopter drone and remote controller"
      },
      {
        type: "image",
        url: "/media/projects/drone/1.jpeg",
        caption: "Engineering team assembling the quadcopter frame, ESC wiring harness, and motor mounts on-site.",
        alt: "Drone assembly on workbench"
      },
      {
        type: "image",
        url: "/media/projects/drone/2.jpeg",
        caption: "Detail of the KK flight controller board display displaying self-level status and gyro angles.",
        alt: "Flight controller LCD screen"
      },
      {
        type: "image",
        url: "/media/projects/drone/4.jpeg",
        caption: "Central flight controller plate installation and alignment onto the quadcopter structural arms.",
        alt: "Central plate installation"
      },
      {
        type: "image",
        url: "/media/projects/drone/5.jpeg",
        caption: "High-performance brushless outrunner motors, flight computer board, propeller, and hardware layout.",
        alt: "Drone propulsion components and flight controller"
      },
      {
        type: "image",
        url: "/media/projects/drone/6.jpeg",
        caption: "Team photo at Jet Aerospace celebrating completed quadcopter assembly and avionics integration.",
        alt: "Team photo with completed drone"
      },
      {
        type: "image",
        url: "/media/certificates/jet-aero-drone-tech.jpeg",
        caption: "Certificate of Skill Development in Drone Technology supported by IHFC - IIT Delhi and Jet Aerospace.",
        alt: "Drone Technology Certificate"
      },
      {
        type: "image",
        url: "/media/certificates/psg-tech-additive-manufacturing.jpeg",
        caption: "Additive Manufacturing Skill Development Programme certificate from PSG College of Technology.",
        alt: "PSG College of Technology Additive Manufacturing Certificate"
      }
    ]
  },
  {
    slug: "ev-battery-motor-design",
    title: "EV Battery & Motor Design",
    subtitle: "Electric Vehicle Skateboard Chassis Packaging, CATIA Spot-Welds & Motor Flux Analysis",
    category: "Design Engineering · EV",
    domain: "design",
    year: "Jul 2025",
    period: "July 2025",
    status: "Completed",
    featured: false,
    blurb: "Design internship at Dassault Systèmes covering EV battery pack structural layout, skateboard chassis packaging, spot fastener definitions in CATIA, and motor electromagnetic flux simulation.",
    association: "Dassault Systèmes",
    role: "Electric Vehicle Design & Simulation Intern",
    location: "Coimbatore, Tamil Nadu, India",
    tools: ["CATIA 3DEXPERIENCE", "SolidWorks", "SIMULIA", "Electromagnetic Simulation", "Packaging Design"],
    heroImage: "/media/projects/ev-design/1.jpeg",
    href: "/projects/ev-battery-motor-design",
    objectives: [
      "Model an electric vehicle skateboard chassis with integrated structural battery enclosure and drivetrain assemblies.",
      "Implement Design for Assembly (DFA) and automotive structural safety considerations into battery module containment.",
      "Define precise spot-weld fastener specifications and point coordinate locations in CATIA 3DEXPERIENCE simulation models.",
      "Simulate electric motor stator/rotor magnetic flux distribution and field density to evaluate electromagnetic performance.",
      "Address lightweighting and thermal considerations for high-density automotive powertrain integration."
    ],
    workflow: [
      "Requirements gathering for automotive electric vehicle skateboard architectures and structural battery integration.",
      "3D CAD assembly modeling of the floorpan, cross-members, battery casing, and front/rear suspension subframes.",
      "Application of CATIA 3DEXPERIENCE Fastener Definition tools to map spot welds across structural sheet metal joins.",
      "Electromagnetic finite element simulation of motor rotor/stator coils to inspect magnetic flux saturation.",
      "Thermal and mechanical clearance studies ensuring safe battery isolation from side-impact deformation zones.",
      "Technical presentation and documentation review with Dassault Systèmes mentors."
    ],
    sections: [
      {
        title: "Automotive Electrification & Structural Packaging",
        content: "Conducted during an internship with Dassault Systèmes, this project tackled core mechanical and electromagnetic challenges in modern electric vehicle design. Integrating high-voltage battery packs into the lower chassis requires stringent structural rigidity, vibration isolation, and protection against external intrusion."
      },
      {
        title: "Technical Execution in CATIA & SIMULIA",
        content: [
          "Skateboard Chassis Architecture: Designed a low-center-of-gravity chassis floorpan incorporating modular battery trays flanked by longitudinal side sills to absorb lateral crash energy.",
          "CATIA Spot Fastener Specification: Used CATIA 3DEXPERIENCE Simulation Model Preparation to specify joint zones, weld point locations, and fastener instances across structural subframe assemblies.",
          "Motor Electromagnetic Analysis: Simulated magnetic flux gradients across motor stator teeth and permanent magnet rotor poles to identify magnetic flux leakage and thermal hotspots."
        ]
      }
    ],
    media: [
      {
        type: "image",
        url: "/media/projects/ev-design/1.jpeg",
        caption: "Electric vehicle skateboard chassis CAD rendering displaying modular battery pack cells and rear drive unit.",
        alt: "EV skateboard chassis rendering with battery modules"
      },
      {
        type: "image",
        url: "/media/projects/ev-design/2.jpeg",
        caption: "3DEXPERIENCE CATIA interface showing spot-weld fastener definition and coordinate location mapping.",
        alt: "CATIA spot fastener definition screenshot"
      },
      {
        type: "image",
        url: "/media/projects/ev-design/3.jpeg",
        caption: "Electromagnetic stator/rotor magnetic flux density simulation plot evaluating electromagnetic distribution.",
        alt: "Electric motor electromagnetic simulation"
      },
      {
        type: "image",
        url: "/media/projects/ev-design/4.jpeg",
        caption: "Gowtham with Dassault Systèmes SIMULIA engineering representative during technical sessions.",
        alt: "Gowtham with Dassault Systèmes representative"
      },
      {
        type: "image",
        url: "/media/projects/ev-design/5.jpeg",
        caption: "3DEXPERIENCE engineering token and research notes on electromagnetic field calculations.",
        alt: "3DEXPERIENCE token and engineering notes"
      },
      {
        type: "image",
        url: "/media/projects/ev-design/6.jpeg",
        caption: "Technical presentation session showcasing EV vehicle packaging and simulation results.",
        alt: "Workshop presentation session"
      },
      {
        type: "image",
        url: "/media/certificates/coursera-solidworks-foundations.pdf",
        caption: "SOLIDWORKS Foundations: Sketching and Extrusion certification authorized by Dassault Systèmes.",
        alt: "Dassault Systèmes SOLIDWORKS Certificate"
      },
      {
        type: "image",
        url: "/media/certificates/coursera-catia-v5.pdf",
        caption: "Introduction to CATIA V5 certification authorized by EDUCBA.",
        alt: "CATIA V5 Course Certificate"
      }
    ]
  }
];
