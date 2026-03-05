import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import CrownIcon from "../../constants/crown.icon";

function ClickToAction() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const flairRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const button = cardRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } =
        button.getBoundingClientRect();

      const x = gsap.utils.clamp(
        0,
        100,
        gsap.utils.mapRange(0, width, 0, 100, e.clientX - left)
      );

      const y = gsap.utils.clamp(
        0,
        100,
        gsap.utils.mapRange(0, height, 0, 100, e.clientY - top)
      );

      return { x, y };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={cardRef} className="bcard card-cta fade-up relative!">
      <CrownIcon />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
          fontWeight: 800, color: "#A291FD", lineHeight: 1.2,
        }}>Let's Work Together</div>
        <div style={{
          fontSize: "clamp(0.7rem, 1.3vw, 0.78rem)",
          color: "rgba(162,145,253,0.6)", marginTop: 3, fontWeight: 500,
        }}>Let's Make Magic Happen!</div>

      </div>
      <span
        ref={flairRef}
        className="absolute inset-0 scale-0 origin-top-left pointer-events-none"
      >
        <span className="absolute left-0 top-0 w-[170%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(162,145,253,0.5)] flex items-center justify-center">
          <button
            className="pointer-events-auto! px-4! py-2! text-xs! font-semibold! text-white! bg-black/20! backdrop-blur! rounded-full! hover:bg-black/30! transition! cursor-pointer!"
          >
            Contact Me
          </button>
        </span>
      </span>
    </div>
  )
}

export default ClickToAction