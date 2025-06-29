
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface MinimalLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const MinimalLoader = ({ isLoading, onComplete }: MinimalLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitchText, setGlitchText] = useState("DEEP NANDRE");

  const phases = [
    "INITIALIZING SECURE PROTOCOLS...",
    "DEPLOYING CLOUD INFRASTRUCTURE...",
    "COMPILING NEURAL NETWORKS...",
    "ENCRYPTING DATA STREAMS...",
    "SYSTEM READY FOR DEPLOYMENT"
  ];

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  useEffect(() => {
    if (!isLoading) return;

    // Glitch effect for the name
    const glitchInterval = setInterval(() => {
      const original = "DEEP NANDRE";
      let glitched = "";
      
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }
      
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText("DEEP NANDRE"), 50);
    }, 2000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 0.8;
      });
    }, 40);

    const phaseTimer = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 1800);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(progressTimer);
      clearInterval(phaseTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Scanning Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "linear-gradient(0deg, transparent 0%, rgba(0, 255, 255, 0.03) 50%, transparent 100%)",
                "linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.03) 50%, transparent 100%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Main Content */}
          <div className="text-center space-y-12 max-w-2xl relative z-10 px-8">
            {/* Glitched Name */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white font-mono tracking-wider"
                style={{
                  textShadow: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)"
                }}
              >
                {glitchText}
              </motion.h1>
              
              <motion.div 
                className="text-cyan-400 text-lg md:text-xl tracking-[0.3em] font-light"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CYBERSECURITY • AI • DEVOPS
              </motion.div>
            </motion.div>

            {/* Tech HUD Elements */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Progress Circle */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgba(0, 255, 255, 0.2)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgb(0, 255, 255)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    style={{
                      strokeDashoffset: 283 * (1 - progress / 100),
                      filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))"
                    }}
                  />
                </svg>
                
                {/* Progress Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    key={Math.floor(progress / 5)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-cyan-400 font-mono">
                      {Math.floor(progress)}%
                    </div>
                    <div className="text-xs text-cyan-600 font-mono">
                      LOADING
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Status Text */}
              <motion.div
                className="text-cyan-300 text-sm md:text-base font-mono tracking-wide"
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {phases[currentPhase]}
              </motion.div>
            </motion.div>

            {/* Data Stream Visualization */}
            <motion.div
              className="flex justify-center items-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-cyan-400 rounded-full"
                  style={{
                    height: `${Math.random() * 20 + 5}px`,
                  }}
                  animate={{
                    height: [
                      `${Math.random() * 20 + 5}px`,
                      `${Math.random() * 30 + 10}px`,
                      `${Math.random() * 20 + 5}px`
                    ],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Security Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-400/30 rounded-lg bg-cyan-400/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-cyan-400 text-sm font-mono tracking-wide">
                SECURE CONNECTION ESTABLISHED
              </span>
            </motion.div>
          </div>

          {/* Corner Tech Elements */}
          <div className="absolute top-4 left-4 text-cyan-400/60 font-mono text-xs">
            [SYSTEM.V2.1]
          </div>
          <div className="absolute top-4 right-4 text-cyan-400/60 font-mono text-xs">
            [ENCRYPTED]
          </div>
          <div className="absolute bottom-4 left-4 text-cyan-400/60 font-mono text-xs">
            [AI.READY]
          </div>
          <div className="absolute bottom-4 right-4 text-cyan-400/60 font-mono text-xs">
            [{Math.floor(progress)}%]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MinimalLoader;
