import { projectImages } from "../constants/image.index";
import type { LoaderFunctionArgs } from "react-router-dom";

export type ProjectCategory =
  | "Mobile"
  | "Web"
  | "Design System"
  | "Full Stack"
  | "Web App"
  | "Branding"
  | "Others";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  desc: string;
  fullDesc: string;
  color: string;
  client?: string;
  role?: string;
  duration?: string;
  image?: string;
  bannerImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  features?: string[];
  challenge?: string;
  solution?: string;
  // App Store-style fields (for Mobile category projects)
  appIcon?: string;
  screenshots?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  rating?: number;
  reviewCount?: number;
  ageRating?: string;
  appSize?: string;
  version?: string;
  versionDate?: string;
  whatsNew?: string[];
  compatibility?: string[];
  developer?: string;
  appCategory?: string;
  price?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "DUDU Car Malaysia",
    category: "Mobile",
    tags: ["React Native", "TypeScript", "Node.js", "WebSockets", "Google Maps"],
    year: "2024",
    client: "DUDU CAR SDN. BHD.",
    role: "Mobile & Dashboard Developer",
    duration: "4 Months",
    desc: "Eco-Friendly Electric Taxi App for Sustainable and Modern Travel across Kuala Lumpur and Selangor.",
    fullDesc:
      "DUDU Car Malaysia is an innovative ride-hailing platform offering eco-friendly electric taxi services across Kuala Lumpur and Selangor. Designed with sustainability, convenience, and affordability in mind, the app connects passengers with professional electric vehicle (EV) drivers for a cleaner and smarter way to travel.\n\nWhether commuting, running errands, or exploring the city, DUDU provides a smooth and reliable travel experience while contributing to a greener future.\n\nWhy Choose DUDU Car Malaysia?\nDUDU delivers a modern, efficient, and environmentally conscious transportation solution. With a strong focus on user experience, safety, and sustainability, it is ideal for daily commuters, occasional travelers, and anyone seeking eco-friendly travel options. Download DUDU Car Malaysia and be part of the future of sustainable transportation.",
    color: "#30d158",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697366/logo_vms8k1.svg",
    bannerImage: projectImages.project1WithWirframe,
    liveUrl: "https://sampli.io",
    githubUrl: "https://github.com",
    stats: [
      { label: "Fleet Type", value: "100% EV" },
      { label: "Coverage", value: "KL & Selangor" },
      { label: "Emissions", value: "Zero Carbon" },
      { label: "Active Drivers", value: "500+" },
    ],
    features: [
      "Electric Vehicle Rides — 100% fully electric vehicles to reduce carbon emissions and urban air pollution",
      "Easy Ride Booking — Real-time driver matching and fast pickup/drop-off selection",
      "Professional Drivers — Verified and trained drivers committed to safe, dependable service",
      "Live Driver Tracking — Real-time GPS location tracking from pickup to destination",
      "In-App Communication — Direct in-app calls and messaging to coordinate pickup details",
      "Flexible Payment Options — Support for cash and digital payment methods",
      "Sustainable Urban Mobility — Promoting clean transportation by reducing reliance on fossil fuels",
    ],
    screenshots: [
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790706410/splash_screen_pjwx0z.svg",
      "https://play-lh.googleusercontent.com/MwSkaOD_B73X028tJSgnsboaeXDyhNc6gfU_OAZBYf0oBvPldQisAJrwQfw1yWktEpXNHAA6bOMa08Y61GFRPQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/_E21rSPAvb2bMHbfdGSJBdn_GLm-9EMT9hSe6a6lbvYy-7Z-Yd6AxugZHOtOg6FKkn0c8HccrUjdMpekVn2-8A=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/xwY8wFkXSMgzoyeasG5e6jwjgQSEvtjgIM4D_1LAih3FtvtdUivO31J5CBLXbWkOluzBQiwXfXI_9O9TUXNi9wA=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/IDKaT7w_WJlKNF1_obNmzRvyhN2m57KxCHjcreo4fhIb74X2S4JG6HUubCGTjiFJYQCQieMnawpdQKU-T6zCpw=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/1lolNZiXmkzX5fZnxcTyij9T7nYyB7h8DlJDBByAXV8h75_7iRjYLlACATjnFVHB3EERgATQHTm9Faqzl2uY=w2560-h1440-rw",
    ],
    challenge:
      "Architecting a low-latency dispatch and real-time EV telemetry tracking engine across dense metropolitan traffic conditions.",
    solution:
      "Implemented geospatial indexing with bidirectional WebSocket clusters and optimized route calculation algorithms for electric taxi fleets.",
    appIcon:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697366/logo_vms8k1.svg",
    whatsNew: [
      "Enhanced real-time driver tracking precision and ETA accuracy",
      "Added support for multiple digital wallet payment methods",
      "Optimized battery-aware EV dispatch routing",
      "Performance enhancements and bug fixes",
    ],
    compatibility: [
      "iPhone — Requires iOS 15.0 or later",
      "iPad — Requires iPadOS 15.0 or later",
      "Android — Requires Android 10.0 or later",
    ],
  },
  {
    id: "02",
    title: "FibrePro",
    category: "Mobile",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Invoicing",
      "Expense Tracking",
    ],
    year: "2025",
    client: "FibrePro",
    role: "Mobile App & Full Stack Developer",
    duration: "6 Months",
    desc: "Application for managing work, expenses, and invoices designed for freelancers, tradespeople, and small businesses.",
    fullDesc:
      "FibrePro is a simple and effective mobile financial management application designed for freelancers, tradespeople, self-employed entrepreneurs, and small businesses. Save time by centralizing your work, expenses, and invoices in one place, without having to deal with complicated payment systems.\n\nFibrePro is ideal for:\n• Freelancers who want to track their work and income.\n• Sole traders looking for a simple solution to manage their finances.\n• SMEs and independent contractors who want to avoid the complexity of accounting software.\n\nDownload FibrePro and start managing your work, expenses, and invoices more easily today.",
    color: "#7eb8c8",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697356/05679FE3-49FE-461C-A897-E70C020C4EA8_hyrgnf.svg",
    bannerImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "App Category", value: "Finance & Work" },
      { label: "Target Audience", value: "SMEs & Freelancers" },
      { label: "Document Types", value: "Invoices & Expenses" },
      { label: "Platform", value: "iOS & Android" },
    ],
    screenshots: [
      "https://play-lh.googleusercontent.com/epuA_If0LXrcdc_qOheh8_O51CO-1-4LXcPbBbzJ_srIzU5ZE3GSz74x6D_Uqtj8GfhE7OUgFTBG6V1yfx1mMQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/Ynnd0fCcKhh9V0rK6x2T4ykMwNEJJJx8AT8YH5XWWZjxSnzvitvyuVkTHLhtBPCIfB3TJtqejlgPCollbnlT=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/Ic8B8icpyofZqp7aX4cbBcWJ_ZtleKYFs0mf_HULydCESIpD9a9P9LlZDble_bSlgK9ask5h8avHOeOM8tBFVpQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/tEQPgS68RxgVL-2uGFaBzvlYeiB4wEQUaVpI-MN3EragbQol5ymrl4c8ZnFsz2JR4FTaEI7L_SZ3A4tXJM1Shg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/4-sP4Vfg5vtmkU-nMtJARcd4eC9mT4uB6KxEutrYfkIfRtYbdRQRURDGtMJllMK1d022h64nPuyhKXD8ZEk20Q=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/4-sP4Vfg5vtmkU-nMtJARcd4eC9mT4uB6KxEutrYfkIfRtYbdRQRURDGtMJllMK1d022h64nPuyhKXD8ZEk20Q=w2560-h1440-rw",
    ],
    features: [
      "Work, Invoice & Expense Management — Easily create, edit, and delete your work, invoices, and expenses in one place",
      "Activity Tracking — Track your professional or personal activities from a single application",
      "Intuitive Financial Overview — Clearly view your finances, revenue, and cash flow with a clean interface",
      "Document Organization — Organize your services, expenses, and billing documents in just a few clicks",
      "Simplified Accounting — Designed specifically to avoid the complexity of traditional accounting software",
    ],
    challenge:
      "Designing a frictionless mobile invoice and expense tracking workflow with offline support and instantaneous local PDF document generation.",
    solution:
      "Architected an offline-first SQLite synchronization engine with client-side reactive financial calculations and vector invoice template rendering.",
    appIcon:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697356/05679FE3-49FE-461C-A897-E70C020C4EA8_hyrgnf.svg",
    whatsNew: [
      "Invoice creation and expense category management enhancements",
      "New customizable PDF invoice export templates",
      "Performance improvements and simplified activity dashboard",
    ],
    compatibility: [
      "iPhone — Requires iOS 15.0 or later",
      "iPad — Requires iPadOS 15.0 or later",
      "Android — Requires Android 10.0 or later",
    ],
  },
  {
    id: "03",
    title: "DodaWork",
    category: "Mobile",
    tags: ["Identity", "Motion", "Web", "GSAP"],
    year: "2023",
    client: "Solara Energy Inc.",
    role: "Creative Director & Web Developer",
    duration: "3 Months",
    desc: "Full brand identity and marketing site for a climate-tech startup — from logo system to launch campaign with animated hero sequences.",
    fullDesc:
      "Solara Brand elevates clean energy technology into a modern visual experience. Incorporating fluid 3D web animations, sleek kinetic typography, and a sustainable eco-themed color palette.",
    color: "#c87e9a",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697347/image_7_f1jodi.svg",
    bannerImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Awards", value: "2 Awwwards" },
      { label: "Brand Assets", value: "50+" },
    ],
    screenshots:[
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790706911/Start_q1fjta.svg",
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707578/screen_ypjqkg.png",
    ],
    features: [
      "Interactive 3D solar grid visualizer built with Three.js",
      "Custom GSAP scroll-triggered timeline sequences",
      "Dynamic typography scaling using SVG fluid clamp algorithms",
      "Dark luxury aesthetic with eco-conscious high-contrast color palettes",
    ],
    challenge:
      "Combining heavy 3D visuals and dynamic canvas graphics without compromising page load speeds or mobile browser performance.",
    solution:
      "Utilized progressive asset loading, GLTF compression, and dynamic LOD (level-of-detail) rendering for mobile viewports.",
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
    fullDesc:
      "Meridian App revolutionizes indoor navigation for airports, stadiums, and mega-malls. By leveraging bluetooth beacons and AR overlays, users can navigate complex indoor multi-floor spaces with inch-level accuracy.",
    color: "#7ec87e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697337/ntsamaela-logo-blue_1_tkdo6p.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    challenge:
      "Calculating shortest paths across complex multi-floor 3D indoor geometry on low-power mobile devices.",
    solution:
      "Compiled a high-performance C++ A* navigation graph core into WebAssembly/Native modules within the React Native bridge.",
    // App Store metadata
    appIcon:
      "https://img.magnific.com/premium-vector/tik-tok-logo_578229-290.jpg?semt=ais_hybrid&w=740&q=80",
    screenshots: [
      "https://img.magnific.com/premium-vector/tik-tok-logo_578229-290.jpg?semt=ais_hybrid&w=740&q=80",
      projectImages.project,
      projectImages.project1WithWirframe,
      "https://img.magnific.com/premium-vector/tik-tok-logo_578229-290.jpg?semt=ais_hybrid&w=740&q=80",
      projectImages.project,
    ],
    rating: 4.9,
    reviewCount: 2847,
    ageRating: "4+",
    appSize: "68.4 MB",
    version: "3.2.1",
    versionDate: "Sep 15, 2023",
    whatsNew: [
      "Enhanced AR wayfinding with improved accuracy",
      "New offline map download manager with progress tracking",
      "Multi-floor 3D building visualization improvements",
      "Performance optimizations for smoother map rendering",
      "Bug fixes and stability improvements",
    ],
    compatibility: [
      "iPhone — Requires iOS 16.0 or later",
      "iPad — Requires iPadOS 16.0 or later",
      "Android — Requires Android 12.0 or later",
    ],
    developer: "Meridian Transit Inc.",
    appCategory: "Navigation",
    price: "Free",
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
    fullDesc:
      "Echo CMS provides enterprise publishers with instant international content localization and edge caching.",
    color: "#a291fd",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697329/omareldebel1_dwugb6.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    challenge:
      "Optimizing global content retrieval across multi-region cache nodes.",
    solution:
      "Designed smart Redis key invalidation patterns triggered by database mutations.",
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
    fullDesc:
      "Fusion CMS empowers marketing teams to construct pixel-perfect landing pages using pre-tested React modules.",
    color: "#7eb8c8",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697121/image_40_ymr6xe.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    challenge:
      "Building a secure server-rendered preview layer for unreleased marketing pages.",
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
    fullDesc:
      "Sphere CMS powers video streaming metadata and digital media asset distribution across mobile and TV apps.",
    color: "#c87e9a",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790697101/Asset_2_1_afrrv3.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    solution:
      "Configured Kubernetes Horizontal Pod Autoscalers based on queue depth metrics.",
  },
  {
    id: "09",
    title: "ReelCircle Fishing LLC",
    category: "Mobile",
    tags: ["React Native", "MongoDB"],
    year: "2024",
    client: "ReelCircle Fishing LLC",
    role: "App Developer",
    duration: "3 Months",
    desc: "A mobile application for anglers to record and share their fishing experiences.",
    fullDesc:
      "ReelCircle is a social fishing app that connects anglers from all over the world. Share your catches, exchange tips, and discover new fishing spots with a community of like-minded enthusiasts.",
    color: "#7ec87e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696956/FinalReelCircle_icon_2_xmczkg.svg",
    bannerImage: projectImages.project1WithWirframe,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    screenshots:[
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707999/Splash_Screen_1_a4utfd.svg",
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707842/1242px_2688px_SS_01_yr3isp.png",
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707842/1242px_2688px_SS_02_dmrouk.png",
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707871/1242px_2688px_SS_03_jznbej.png",
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790707842/1242px_2688px_SS_04_a3rdwu.png",
      
    ],
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
    title: "MindShift Peer Connect",
    category: "Mobile",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Community",
      "iOS",
    ],
    year: "2024",
    client: "MindShift",
    role: "Mobile App & Full Stack Developer",
    duration: "5 Months",
    desc: "A professional community designed to help members connect, collaborate, share expertise, and build meaningful referral relationships.",
    fullDesc:
      "MindShift Peer Connect is a professional community designed to help members connect, collaborate, share expertise, and build meaningful referral relationships.\n\nConnect with peers, participate in consultations, join discussions, discover community events, and grow your professional network — all from one convenient app.\n\nMindShift Peer Connect brings professional networking, peer support, knowledge sharing, and community engagement together in one place.",
    color: "#6366f1",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696997/ios-icon_2_vuxitv.svg",
    bannerImage: projectImages.project1WithWirframe,
    screenshots: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b0/92/f4/b092f4b8-a387-c745-684e-f9d9f36cdc7e/initials_1.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b6/38/c9/b638c9d9-5424-ae2d-434f-a178c7325b0a/splsh.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/65/46/69/65466968-944c-7fb3-3509-8a01bf762543/home-screen_1.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/88/4e/1d/884e1dcf-2349-98b0-be30-1f81391b1f28/consult_1.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ae/c0/73/aec0739b-f601-6188-6103-4d53ef35c9b5/details.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b8/81/32/b881321c-6436-71ce-0c0b-9b8d0eae4b42/chat_1.png/230x498bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/41/99/56/41995607-bd2a-3759-68d8-1e1c2f2f514a/profile_1.png/230x498bb.webp",
    ],
    liveUrl: "https://apps.apple.com",
    githubUrl: "https://github.com",
    stats: [
      { label: "Network Type", value: "Peer-to-Peer" },
      { label: "Discussions", value: "Live & Real-Time" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Safety", value: "Verified Members" },
    ],
    features: [
      "Peer Consultations — Post consultation requests, browse available consultations, and connect with peers for professional insight and collaboration",
      "Referral Network — Build and manage your personal referral network, discover other professionals, view profiles, and connect based on areas of expertise",
      "Professional Profiles — Create and manage your profile, highlight your expertise, and discover professionals within the community",
      "Live Discussions — Participate in real-time community discussions and interactive voice or video sessions",
      "Events — Discover Coffee Connect sessions, Lunch & Learn events, social events, and other community activities",
      "Direct Messaging — Communicate privately with other members through real-time messaging",
      "Notifications — Stay informed about messages, events, consultations, referral activity, and other important updates",
      "Community Safety — Report inappropriate content or behaviour and access tools designed to help maintain a respectful professional community",
      "Premium Membership — Expanded networking capabilities and additional insights designed to help members get more from the community",
    ],
    challenge:
      "Designing an intuitive multi-faceted professional networking platform with real-time consultations, live audio/video discussion rooms, and safe peer-to-peer referral management.",
    solution:
      "Engineered real-time WebSockets communication, WebRTC session streaming, and structured referral matchmaking pipelines within a secure React Native architecture.",
    appIcon:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696997/ios-icon_2_vuxitv.svg",
    whatsNew: [
      "Enhanced live discussion rooms with interactive audio and video sessions",
      "Streamlined peer consultation requests and scheduling",
      "Upgraded referral network exploration and member profiles",
      "Community safety reporting enhancements and UI polish",
    ],
    compatibility: [
      "iPhone — Requires iOS 15.0 or later",
      "iPad — Requires iPadOS 15.0 or later",
      "Android — Requires Android 10.0 or later",
    ],
  },
  {
    id: "11",
    title: "Protippz",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Protippz",
    role: "Frontend Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc:
      "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696955/unnamed_u6ioqi.webp",
    bannerImage: "https://res.cloudinary.com/dwlofuppw/image/upload/v1790709113/df4bfd11-86d7-4d4f-831f-735a2264344c.png",
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
    challenge:
      "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution:
      "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
  },
  {
    id: "12",
    title: "Vortex CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Vortex Tech",
    role: "Lead Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc:
      "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696955/Group_1171276009_zcynmh.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    challenge:
      "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution:
      "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
  },
  {
    id: "13",
    title: "Vortex CMS",
    category: "Full Stack",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Vortex Tech",
    role: "Lead Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc:
      "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696955/unnamed_u6ioqi.webp",
    bannerImage: projectImages.project1WithWirframe,
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
    challenge:
      "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution:
      "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
  },
  {
    id: "14",
    title: "Canaletto Sky World",
    category: "Mobile",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Vortex Tech",
    role: "Lead Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc:
      "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790696955/unnamed_1_tunk2y.webp",
    bannerImage: projectImages.project1WithWirframe,
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
    screenshots:[
      "https://play-lh.googleusercontent.com/796XBeNrtc_3ybuBNM4yntXWQhVd26NiDZtxBxuXiEem4kjh6Jx4RUv9WOh46bYQ5z4bsA-g0nFXdaoxxkyQxQ=w2560-h1440-rw",
      "http://play-lh.googleusercontent.com/Y3rj3MUpcpSyDg2cIPeAuG5SGMGLV6DfCbqhs7eMCDYPk-eMQxsbjPETVuIY6n8cs7gvW-zPmXmY25PGbywo=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/NvwsGAlitop4oN40HaWEkp0PcJ7ilx4DKbVMuw7Q0tWjwmh4-GYwYmMdYScPKAmyNudLOE38PCRMUgSn-1JzZg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/aLroLeg_GD0UPZ4ranPuhvhcOjerHXHmnGxSDdsL0MtWe7i9R5Hkez74stq4oSPlhxllVgnsMwL4XLPze-uvoBo=w2560-h1440-rw",
    ],
    challenge:
      "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution:
      "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
  },
  {
    id: "15",
    title: "Canaletto Sky World",
    category: "Mobile",
    tags: ["Node.js", "PostgreSQL", "AWS S3"],
    year: "2023",
    client: "Vortex Tech",
    role: "Lead Developer",
    duration: "4 Months",
    desc: "Secure asset management system with role-based encryption and CDN acceleration.",
    fullDesc:
      "Vortex CMS protects confidential corporate media assets with client-side encryption before cloud storage.",
    color: "#c8b97e",
    image:
      "https://res.cloudinary.com/dwlofuppw/image/upload/v1790706767/IconOnly_wzzsyi.svg",
    bannerImage: projectImages.project1WithWirframe,
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
    screenshots:[
      "https://play-lh.googleusercontent.com/796XBeNrtc_3ybuBNM4yntXWQhVd26NiDZtxBxuXiEem4kjh6Jx4RUv9WOh46bYQ5z4bsA-g0nFXdaoxxkyQxQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/Y3rj3MUpcpSyDg2cIPeAuG5SGMGLV6DfCbqhs7eMCDYPk-eMQxsbjPETVuIY6n8cs7gvW-zPmXmY25PGbywo=w2560-h1440-rw",
      "http://play-lh.googleusercontent.com/Y3rj3MUpcpSyDg2cIPeAuG5SGMGLV6DfCbqhs7eMCDYPk-eMQxsbjPETVuIY6n8cs7gvW-zPmXmY25PGbywo=w2560-h1440-rw",
    ],
    challenge:
      "Encrypting multi-gigabyte media files directly in the browser without freezing the UI thread.",
    solution:
      "Used Web Crypto API streams inside a Web Worker thread for chunked encryption.",
  },
];

export async function rootLoader() {
  return {
    message: "Welcome to the portfolio",
  };
}

export async function projectsLoader() {
  return {
    projects: PROJECTS,
  };
}

export async function projectDetailLoader({ params }: LoaderFunctionArgs) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) {
    throw new Response("Project Not Found", { status: 404 });
  }
  return { project, allProjects: PROJECTS };
}
