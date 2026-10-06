export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  documentUrl?: string;
  previewImage?: string;
  category: 'simulation' | 'cad' | 'aerospace' | 'cgi';
  description: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    name: "Structural Analysis Virtual Internship",
    issuer: "Ansys · AICTE · EduSkills",
    date: "Oct – Dec 2024",
    credentialId: "262bfa8dd7ce39e45344e269ddbf406f",
    previewImage: "/media/certificates/ansys-structural-analysis.jpeg",
    category: "simulation",
    description: "10-week rigorous engineering internship curriculum supported by Ansys covering finite element structural modeling, mesh generation, stress convergence, and mechanical deformation analysis. Awarded Internship Grade: A.",
    skills: ["Ansys Mechanical", "Finite Element Analysis", "Structural Simulation", "Stress Analysis"]
  },
  {
    name: "Computational Fluid Mechanics — Airflow Around a Spoiler",
    issuer: "Coursera Project Network",
    date: "Nov 4, 2024",
    verifyUrl: "https://coursera.org/verify/CQDYOS8BMIN8",
    documentUrl: "/media/certificates/coursera-spoiler-airflow.pdf",
    category: "simulation",
    description: "Hands-on CFD project computing boundary-layer separation, wake recirculation zones, downforce generation, and surface pressure differentials across an automotive aerodynamic spoiler profile.",
    skills: ["CFD", "Aerodynamics", "Flow Simulation", "Boundary Layer Modeling"]
  },
  {
    name: "SOLIDWORKS Foundations: Sketching and Extrusion",
    issuer: "Dassault Systèmes · Coursera",
    date: "Sep 25, 2025",
    verifyUrl: "https://coursera.org/verify/Z409Q5PT86IJ",
    documentUrl: "/media/certificates/coursera-solidworks-foundations.pdf",
    category: "cad",
    description: "Authorized industry certification in parametric SolidWorks mechanical modeling, parametric sketch constraints, solid extrusions, and design-for-manufacturing workflows.",
    skills: ["SolidWorks", "Parametric CAD", "3D Modeling", "Mechanical Design"]
  },
  {
    name: "Introduction to CATIA V5",
    issuer: "EDUCBA · Coursera",
    date: "Sep 24, 2025",
    verifyUrl: "https://coursera.org/verify/G87Z4GYH3F88",
    documentUrl: "/media/certificates/coursera-catia-v5.pdf",
    category: "cad",
    description: "Core curriculum in Dassault Systèmes CATIA V5 Part Design, surface sketching, mechanical assembly constraints, and aerospace component structuring.",
    skills: ["CATIA V5", "Part Design", "Surface Modeling", "Assembly Modeling"]
  },
  {
    name: "Introduction to Game Design",
    issuer: "Epic Games · Coursera",
    date: "Sep 25, 2025",
    verifyUrl: "https://coursera.org/verify/ERMMLXJKKDAR",
    documentUrl: "/media/certificates/coursera-game-design-epic.pdf",
    category: "cgi",
    description: "Authorized Epic Games training covering real-time world-building principles, interactive level architecture, lighting design, environmental narrative, and asset integration in Unreal Engine.",
    skills: ["Unreal Engine", "Game Design", "Level Architecture", "Environmental Art"]
  },
  {
    name: "Skill Development Programme on Additive Manufacturing",
    issuer: "PSG College of Technology (PSG-MHI Industry Accelerator)",
    date: "August 2024",
    previewImage: "/media/certificates/psg-tech-additive-manufacturing.jpeg",
    category: "aerospace",
    description: "Intensive 3-day technical skill programme organized by the Dept. of Robotics and Automation Engineering covering additive manufacturing processes, DfAM principles, slice optimization, and industrial 3D printing.",
    skills: ["Additive Manufacturing", "DfAM", "3D Printing", "Rapid Prototyping"]
  },
  {
    name: "Skill Development & Entrepreneurship in Drone Technology",
    issuer: "Jet Aerospace · Supported by IHFC, IIT Delhi",
    date: "Sep 2023",
    previewImage: "/media/certificates/jet-aero-drone-tech.jpeg",
    category: "aerospace",
    description: "25-hour comprehensive training program supported by IHFC (Technology Innovation Hub of IIT Delhi) covering multirotor dynamics, drone avionics, flight mechanics, and propulsion setup.",
    skills: ["Drone Technology", "Multirotor Dynamics", "Avionics", "UAV Systems"]
  }
];
