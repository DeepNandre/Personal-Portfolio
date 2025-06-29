
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield, Cloud, Code, Zap } from "lucide-react";

interface SophisticatedLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const SophisticatedLoader = ({ isLoading, onComplete }: SophisticatedLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const icons = [Shield, Cloud, Code, Zap];
  const labels = ["Security", "Cloud", "Development", "Performance"];

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const iconTimer = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(iconTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="text-center space-y-8">
            {/* Animated icon */}
            <motion.div
              className="flex justify-center"
              key={currentIcon}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  className={`absolute p-6 rounded-full ${
                    index === currentIcon ? 'bg-blue-600' : 'bg-transparent'
                  }`}
                  animate={{
                    scale: index === currentIcon ? 1 : 0,
                    rotate: index === currentIcon ? 0 : 180,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>
              ))}
            </motion.div>

            {/* Progress text */}
            <motion.div
              className="text-white space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Loading Portfolio
              </h2>
              <p className="text-lg text-gray-300">
                {labels[currentIcon]}
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress percentage */}
            <motion.div
              className="text-white text-xl font-semibold"
              key={progress}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SophisticatedLoader;
