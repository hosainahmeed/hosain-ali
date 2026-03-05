// import { useState } from "react";

// const articles = [
//   {
//     id: 1,
//     title: "The NIMBY War Against Micron",
//     subtitle:
//       "a chip company wants to bring 50,000 jobs to syracuse. but mountains of paperwork, 'endangered bats,' and nimbys from literally california have added years to th...",
//     author: "Ryan Hassan",
//     likes: 61,
//     comments: 11,
//     date: null,
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
//     imageAlt: "Micron groundbreaking ceremony with American flag and excavators",
//   },
//   {
//     id: 2,
//     title: "The Sound of Fury",
//     subtitle:
//       "inside anduril's race to build america's first autonomous fighter jet — and the pentagon's bet that robotic airpower will redefine warfare in the decades to come",
//     author: "Jack Beyrer",
//     likes: 71,
//     comments: 5,
//     date: "Feb 23",
//     image:
//       "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&q=80",
//     imageAlt: "Fighter jet in flight",
//   },
//   {
//     id: 3,
//     title: "How Claude (Maybe) Went to War",
//     subtitle:
//       "inside anthropic's supposed discomfort with a pentagon operation, and why you should probably stop tweeting about it",
//     author: "Ryan Hassan",
//     likes: 56,
//     comments: 12,
//     date: null,
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
//     imageAlt: "Two men in suits",
//     twoPortraits: true,
//   },
// ];

// const ArrowIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="text-white opacity-70"
//   >
//     <path
//       d="M3 8H13M13 8L9 4M13 8L9 12"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );


// function ArticleCard({ article }: any) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="flex flex-col cursor-pointer border border-[#444444b3] rounded-2xl overflow-hidden  relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         fontFamily: "'Georgia', 'Times New Roman', serif",
//       }}
//     >
//       {/* Image container */}
//       <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
//         <img
//           src={article.image}
//           alt={article.imageAlt}
//           className="w-full! h-56 max-h-56 object-cover"
//         />

//         {/* Arrow button */}
//         <div
//           className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center transition-all duration-200"
//           style={{
//             background: hovered ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.45)",
//             border: "1px solid rgba(255,255,255,0.25)",
//           }}
//         >
//           <ArrowIcon />
//         </div>
//       </div>

//       {/* Text content */}
//       <div className="p-2! flex! flex-col! flex-1! gap-4!">
//         <h2
//           className="font-black line-clamp-1 leading-tight mb-2 transition-colors duration-200"
//           style={{
//             fontSize: "clamp(18px, 2.2vw, 24px)",
//             color: hovered ? "#e0e0e0" : "#ffffff",
//             letterSpacing: "-0.01em",
//             textTransform: "none",
//           }}
//         >
//           {article.title}
//         </h2>

//         <p
//           className="leading-relaxed mb-4 flex-1"
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "13px",
//             color: "#888",
//             lineHeight: 1.6,
//           }}
//         >
//           {article.subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function ProjectSection() {
//   return (
//     <div className="min-h-screen mx-auto! p-2!">
//       <div className="grid grid-cols-3 gap-4">
//         {articles.map((article) => (
//           <div key={article.id}>
//             <ArticleCard article={article} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useEffect, useRef } from "react";
import { projectImages } from '../constants/image.index';
import "./after.before.css";
gsap.registerPlugin(Draggable);

function ProjectSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const afterWrapRef = useRef<HTMLDivElement | null>(null);
  const draggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const afterWrap = afterWrapRef.current;
    const dragger = draggerRef.current;

    if (!wrapper || !afterWrap || !dragger) return;

    const width = wrapper.offsetWidth;

    // initial position (middle)
    gsap.set(dragger, { x: width / 2 });

    const draggable = Draggable.create(dragger, {
      type: "x",
      bounds: {
        minX: 0,
        maxX: width,
      },
      onDrag: function () {
        const x = this.x;

        gsap.set(afterWrap, {
          clipPath: `inset(0px ${width - x}px 0px 0px)`,
        });
      },
    });

    return () => {
      draggable.forEach((d) => d.kill());
    };
  }, []);

  return (
    <div className="page-wrapper px-2!">
      <main className="main-wrapper">
        <div className="section--before-after">
          <div className="before-after-outer">
            <div className="before-after-wrap" ref={wrapperRef}>

              <div className="img-wrap is-before">
                <img
                  src={projectImages.project1WithWirframe}
                  className="img is-before-after"
                  alt="before"
                />
              </div>

              <div className="img-wrap is-after" ref={afterWrapRef}>
                <img
                  src={projectImages.project1}
                  className="img is-before-after"
                  alt="after"
                />
              </div>

              <div className="dragger" ref={draggerRef}>
                <div className="dragger-inner"></div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectSection;