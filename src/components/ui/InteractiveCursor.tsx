
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" || target.closest("button")) {
        setIsHovering(true);
        setCursorVariant("button");
      } else if (target.tagName === "A" || target.closest("a")) {
        setIsHovering(true);
        setCursorVariant("link");
      } else {
        setIsHovering(false);
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(139, 92, 246, 0.4)",
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      backgroundColor: "rgba(34, 197, 94, 0.3)",
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          backgroundColor: variants[cursorVariant as keyof typeof variants].backgroundColor,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-600 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      />
    </>
  );
};

export default InteractiveCursor;
