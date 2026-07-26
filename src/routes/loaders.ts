import { projectImages } from "../constants/image.index";
import type { LoaderFunctionArgs } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  desc: string;
  fullDesc: string;
  color: string;
  client?: string;
  role?: string;
  duration?: string;
  image?: string;
  wireframeImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  features?: string[];
  challenge?: string;
  solution?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Sampli io",
    category: "Design System",
    tags: ["React", "TypeScript", "Figma", "Antd", "Redux"],
    year: "2024",
    client: "Sampli Labs",
    role: "Lead UI Engineer",
    duration: "4 Months",
    desc: "A comprehensive component library built for scale — covering 80+ components with full accessibility support and dark-mode tokens.",
    fullDesc: "Sampli io is a production-grade enterprise design system engineered for ultra-fast product iteration. Designed from the ground up to solve component divergence across engineering teams, it provides consistent design tokens, rigid TypeScript typings, and effortless accessibility out of the box.",
    color: "#c8b97e",
    image: projectImages.project,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://sampli.io",
    githubUrl: "https://github.com",
    stats: [
      { label: "Components Built", value: "80+" },
      { label: "Test Coverage", value: "98%" },
      { label: "Bundle Size", value: "14.2 KB" },
      { label: "Design Tokens", value: "120+" },
    ],
    features: [
      "Strict WAI-ARIA 1.2 compliance with automated keyboard navigation",
      "Dynamic dark/light mode token engine with zero runtime CSS overhead",
      "Interactive Storybook documentation with live snippet playgrounds",
      "Automated visual regression test suite integrated with CI/CD pipeline",
    ],
    challenge: "Maintaining design consistency across multiple disparate frontend repositories while ensuring high render performance and low bundle sizes.",
    solution: "Architected a headless core logic package coupled with modular CSS-in-JS design tokens, allowing sub-libraries to tree-shake unused utilities effortlessly.",
  },
  {
    id: "02",
    title: "Nova Dashboard",
    category: "Web App",
    tags: ["Next.js", "Tailwind", "Recharts", "WebSockets"],
    year: "2024",
    client: "Nova Analytics",
    role: "Frontend Architect",
    duration: "6 Months",
    desc: "Real-time analytics dashboard for a SaaS platform processing 2M+ events daily with WebSocket streaming and custom data visualizations.",
    fullDesc: "Nova Dashboard is an ultra-performant monitoring platform built to deliver instantaneous visual insights for large-scale distributed systems. Featuring customizable drag-and-drop widget layouts and live socket updates.",
    color: "#7eb8c8",
    image: projectImages.project1,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Daily Events", value: "2M+" },
      { label: "Latency", value: "< 25ms" },
      { label: "Widget Types", value: "24" },
      { label: "Active Users", value: "45K" },
    ],
    features: [
      "Real-time WebSocket data ingestion with automatic reconnect fallback",
      "Custom canvas-rendered high-frequency charts supporting 10,000 data points per second",
      "Customizable user dashboard layouts saved to Cloud state",
      "Export telemetry reports to PDF, CSV, and high-res vector graphics",
    ],
    challenge: "Handling continuous high-frequency WebSocket payload updates without triggering costly React re-renders or browser frame drops.",
    solution: "Implemented an off-screen Web Worker data buffer layer with batched React state dispatches synchronized to 60fps requestAnimationFrame callbacks.",
  },
  {
    id: "03",
    title: "Solara Brand",
    category: "Branding",
    tags: ["Identity", "Motion", "Web", "GSAP"],
    year: "2023",
    client: "Solara Energy Inc.",
    role: "Creative Director & Web Developer",
    duration: "3 Months",
    desc: "Full brand identity and marketing site for a climate-tech startup — from logo system to launch campaign with animated hero sequences.",
    fullDesc: "Solara Brand elevates clean energy technology into a modern visual experience. Incorporating fluid 3D web animations, sleek kinetic typography, and a sustainable eco-themed color palette.",
    color: "#c87e9a",
    image: projectImages.project,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Awards", value: "2 Awwwards" },
      { label: "Brand Assets", value: "50+" },
    ],
    features: [
      "Interactive 3D solar grid visualizer built with Three.js",
      "Custom GSAP scroll-triggered timeline sequences",
      "Dynamic typography scaling using SVG fluid clamp algorithms",
      "Dark luxury aesthetic with eco-conscious high-contrast color palettes",
    ],
    challenge: "Combining heavy 3D visuals and dynamic canvas graphics without compromising page load speeds or mobile browser performance.",
    solution: "Utilized progressive asset loading, GLTF compression, and dynamic LOD (level-of-detail) rendering for mobile viewports.",
  },
  {
    id: "04",
    title: "Meridian App",
    category: "Mobile",
    tags: ["React Native", "Expo", "Maps", "GraphQL"],
    year: "2023",
    client: "Meridian Transit",
    role: "Mobile App Engineer",
    duration: "5 Months",
    desc: "Cross-platform navigation app with custom map renderer, offline tile caching, and AR-assisted wayfinding for large venues.",
    fullDesc: "Meridian App revolutionizes indoor navigation for airports, stadiums, and mega-malls. By leveraging bluetooth beacons and AR overlays, users can navigate complex indoor multi-floor spaces with inch-level accuracy.",
    color: "#7ec87e",
    image: projectImages.project1,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Downloads", value: "150K+" },
      { label: "Map Render FPS", value: "60 FPS" },
      { label: "Offline Maps", value: "100%" },
    ],
    features: [
      "Augmented Reality direction vectors overlaid on live camera feeds",
      "Vector tile caching system for seamless zero-connectivity indoor navigation",
      "Multi-floor route calculation algorithms with elevator & ramp preferences",
      "Real-time location sharing and ETA updates via Bluetooth Mesh",
    ],
    challenge: "Calculating shortest paths across complex multi-floor 3D indoor geometry on low-power mobile devices.",
    solution: "Compiled a high-performance C++ A* navigation graph core into WebAssembly/Native modules within the React Native bridge.",
  },
  {
    id: "05",
    title: "Pulse CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "S3", "GraphQL"],
    year: "2023",
    client: "Pulse Media",
    role: "Full Stack Developer",
    duration: "4 Months",
    desc: "Headless CMS with a visual block editor, multi-tenant support, and a CDN-integrated media pipeline serving 50K+ assets.",
    fullDesc: "Pulse CMS is an ultra-fast content architecture crafted for publishing networks. Featuring live multi-user collaborative editing, dynamic block rendering, and automated image format conversion.",
    color: "#c8a07e",
    image: projectImages.project,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Assets Served", value: "50K+" },
      { label: "API Uptime", value: "99.99%" },
      { label: "GraphQL Queries", value: "10M/mo" },
      { label: "Multi-tenants", value: "120" },
    ],
    features: [
      "Notion-style drag and drop block content editor",
      "Automatic webp/avif image optimization via AWS Lambda @ Edge",
      "Granular role-based access controls with tenant isolation",
      "Instant webhooks for multi-channel static site generation triggers",
    ],
    challenge: "Ensuring real-time block editing synchronization between multiple concurrent content authors without data loss.",
    solution: "Integrated Conflict-free Replicated Data Types (CRDTs) over WebSockets with PostgreSQL event sourcing.",
  },
  {
    id: "06",
    title: "Echo CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "Redis"],
    year: "2023",
    client: "Echo Network",
    role: "Backend Architect",
    duration: "3 Months",
    desc: "Headless CMS with dynamic caching, multi-language localization, and localized CDN delivery.",
    fullDesc: "Echo CMS provides enterprise publishers with instant international content localization and edge caching.",
    color: "#a291fd",
    image: projectImages.project1,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Languages", value: "32" },
      { label: "Cache Hit Rate", value: "99.4%" },
    ],
    features: [
      "Automated AI-assisted multi-language translation pipeline",
      "Redis cluster edge distribution for instant endpoint responses",
    ],
    challenge: "Optimizing global content retrieval across multi-region cache nodes.",
    solution: "Designed smart Redis key invalidation patterns triggered by database mutations.",
  },
  {
    id: "07",
    title: "Fusion CMS",
    category: "Full Stack",
    tags: ["Next.js", "GraphQL", "Tailwind"],
    year: "2023",
    client: "Fusion Inc.",
    role: "Full Stack Engineer",
    duration: "4 Months",
    desc: "Modular content engine with component-driven layout builders and built-in AB testing.",
    fullDesc: "Fusion CMS empowers marketing teams to construct pixel-perfect landing pages using pre-tested React modules.",
    color: "#7eb8c8",
    image: projectImages.project,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "AB Tests Ran", value: "500+" },
      { label: "Build Time", value: "< 45s" },
    ],
    features: [
      "Visual drag-and-drop landing page compositor",
      "Built-in split testing engine with automated conversion tracking",
    ],
    challenge: "Building a secure server-rendered preview layer for unreleased marketing pages.",
    solution: "Leveraged Next.js draft mode and signed JWT preview cookies.",
  },
  {
    id: "08",
    title: "Sphere CMS",
    category: "Full Stack",
    tags: ["TypeScript", "Docker", "PostgreSQL"],
    year: "2023",
    client: "Sphere Systems",
    role: "Systems Engineer",
    duration: "5 Months",
    desc: "Containerized content backend built for high-throughput enterprise media streams.",
    fullDesc: "Sphere CMS powers video streaming metadata and digital media asset distribution across mobile and TV apps.",
    color: "#c87e9a",
    image: projectImages.project1,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Video Streams", value: "1M/day" },
      { label: "Container Nodes", value: "64" },
    ],
    features: [
      "HLS video metadata indexing and automated thumbnail extraction",
      "Dockerized microservices deployed on Kubernetes clusters",
    ],
    challenge: "Handling spike traffic during live broadcast events.",
    solution: "Configured Kubernetes Horizontal Pod Autoscalers based on queue depth metrics.",
  },
  {
    id: "09",
    title: "Spectrum CMS",
    category: "Full Stack",
    tags: ["React", "Express", "MongoDB"],
    year: "2023",
    client: "Spectrum Media",
    role: "Full Stack Developer",
    duration: "3 Months",
    desc: "Flexible JSON document store with schema builder and GraphQL query generation.",
    fullDesc: "Spectrum CMS allows developer teams to define custom data schemas on the fly without database migrations.",
    color: "#7ec87e",
    image: projectImages.project,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Schemas Created", value: "300+" },
      { label: "Query Speed", value: "12ms" },
    ],
    features: [
      "Dynamic GraphQL schema generation engine",
      "No-code JSON schema builder interface",
    ],
    challenge: "Indexing dynamic user-defined fields efficiently in MongoDB.",
    solution: "Used wild-card compound indexes and partial schema validation.",
  },
  {
    id: "10",
    title: "Vortex CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Vortex Tech",
    role: "Lead Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc: "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image: projectImages.project1,
    wireframeImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Encrypted Files", value: "250K" },
      { label: "Security Audit", value: "Passed" },
    ],
    features: [
      "AES-256 client-side file chunk encryption",
      "Presigned URL generation with strict rate-limiting",
    ],
    challenge: "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution: "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
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

export async function projectDetailLoader({ params }: LoaderFunctionArgs) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) {
    throw new Response("Project Not Found", { status: 404 });
  }
  return { project, allProjects: PROJECTS };
}
