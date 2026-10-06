export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  focusAreas?: string[];
  capstone?: {
    title: string;
    description: string;
  };
  activities?: string[];
  isPrimary: boolean;
}

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Aeronautical Engineering",
    institution: "Kumaraguru College of Technology",
    period: "October 2022 – April 2026",
    location: "Coimbatore, Tamil Nadu, India",
    isPrimary: true,
    focusAreas: [
      "Computational Fluid Dynamics (CFD)",
      "Aerospace Systems & Propulsion",
      "Aircraft Conceptual Design & Flight Mechanics",
      "Finite Element Analysis & Structural Simulation",
      "Additive Manufacturing in Aerospace"
    ],
    capstone: {
      title: "Design and Development of Intake Duct of Unmanned Aerial Target Vehicle (S-Duct)",
      description: "CFD analysis, geometric optimization, 3D printing, and wind tunnel experimental validation of an S-duct air intake for the ABHYAAS high-speed aerial target aircraft feeding a micro gas turbine engine."
    },
    activities: [
      "Executive, Media & Marketing — Department Association of Aeronautical Engineering (DAAE)"
    ]
  },
  {
    degree: "Senior Secondary (Class 12) — CBSE",
    field: "Computer Science & Mathematics",
    institution: "Nava Bharath National School",
    period: "June 2021 – March 2022",
    location: "Tamil Nadu, India",
    grade: "85%",
    isPrimary: false
  },
  {
    degree: "Secondary School Examination (Class 10) — CBSE",
    field: "General Secondary Curriculum",
    institution: "Nava Bharath National School",
    period: "June 2019 – March 2020",
    location: "Tamil Nadu, India",
    grade: "80%",
    isPrimary: false
  }
];
