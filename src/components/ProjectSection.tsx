

function ProjectSection() {
  return (
    <div>ProjectSection</div>
  )
}
export default ProjectSection
// import gsap from "gsap";
// import { Draggable } from "gsap/all";
// import { useEffect, useRef } from "react";
// import { projectImages } from '../constants/image.index';
// import "./after.before.css";
// gsap.registerPlugin(Draggable);

// function ProjectSection() {
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const afterWrapRef = useRef<HTMLDivElement | null>(null);
//   const draggerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const afterWrap = afterWrapRef.current;
//     const dragger = draggerRef.current;

//     if (!wrapper || !afterWrap || !dragger) return;

//     const width = wrapper.offsetWidth;

//     // initial position (middle)
//     gsap.set(dragger, { x: width / 2 });

//     const draggable = Draggable.create(dragger, {
//       type: "x",
//       bounds: {
//         minX: 0,
//         maxX: width,
//       },
//       onDrag: function () {
//         const x = this.x;

//         gsap.set(afterWrap, {
//           clipPath: `inset(0px ${width - x}px 0px 0px)`,
//         });
//       },
//     });

//     return () => {
//       draggable.forEach((d) => d.kill());
//     };
//   }, []);

//   return (
//     <div className="page-wrapper px-2!">
//       <main className="main-wrapper">
//         <div className="section--before-after">
//           <div className="before-after-outer">
//             <div className="before-after-wrap" ref={wrapperRef}>

//               <div className="img-wrap is-before">
//                 <img
//                   src={projectImages.project1WithWirframe}
//                   className="img is-before-after"
//                   alt="before"
//                 />
//               </div>

//               <div className="img-wrap is-after" ref={afterWrapRef}>
//                 <img
//                   src={projectImages.project1}
//                   className="img is-before-after"
//                   alt="after"
//                 />
//               </div>

//               <div className="dragger" ref={draggerRef}>
//                 <div className="dragger-inner"></div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ProjectSection;