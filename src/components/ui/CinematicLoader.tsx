
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CinematicLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
  customMedia?: string; // URL to video/gif
  mediaType?: 'video' | 'image';
  title?: string;
  subtitle?: string;
}

const CinematicLoader = ({ 
  isLoading, 
  onComplete, 
  customMedia,
  mediaType = 'image',
  title = "DEEP NANDRE",
  subtitle = "CYBERSECURITY • AI • DEVOPS"
}: CinematicLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  const loadingTexts = [
    "INITIALIZING SYSTEMS...",
    "LOADING NEURAL NETWORKS...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "DEPLOYING INFRASTRUCTURE...",
    "FINALIZING EXPERIENCE..."
  ];

  useEffect(() => {
    if (!isLoading) return;

    // Show title after brief delay
    const titleTimer = setTimeout(() => setShowTitle(true), 800);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 0.6;
      });
    }, 50);

    // Text cycling
    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => {
      clearTimeout(titleTimer);
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background Media */}
          <div className="absolute inset-0">
            {customMedia ? (
              mediaType === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-30"
                >
                  <source src={customMedia} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={customMedia}
                  alt=""
                  className="w-full h-full object-cover opacity-30"
                />
              )
            ) : (
              // Fallback animated background
              <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 opacity-20">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Overlay gradients for cinematic effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>

          {/* Cinematic bars */}
          <motion.div
            className="absolute top-0 left-0 w-full h-16 bg-black z-10"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-16 bg-black z-10"
            initial={{ y: 64 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Main content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full px-8 text-center">
            {/* Title */}
            <AnimatePresence>
              {showTitle && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-wider"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)',
                    }}
                    animate={{
                      textShadow: [
                        '0 0 30px rgba(255, 255, 255, 0.3)',
                        '0 0 50px rgba(255, 255, 255, 0.5)',
                        '0 0 30px rgba(255, 255, 255, 0.3)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {title}
                  </motion.h1>
                  
                  <motion.p
                    className="text-xl md:text-2xl text-gray-300 tracking-[0.5em] font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    {subtitle}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress section */}
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {/* Circular progress */}
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    style={{
                      strokeDashoffset: 283 * (1 - progress / 100),
                      filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))"
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-3xl font-light text-white"
                    key={Math.floor(progress / 5)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.floor(progress)}%
                  </motion.span>
                </div>
              </div>

              {/* Loading text */}
              <motion.div
                className="h-8 flex items-center"
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-300 tracking-wide font-light">
                  {loadingTexts[currentText]}
                </p>
              </motion.div>

              {/* Progress bar */}
              <div className="w-80 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Corner elements for cinematic feel */}
          <motion.div
            className="absolute top-20 left-8 text-white/40 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            SYSTEM.V2.0
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-8 text-white/40 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            SECURE
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 left-8 text-white/40 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            {Math.floor(progress)}% LOADED
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-8 text-white/40 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          >
            AI.READY
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicLoader;
