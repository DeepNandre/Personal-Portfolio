
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface EnhancedMagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  radius?: number;
}

const EnhancedMagneticButton = ({ 
  children, 
  className = "", 
  onClick, 
  strength = 0.3,
  radius = 80 
}: EnhancedMagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < radius) {
      const factor = (radius - distance) / radius;
      x.set(distanceX * strength * factor);
      y.set(distanceY * strength * factor);
      setIsHovered(true);
    } else {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden transition-all duration-200 ${className}`}
      style={{ x: springX, y: springY }}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      animate={{
        boxShadow: isHovered 
          ? "0 8px 25px rgba(0, 0, 0, 0.08)"
          : "0 2px 10px rgba(0, 0, 0, 0.04)"
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default EnhancedMagneticButton;
