export interface Achievement {
  title: string;
  organization: string;
  category: string;
  date: string;
  description: string;
  highlights: string[];
  images: string[];
}

export const achievements: Achievement[] = [
  {
    title: "NVIDIA AI PC Day Award for Excellence in CGI Simulation",
    organization: "NVIDIA RTX AI PC Day",
    category: "Technical Visualization & CGI",
    date: "2024–2025",
    description: "Honored at the prestigious NVIDIA RTX AI PC Day for demonstrating technical excellence in realistic CGI simulation, complex 3D character/creature modeling, and real-time visual computing pipelines.",
    highlights: [
      "Presented advanced 3D simulations developed using Blender, Unreal Engine, and GPU-accelerated computing.",
      "Recognized for intricate creature biomechanics, skeletal/muscular walk-cycle simulations, and environmental world-building.",
      "Awarded official NVIDIA RTX AI PC Day voucher and certificate on stage before industry leaders."
    ],
    images: [
      "/media/awards/1.jpeg",
      "/media/awards/3.jpeg",
      "/media/awards/5.jpeg",
      "/media/awards/4.jpeg",
      "/media/awards/2.jpeg"
    ]
  }
];
