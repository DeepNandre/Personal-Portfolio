
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PostCyberpunkLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
  customVideo?: string; // URL to your custom video
}

const PostCyberpunkLoader = ({ 
  isLoading, 
  onComplete, 
  customVideo 
}: PostCyberpunkLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setShowName(true), 500);
          setTimeout(onComplete, 3000);
          return 100;
        }
        return prev + 0.4;
      });
    }, 60);

    return () => clearInterval(progressTimer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Custom Video Background or Fallback */}
          {customVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) contrast(1.2)' }}
            >
              <source src={customVideo} type="video/mp4" />
            </video>
          ) : (
            // Enhanced retro-tech aesthetic background
            <>
              {/* Deep void background */}
              <div className="absolute inset-0 bg-black">
                {/* Colorful gradient grid overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 20%, rgba(255, 0, 150, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 20% 70%, rgba(255, 100, 0, 0.2) 0%, transparent 50%),
                      linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(30, 144, 255, 0.1))
                    `
                  }}
                />
                
                {/* Curved grid lines */}
                <svg 
                  className="absolute inset-0 w-full h-full opacity-15" 
                  viewBox="0 0 1000 1000" 
                  preserveAspectRatio="none"
                >
                  {/* Curved horizontal lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <path
                      key={`h-${i}`}
                      d={`M 0 ${50 + i * 45} Q 500 ${30 + i * 45} 1000 ${50 + i * 45}`}
                      stroke="url(#gridGradient)"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  ))}
                  
                  {/* Curved vertical lines */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <path
                      key={`v-${i}`}
                      d={`M ${50 + i * 65} 0 Q ${30 + i * 65} 500 ${50 + i * 65} 1000`}
                      stroke="url(#gridGradient)"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff0096" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#00ffff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ff6400" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Vintage Electronics */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Old Computer Monitor */}
                <motion.div
                  className="absolute"
                  style={{ left: '15%', top: '20%' }}
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 15, 0],
                    rotateX: [0, 5, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm shadow-lg opacity-70">
                    <div className="w-full h-8 bg-black rounded-sm m-1 border border-gray-400">
                      <div className="w-full h-1 bg-green-400 mt-2 opacity-60"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Cracked CD */}
                <motion.div
                  className="absolute"
                  style={{ left: '70%', top: '30%' }}
                  animate={{
                    rotate: [0, 360],
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-300 via-blue-300 to-pink-300 opacity-80 relative">
                    <div className="absolute inset-2 bg-black rounded-full"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform rotate-45"></div>
                    {/* Crack effect */}
                    <div className="absolute top-2 left-3 w-6 h-0.5 bg-black opacity-60 transform rotate-12"></div>
                  </div>
                </motion.div>

                {/* Vintage Phone */}
                <motion.div
                  className="absolute"
                  style={{ left: '25%', top: '60%' }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-8 h-14 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg opacity-70">
                    <div className="w-6 h-4 bg-black rounded-sm mx-auto mt-1"></div>
                    <div className="grid grid-cols-3 gap-0.5 px-1 mt-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Walkman */}
                <motion.div
                  className="absolute"
                  style={{ left: '80%', top: '50%' }}
                  animate={{
                    x: [0, -10, 0],
                    y: [0, -8, 0],
                    rotateY: [0, 10, 0],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded opacity-70">
                    <div className="w-8 h-4 bg-gray-800 rounded-sm mx-auto mt-0.5"></div>
                    <div className="flex justify-center space-x-1 mt-0.5">
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Game Boy */}
                <motion.div
                  className="absolute"
                  style={{ left: '50%', top: '15%' }}
                  animate={{
                    y: [0, -12, 0],
                    rotateX: [0, 8, 0],
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-8 h-10 bg-gradient-to-b from-purple-200 to-purple-400 rounded opacity-70">
                    <div className="w-6 h-3 bg-green-300 rounded-sm mx-auto mt-1"></div>
                    <div className="grid grid-cols-2 gap-0.5 px-1 mt-1">
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Circuit Board */}
                <motion.div
                  className="absolute"
                  style={{ left: '40%', top: '70%' }}
                  animate={{
                    rotateZ: [0, 180, 360],
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="w-12 h-8 bg-gradient-to-br from-green-600 to-green-800 opacity-70 rounded-sm">
                    <div className="grid grid-cols-4 gap-0.5 p-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Cassette Tape */}
                <motion.div
                  className="absolute"
                  style={{ left: '60%', top: '75%' }}
                  animate={{
                    x: [0, 8, 0],
                    rotateY: [0, -10, 0],
                  }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-10 h-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm opacity-70">
                    <div className="flex justify-between px-1 py-1">
                      <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-6 h-1 bg-brown-600 mx-auto"></div>
                  </div>
                </motion.div>
              </div>

              {/* Central Chrome Humanoid Figure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  animate={{
                    rotateY: [0, 360],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Chrome humanoid body */}
                  <div 
                    className="w-20 h-32 opacity-80 rounded-full relative"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(192, 192, 192, 0.9) 0%, 
                        rgba(255, 255, 255, 0.7) 25%,
                        rgba(169, 169, 169, 0.8) 50%, 
                        rgba(211, 211, 211, 0.9) 75%,
                        rgba(128, 128, 128, 0.7) 100%)`,
                      boxShadow: `
                        inset 0 0 30px rgba(255, 255, 255, 0.3),
                        inset 0 0 60px rgba(0, 255, 255, 0.2),
                        0 0 80px rgba(0, 255, 255, 0.4),
                        0 0 120px rgba(138, 43, 226, 0.3)
                      `,
                      filter: 'blur(0.5px)',
                    }}
                  >
                    {/* Fractured chrome effect */}
                    <div className="absolute inset-0 rounded-full opacity-60">
                      <div className="absolute top-4 left-2 w-16 h-0.5 bg-white transform rotate-12 opacity-40"></div>
                      <div className="absolute top-8 right-2 w-12 h-0.5 bg-white transform -rotate-12 opacity-40"></div>
                      <div className="absolute bottom-8 left-4 w-10 h-0.5 bg-white transform rotate-45 opacity-40"></div>
                    </div>
                    
                    {/* Neural core glow */}
                    <motion.div
                      className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(0, 255, 255, 0.6)',
                          '0 0 40px rgba(138, 43, 226, 0.8)',
                          '0 0 20px rgba(0, 255, 255, 0.6)',
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), rgba(138, 43, 226, 0.2))'
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Electric Sparks and Pulses */}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute w-px h-6 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scaleY: [0, 1, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                />
              ))}

              {/* Ambient particle field */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-0.5 h-0.5 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: ['#ff0096', '#00ffff', '#ff6400', '#8a2be2'][Math.floor(Math.random() * 4)],
                    }}
                    animate={{
                      y: [0, Math.random() * 60 - 30],
                      x: [0, Math.random() * 40 - 20],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />

          {/* Name Reveal */}
          <AnimatePresence>
            {showName && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl font-light text-white tracking-[0.2em] relative z-10"
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    textShadow: '0 0 60px rgba(255, 255, 255, 0.4)',
                  }}
                  initial={{ opacity: 0, letterSpacing: '1em', scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    letterSpacing: '0.2em',
                    scale: 1,
                    textShadow: [
                      '0 0 60px rgba(255, 255, 255, 0.4)',
                      '0 0 80px rgba(0, 255, 255, 0.6)',
                      '0 0 60px rgba(255, 255, 255, 0.4)',
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    textShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  DEEP NANDRE
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Minimal Progress Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-64 h-px bg-white/20">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Enhanced corner elements */}
          <motion.div
            className="absolute top-8 left-8 text-white/40 text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            RETRO.SYS
          </motion.div>
          
          <motion.div
            className="absolute bottom-8 right-8 text-white/40 text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            LEGACY.TECH
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PostCyberpunkLoader;
