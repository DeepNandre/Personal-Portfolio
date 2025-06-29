
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";
import EnhancedMagneticButton from "@/components/ui/EnhancedMagneticButton";

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <FloatingParticles />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--neutral-400) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container-refined relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="heading-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Deep Vijay Nandre
            </motion.h1>
            
            <motion.div 
              className="space-y-6 mb-12"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <div className="text-2xl lg:text-3xl text-neutral-700 font-light tracking-wide">
                <span className="text-neutral-900 font-medium">Secure systems.</span>{" "}
                <span className="text-neutral-900 font-medium">Scalable code.</span>{" "}
                <span className="text-neutral-900 font-medium">Cloud-native speed.</span>
              </div>
              
              <div className="body-lg max-w-3xl mx-auto">
                MSc Cyber Security • AI-Driven Infrastructure • DevSecOps • Real-Time ML Pipelines
              </div>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="body-lg max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            Building mission-critical systems where security, scalability, and speed converge. 
            <strong className="text-neutral-900"> National award winner</strong> with proven track record in cloud infrastructure, ML security pipelines, and enterprise DevSecOps.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <EnhancedMagneticButton
              className="btn-primary"
              onClick={() => window.open('https://www.linkedin.com/in/deep-nandre5/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </EnhancedMagneticButton>
            
            <EnhancedMagneticButton
              className="btn-primary"
              onClick={() => window.open('https://github.com/DeepNandre', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </EnhancedMagneticButton>
            
            <EnhancedMagneticButton
              className="btn-primary"
              onClick={() => window.open('https://deepnandre.hashnode.dev/', '_blank')}
            >
              Blog
            </EnhancedMagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
