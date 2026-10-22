export type Experience = {
  org: string;
  role: string; // confirm the official title for each placement
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
};

// Newest first.
export const experience: Experience[] = [
  {
    org: "Airtel Telecommunications",
    role: "Industrial trainee",
    period: "October 2026 to present",
    current: true,
    points: [
      "Six-month industrial placement, started in my 400 level year.",
      "Began with core networking foundations: TCP/IP, the OSI model, segments, packets and frames.",
    ],
  },
  {
    org: "Institute of Agricultural Research and Training",
    role: "Industrial trainee, IT support",
    period: "June to August 2026",
    location: "Moor Plantation, Ibadan",
    points: [
      "Computer maintenance, hardware troubleshooting, technical support and documentation.",
      "Wrote a small Python command-line tool for network device records.",
    ],
  },
  {
    org: "University of Ibadan College of Medicine, IT Unit",
    role: "Industrial trainee",
    period: "7 July to 26 September 2025",
    points: [
      "Network monitoring and troubleshooting, and connectivity troubleshooting.",
      "Device configuration and documentation, IT support, and network security learning.",
    ],
  },
];
