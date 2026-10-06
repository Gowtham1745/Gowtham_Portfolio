export interface SkillCategory {
  category: string;
  tagline: string;
  skills: {
    name: string;
    level: string; // "Core", "Advanced", "Proficient"
    note?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Simulation & CFD",
    tagline: "Computational fluid dynamics, finite element analysis, and aerodynamic modeling",
    skills: [
      { name: "ANSYS Fluent", level: "Core", note: "Boundary-layer meshing, turbulence models, pressure recovery" },
      { name: "Computational Fluid Dynamics (CFD)", level: "Core", note: "Internal duct aerodynamics, external flow over airfoils" },
      { name: "Structural Analysis (FEA)", level: "Advanced", note: "Static stress, deformation, cantilever beam bending" },
      { name: "Flow Distortion Analysis", level: "Core", note: "AIP total pressure recovery, swirl coefficient calculation" },
      { name: "Electromagnetic Simulation", level: "Proficient", note: "Motor stator/rotor magnetic flux density mapping" }
    ]
  },
  {
    category: "CAD & Aerospace Systems",
    tagline: "3D parametric modeling, airframe fabrication, and DfAM",
    skills: [
      { name: "SolidWorks", level: "Core", note: "Parametric solids, assemblies, sheet metal, drawing drafting" },
      { name: "CATIA V5 / 3DEXPERIENCE", level: "Advanced", note: "Part design, simulation preparation, spot-weld definitions" },
      { name: "Design for Additive Manufacturing (DfAM)", level: "Advanced", note: "Topology optimization, print orientation, lattice infill" },
      { name: "Aircraft Conceptual Design", level: "Advanced", note: "Airfoil selection, wing loading, stability & control" },
      { name: "UAV & RC Flight Systems", level: "Advanced", note: "Brushless propulsion, ESCs, servo rigging, KK board avionics" },
      { name: "3D Printing & Rapid Prototyping", level: "Core", note: "Thermoplastic slicing, dimensional tolerance verification" }
    ]
  },
  {
    category: "Real-Time Visualization & CGI",
    tagline: "High-fidelity real-time worlds, character rigging, and cinematic VFX",
    skills: [
      { name: "Unreal Engine 5.4", level: "Advanced", note: "Lumen global illumination, Nanite, volumetric fog, sequencer" },
      { name: "Blender 3D", level: "Core", note: "Hard-surface modeling, sculpting, full-body character rigging" },
      { name: "3D Character Animation", level: "Advanced", note: "Bipedal & quadruped locomotion, walk cycles, keyframing" },
      { name: "Creature Biomechanics & Muscle Simulation", level: "Advanced", note: "Anatomical muscle-to-bone deformation systems" },
      { name: "Nuke & After Effects", level: "Proficient", note: "Compositing, motion graphics, multi-pass color grading" }
    ]
  },
  {
    category: "Global Sourcing & Operations",
    tagline: "Industrial enterprise workflow, shipping documentation, and compliance",
    skills: [
      { name: "SAP ERP", level: "Core", note: "Delivery invoices, shipment processing, logistics module" },
      { name: "Material Identification Numbers (MIN)", level: "Core", note: "Item cataloging and barcode/QR generation" },
      { name: "Material Test Certificates (MTC)", level: "Core", note: "Chemical & mechanical property verification against EN 10204" },
      { name: "Heat Numbers Traceability", level: "Core", note: "Cast/forge metallurgical tracking through machining" },
      { name: "Radiographic Testing (RT) Records", level: "Core", note: "Non-destructive testing (NDT) quality validation records" },
      { name: "International Logistics Coordination", level: "Advanced", note: "Customs clearance, air/sea freight schedules, Spain liaison" }
    ]
  },
  {
    category: "EV & Automotive Systems",
    tagline: "Chassis packaging and electric powertrain integration",
    skills: [
      { name: "EV Battery Pack Packaging", level: "Advanced", note: "Skateboard module layout, thermal and crash clearance" },
      { name: "EV Motor Assembly Design", level: "Proficient", note: "Stator casing, rotor shaft alignment, bearing fits" },
      { name: "Spot Fastener Definition", level: "Advanced", note: "Automotive structural weld point coordinates in CATIA" }
    ]
  }
];
