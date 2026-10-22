export const nav = [
  { label: "Technology", href: "/#technology" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Creative", href: "/#creative" },
  { label: "Contact", href: "/#contact" },
];

// `level` says honestly how far each area has gone. Edit as you grow.
export const techAreas = [
  { name: "Networking", level: "Studied, with workplace exposure", detail: "OSI model, TCP/IP, addressing, and Cisco Networking Fundamentals coursework." },
  { name: "Cybersecurity", level: "Studied, practising in learning labs", detail: "Cisco Introduction to Cyber Security coursework, and Linux practice environments (Ubuntu and Kali)." },
  { name: "Python and automation", level: "Used in a small project", detail: "A command-line tool for keeping network device records." },
  { name: "Software and APIs", level: "Exploring", detail: "FastAPI and Uvicorn, through the early stages of BOANERGES AI." },
  { name: "IT support", level: "Practised in two placements", detail: "Hardware maintenance, troubleshooting and documentation." },
];

export const creativeAreas = [
  "Piano and music",
  "Videography and editing",
  "Graphic design",
  "Media and audio",
];

// Fill these in when confirmed. Empty values are simply not shown.
export const contact: { email?: string; linkedin?: string; github?: string } = {};
