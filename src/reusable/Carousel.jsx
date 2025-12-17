import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { Sparkles, Scan, Brain, Rocket, Activity } from "lucide-react";
import "./Carousel.css";

const DEFAULT_ITEMS = [
  {
    title: "MONA Radiology",
    description:
      "Powerful AI engine enhancing diagnostic imaging workflows across X-rays, CT scans, MRI, and ultrasound data.",
    id: 1,
    // main gradient used for icon if we don't override
    gradientFrom: "#06b6d4",
    gradientTo: "#2563eb",
    // NEW: colors that mimic your old hover card
    cardBgFrom: "#eff6ff", // blue-50
    cardBgTo: "#ecfeff", // cyan-50
    borderColor: "#60a5fa", // blue-400
    iconBgFrom: "#3b82f6", // blue-500
    iconBgTo: "#22d3ee", // cyan-400/500
    accentTextColor: "#2563eb",
    icon: <Scan className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "MONA-X",
    description:
      "A clinical intelligence system integrating multimodal data for real-time decision support across departments.",
    id: 2,
    gradientFrom: "#3b82f6",
    gradientTo: "#7c3aed",
    cardBgFrom: "#ecfdf5", // green-50
    cardBgTo: "#ecfdf3", // emerald-50
    borderColor: "#34d399", // emerald-400
    iconBgFrom: "#22c55e", // green-500
    iconBgTo: "#10b981", // emerald-500
    accentTextColor: "#16a34a",
    icon: <Brain className="h-[16px] w-[16px] text-white" />,
  },
  {
    title: "MONA-COSMO",
    description:
      "Autonomous clinical intelligence built for space missions and communication-denied environments.",
    id: 3,
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
    cardBgFrom: "#faf5ff", // purple-50
    cardBgTo: "#fdf4ff", // fuchsia-50
    borderColor: "#a855f7", // purple-500-ish
    iconBgFrom: "#a855f7", // purple-500
    iconBgTo: "#d946ef", // fuchsia-500
    accentTextColor: "#7c3aed",
    icon: <Rocket className="h-[16px] w-[16px] text-white" />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-3 carousel-container ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          // motion's hook is fine here
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          const cardBgFrom = item.cardBgFrom || "#222222";
          const cardBgTo = item.cardBgTo || "#111111";
          const borderColor = item.borderColor || "#222222";
          const iconFrom = item.iconBgFrom || item.gradientFrom || "#060010";
          const iconTo = item.iconBgTo || item.gradientTo || "#060010";
          const accentTextColor = item.accentTextColor || "#111827";

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? "items-center justify-center text-center bg-[#060010] border-0"
                  : "items-start justify-between border rounded-[24px]"
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY,
                ...(round
                  ? { borderRadius: "50%" }
                  : {
                      background: `linear-gradient(135deg, ${cardBgFrom}, ${cardBgTo})`,
                      borderColor,
                    }),
              }}
              transition={effectiveTransition}
            >
              <div className={`${round ? "p-0 m-2" : "mb-2 p-3"}`}>
                <span
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-2xl shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${iconFrom}, ${iconTo})`,
                  }}
                >
                  {item.icon}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-1 font-black text-lg text-gray-900">
                  {item.title}
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
                
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* dots */}
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[550px] justify-between px-6">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
