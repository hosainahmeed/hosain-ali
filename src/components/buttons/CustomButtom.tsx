import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CustomButtonProps {
  btnText: string;
  onClick?: () => void;
}

export default function CustomButton({
  btnText,
  onClick,
}: CustomButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const flairRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
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
    <button
      ref={buttonRef}
      onClick={onClick}
      className="relative! bg-[#a291fd] overflow-hidden! rounded-full! px-6! py-2! font-semibold! text-white! transition-colors! duration-150! hover:text-black! cursor-pointer"
    >
      <span
        ref={flairRef}
        className="absolute inset-0 scale-0 origin-top-left"
      >
        <span className="absolute left-0 top-0 w-[170%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </span>

      <span className="relative z-10">{btnText}</span>
    </button>
  );
}