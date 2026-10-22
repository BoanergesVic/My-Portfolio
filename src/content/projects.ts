export type Status = "Completed" | "In Progress" | "Prototype" | "Learning Project" | "Planned";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: Status;
  stack: string[];
  featured?: boolean;
};

// To add a project, add one entry here.
export const projects: Project[] = [
  {
    slug: "boanerges-ai",
    title: "BOANERGES AI",
    summary:
      "An intelligent assistant I am designing to work across web, desktop, mobile and voice. It is early: the Python and FastAPI foundation exists, and most of the roadmap is still planned.",
    status: "In Progress",
    stack: ["Python", "FastAPI", "Uvicorn"],
    featured: true,
  },
  {
    slug: "network-device-manager",
    title: "Python Network Device Manager",
    summary:
      "A small command-line tool for keeping records of network devices: register a device, list registered devices, and append each record to a text file.",
    status: "Learning Project",
    stack: ["Python"],
    featured: true,
  },
];
