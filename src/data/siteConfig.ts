export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  currentOrg: string;
  location: string;
  headline: string;
  aboutIntro: string;
  aboutBio: string;
  interests: string[];
  contact: {
    linkedin: string;
    whatsapp: string;
    whatsappFormatted: string;
    instagram: string;
    instagramHandle: string;
    github: string;
    emailPlaceholder: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Gowtham A",
  title: "Gowtham A · Aeronautical Engineer & Technical Visualization Specialist",
  role: "Graduate Engineer Trainee – Sourcing",
  currentOrg: "AMPO Valves India",
  location: "Coimbatore, Tamil Nadu, India",
  headline: "Aeronautical engineer working at the intersection of design engineering, real-time visualization, and global operations.",
  aboutIntro: "Aeronautical Engineering graduate working at the intersection of design engineering, real-time visualization, and global operations.",
  aboutBio: "I am currently a Graduate Engineer Trainee in the Sourcing Department at AMPO Valves India, a Spain-headquartered industrial valve manufacturer. My day-to-day spans SAP-based shipment documentation and customs clearance, coordinating with our Spain team on logistics, and quality/compliance work including MTC, Heat Numbers, and Radiographic Testing records — alongside CAD and simulation support using SolidWorks and ANSYS.\n\nMy engineering foundation comes from a B.E. in Aeronautical Engineering at Kumaraguru College of Technology, where my final-year project used CFD analysis to design and optimize an S-duct air intake for the ABHYAAS UAV — fabricated via 3D printing and validated through wind tunnel testing.\n\nI have also worked on drone additive manufacturing, a contra-rotating VAWT design, an RC aircraft build with Jet Aerospace, and an EV battery/motor design internship at Dassault Systèmes.\n\nAlongside the engineering, I bring a strong CGI/3D and real-time visualization skill set — built through Blender, Unreal Engine, and After Effects work, including motion graphics and 3D animation at Pixar Prince Animation Studio. This was recognized with the NVIDIA AI PC Day Award for Excellence in CGI Simulation.\n\nI am open to roles in design engineering, simulation, supply chain/sourcing, or technical visualization.",
  interests: [
    "Design Engineering",
    "Engineering Simulation (CFD & FEA)",
    "Aeronautical Engineering & UAVs",
    "Aerospace Systems & Propulsion",
    "CAD & Design for Additive Manufacturing",
    "Real-Time Visualization (Unreal Engine 5.4)",
    "3D Animation & CGI Simulation (Blender)",
    "Global Sourcing & Supply Chain Operations"
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/gowtham1745/",
    whatsapp: "https://wa.me/917539982255",
    whatsappFormatted: "+91 7539982255",
    instagram: "https://www.instagram.com/gowtham_1745?stkn=MTBvemVzeHlmNjZ3ZQ==",
    instagramHandle: "gowtham_1745",
    github: "https://github.com/Gowtham1745",
    emailPlaceholder: "gowtham1745.eng@gmail.com" // clean fallback contact placeholder
  }
};
