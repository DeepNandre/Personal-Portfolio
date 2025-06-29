
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MorphingShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const shape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const shape2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle gradient orb */}
      <motion.div
        className="absolute top-1/4 right-1/6 w-96 h-96 rounded-full opacity-[0.015]"
        style={{
          y: shape1Y,
          rotate: shape1Rotate,
          background: "radial-gradient(circle, #000000 0%, transparent 70%)"
        }}
      />

      {/* Minimal geometric shape */}
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-64 h-64 opacity-[0.02]"
        style={{
          y: shape2Y,
          scale: shape2Scale,
          background: "linear-gradient(45deg, #000000, transparent)",
          borderRadius: "30%"
        }}
      />

      {/* Very subtle dots pattern */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default MorphingShapes;
