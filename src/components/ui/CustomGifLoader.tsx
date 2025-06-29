
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CustomGifLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
  customGif?: string;
}

const CustomGifLoader = ({ 
  isLoading, 
  onComplete, 
  customGif 
}: CustomGifLoaderProps) => {
  const [showName, setShowName] = useState(false);
  const [gifError, setGifError] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Show name after 2 seconds
    const nameTimer = setTimeout(() => setShowName(true), 2000);
    
    // Complete loading after 3 seconds
    const completeTimer = setTimeout(onComplete, 3000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(completeTimer);
    };
  }, [isLoading, onComplete]);

  const handleGifError = () => {
    console.log("GIF failed to load:", customGif);
    setGifError(true);
  };

  const handleGifLoad = () => {
    console.log("GIF loaded successfully:", customGif);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Your Custom GIF Background */}
          {customGif && !gifError ? (
            <img
              src={customGif}
              alt="Loading animation"
              className="w-full h-full object-cover"
              onError={handleGifError}
              onLoad={handleGifLoad}
            />
          ) : (
            // Fallback animated background
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
              {/* Animated particles */}
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>
              
              {/* Fallback message */}
              <div className="text-white text-center z-10">
                <div className="text-xl mb-4">Loading...</div>
                {gifError && (
                  <div className="text-sm opacity-70">
                    GIF not found: {customGif}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Name reveal */}
          <AnimatePresence>
            {showName && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-light text-white tracking-[0.2em]"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.5)',
                  }}
                  initial={{ 
                    opacity: 0, 
                    letterSpacing: '1em', 
                    scale: 0.8,
                    filter: 'blur(10px)'
                  }}
                  animate={{ 
                    opacity: 1, 
                    letterSpacing: '0.2em',
                    scale: 1,
                    filter: 'blur(0px)',
                    textShadow: [
                      '0 0 40px rgba(255, 255, 255, 0.5)',
                      '0 0 60px rgba(255, 255, 255, 0.8)',
                      '0 0 40px rgba(255, 255, 255, 0.5)',
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    textShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  DEEP NANDRE
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomGifLoader;
