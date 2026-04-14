// Extract PROJECTS from the component
const PROJECTS = [
  {
    id: "01",
    title: "Aether UI",
    category: "Design System",
    tags: ["React", "TypeScript", "Figma"],
    year: "2024",
    desc: "A comprehensive component library built for scale — covering 80+ components with full accessibility support and dark-mode tokens.",
    color: "#c8b97e",
  },
  {
    id: "02",
    title: "Nova Dashboard",
    category: "Web App",
    tags: ["Next.js", "Tailwind", "Recharts"],
    year: "2024",
    desc: "Real-time analytics dashboard for a SaaS platform processing 2M+ events daily with WebSocket streaming and custom data visualizations.",
    color: "#7eb8c8",
  },
  {
    id: "03",
    title: "Solara Brand",
    category: "Branding",
    tags: ["Identity", "Motion", "Web"],
    year: "2023",
    desc: "Full brand identity and marketing site for a climate-tech startup — from logo system to launch campaign with animated hero sequences.",
    color: "#c87e9a",
  },
  {
    id: "04",
    title: "Meridian App",
    category: "Mobile",
    tags: ["React Native", "Expo", "Maps"],
    year: "2023",
    desc: "Cross-platform navigation app with custom map renderer, offline tile caching, and AR-assisted wayfinding for large venues.",
    color: "#7ec87e",
  },
  {
    id: "05",
    title: "Pulse CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
  {
    id: "06",
    title: "Echo CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
  {
    id: "07",
    title: "Fusion CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
  {
    id: "08",
    title: "Sphere CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
  {
    id: "09",
    title: "Spectrum CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
  {
    id: "10",
    title: "Vortex CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3"],
    year: "2023",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    color: "#c8a07e",
  },
];

export async function rootLoader() {
  return {
    message: "Welcome to the portfolio"
  };
}

export async function projectsLoader() {
  return {
    projects: PROJECTS
  };
}
