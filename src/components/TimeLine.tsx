import { useEffect, useRef } from "react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Draggable, Flip } from "gsap/all";
import { projectImages } from "../constants/image.index";

gsap.registerPlugin(Draggable, Flip, InertiaPlugin);

const images = [
  projectImages.project,
  projectImages.project,
  projectImages.project,
];

const CARD_COUNT = 28;
const SNAP_ANGLE = 360 / CARD_COUNT;

export default function WheelCarousel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const currentCardRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable[]>([]);

  useEffect(() => {
    const wheel = wheelRef.current;
    const header = headerRef.current;
    if (!wheel || !header) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(".wheel__card");

    // ── Position cards in a circle ──────────────────────────────────────────
    const setup = () => {
      const radius = wheel.offsetWidth / 2;
      const center = radius;
      const slice = (2 * Math.PI) / cards.length;

      gsap.set(cards, {
        x: (i) => center + radius * Math.sin(i * slice),
        y: (i) => center - radius * Math.cos(i * slice),
        rotation: (i) => (i * 360) / cards.length,
        xPercent: -50,
        yPercent: -50,
      });
    };

    setup();
    window.addEventListener("resize", setup);

    // ── Close the currently expanded card ────────────────────────────────────
    const closeCurrentCard = () => {
      const card = currentCardRef.current;
      if (!card) return;

      const img = header.querySelector<HTMLImageElement>("img");
      if (!img) return;

      const state = Flip.getState(img);
      card.appendChild(img);

      Flip.from(state, {
        duration: 0.55,
        ease: "power2.inOut",
        scale: true,
      });

      currentCardRef.current = null;
    };



    header.addEventListener("click", closeCurrentCard);

    // ── Draggable wheel ───────────────────────────────────────────────────
    draggableRef.current = Draggable.create(wheel, {
      type: "rotation",
      inertia: true,
      snap: {
        rotation: gsap.utils.snap(SNAP_ANGLE),
      },
    });

    return () => {
      draggableRef.current.forEach((d) => d.kill());
      window.removeEventListener("resize", setup);
      cards.forEach((card) => {
        card.replaceWith(card.cloneNode(true)); // remove listeners
      });
    };
  }, []);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden select-none font-sans">

      {/* ── Ambient glow behind header ───────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(120,80,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Header: expanded image preview ───────────────────────────────── */}
      <div
        ref={headerRef}
        className="
          absolute top-0 left-0 w-full z-40 cursor-pointer
          flex items-center justify-center
        "
        style={{ height: "0vh" }}
      >
        {/* Subtle label */}
        <p
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            text-white/20 text-xs tracking-[0.3em] uppercase
            pointer-events-none select-none
          "
          id="hint-label"
        >
          Click a photo · Drag to spin
        </p>
      </div>

      {/* ── Bottom fade overlay ───────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full z-30"
        style={{
          height: "26vh",
          background:
            "linear-gradient(to top, #0C0C0E 0%, transparent 100%)",
        }}
      />

      {/* ── Wheel section ────────────────────────────────────────────────── */}
      <section
        className="absolute bottom-0 left-0 w-full z-20 overflow-visible"
        style={{ height: "22vh" }}
      >
        {/* The giant circle */}
        <div
          ref={wheelRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 touch-none"
          style={{
            width: "min(400vw, 4000px)",
            height: "min(400vw, 4000px)",
          }}
        >
          {Array.from({ length: CARD_COUNT }).map((_, i) => (
            <div
              key={i}
              className="wheel__card absolute cursor-pointer group aspect-video"
              style={{ width: "30%", maxWidth: 380 }}
            >
              {/* Card frame */}
              <div
                className="
                  w-full h-full rounded-xl aspect-video object-contain! overflow-hidden!
                  ring-1 ring-white/10
                  shadow-[0_4px_24px_rgba(0,0,0,0.5)]
                  transition-shadow duration-300
                  group-hover:ring-white/40!
                  group-hover:shadow-[0_4px_40px_rgba(120,80,255,0.35)]!
                "
              >
                <img
                  src={images[i % images.length]}
                  alt={`photo-${i}`}
                  draggable={false}
                  className="
                    w-full h-full object-cover rounded-xl!
                    pointer-events-none absolute inset-0
                    will-change-transform
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}