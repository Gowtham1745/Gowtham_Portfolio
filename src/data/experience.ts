export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  type: string;
  location: string;
  current: boolean;
  tagline: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Graduate Engineer Trainee — Sourcing",
    org: "AMPO Valves India Pvt. Ltd.",
    period: "February 2026 – Present",
    type: "Full-time",
    location: "Coimbatore, Tamil Nadu, India",
    current: true,
    tagline: "Handling international shipment documentation, customs compliance, and engineering CAD/simulation support for a Spain-headquartered industrial valve manufacturer.",
    responsibilities: [
      "Generate delivery invoices and commercial shipping documentation for international sea and air consignments in SAP ERP.",
      "Create and catalog Material Identification Numbers (MIN) and generate QR codes for outgoing industrial valve consignments.",
      "Verify and manage Heat Numbers, Material Test Certificates (MTC), and Radiographic Testing (RT) quality inspection records.",
      "Coordinate shipment schedules, packing lists, and customs clearance requirements with cross-functional teams in Spain.",
      "Provide engineering CAD modeling support in SolidWorks and structural/fluid simulation support using ANSYS to ensure design accuracy and manufacturing readiness."
    ],
    skills: ["SAP ERP", "International Logistics", "MTC Compliance", "Heat Numbers", "RT Records", "SolidWorks", "ANSYS", "Customs Clearance"]
  },
  {
    role: "Flight Dynamics & Simulation Intern — RC Aircraft & Drones",
    org: "Jet Aerospace Aviation Research Center",
    period: "June 2025 – July 2025",
    type: "Internship",
    location: "Palakkad, Kerala, India",
    current: false,
    tagline: "Designed and fabricated high-wing RC trainer aircraft and quadcopter platforms from aerodynamic concepts through to flight-ready prototypes.",
    responsibilities: [
      "Carried aircraft concept from aerodynamic calculations through airfoil template cutting, wing rib assembly, and flight-ready prototype.",
      "Conducted CAD modeling, coroplast sheet fabrication, and structural aluminum spar alignment for high-impact durability.",
      "Integrated brushless motors, electronic speed controllers (ESC), LiPo batteries, and micro servo control linkages.",
      "Configured and calibrated KK multicopter flight controller boards with real-time LCD sensor telemetry (gyro stabilization, roll/pitch angles).",
      "Conducted ground run-ups, center-of-gravity (CG) balancing, control throw deflection checks, and flight testing.",
      "Received official Letter of Recommendation from Dr. Balakannan Jayachandran (CMD, Jet Aerospace; Director General, Aeronautical Sector Skill Council)."
    ],
    skills: ["Aircraft Design", "Flight Dynamics", "Coroplast Airfoils", "Brushless Propulsion", "Avionics Rigging", "KK Board", "Flight Testing"]
  },
  {
    role: "Electric Vehicle Battery & Motor Design Intern",
    org: "Dassault Systèmes",
    period: "July 2025",
    type: "Internship",
    location: "Coimbatore, Tamil Nadu, India",
    current: false,
    tagline: "Focused on EV skateboard chassis structural packaging, battery pack containment, spot-weld specifications in CATIA, and electric motor flux simulation.",
    responsibilities: [
      "Modeled EV skateboard chassis floorpan assemblies integrating modular battery cells, cross-members, and powertrain packaging.",
      "Defined spot-weld fastener specifications and 3D coordinate locations using CATIA 3DEXPERIENCE Simulation Model Preparation tools.",
      "Analyzed stator/rotor magnetic flux field density and saturation distributions for electric traction motors.",
      "Applied Design for Assembly (DFA) and automotive structural safety considerations to ensure lightweight integration and battery crashworthiness."
    ],
    skills: ["CATIA 3DEXPERIENCE", "SolidWorks", "SIMULIA", "EV Battery Packaging", "Electromagnetic Simulation", "Fastener Definition"]
  },
  {
    role: "3D Artist, Blender Animator & Motion Graphics Designer",
    org: "Pixar Prince Animation Studio",
    period: "January 2024 – April 2026",
    type: "Freelance",
    location: "Coimbatore, Tamil Nadu, India",
    current: false,
    tagline: "Developed high-fidelity 3D character animations, dynamic physical simulations, cinematic lighting, and motion graphics.",
    responsibilities: [
      "Crafted 3D character turnaround models, skeletal armatures, and full-body rigging (head, chest, spine, limb locomotion) in Blender.",
      "Produced creature anatomy simulations, muscle-to-bone systems, and quadruped walk-cycle mechanics.",
      "Directed cinematic camera choreography, depth of field, and PBR lighting passes for high-impact visual storytelling.",
      "Engineered particle destruction simulations (rigid body fracture, object-to-dust) and sci-fi VFX composited with After Effects and Nuke.",
      "Honored with the NVIDIA AI PC Day Award for Excellence in CGI Simulation for outstanding creative and technical execution."
    ],
    skills: ["Blender 3D", "3D Animation", "Character Rigging", "Creature Simulation", "Unreal Engine", "Nuke Compositing", "After Effects", "Motion Graphics"]
  }
];
