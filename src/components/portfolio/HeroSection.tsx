
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-white border-b-2 border-neutral-900">
      <div className="max-w-[1800px] mx-auto px-6 py-10 lg:py-14">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          <motion.h1
            className="text-display text-[72px] sm:text-[92px] lg:text-[190px] leading-[0.9] uppercase tracking-[-0.05em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            Deep
            <br />
            Nandre
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="h-40 w-40 lg:h-64 lg:w-64 rounded-full border-2 border-neutral-900 bg-neutral-100 flex items-center justify-center"
          >
            <span className="text-4xl lg:text-6xl font-black tracking-tight">DN</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-6 lg:mt-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="text-3xl lg:text-5xl font-bold tracking-tight"
          >
            <a href="mailto:23685656@stu.mmu.ac.uk" className="underline underline-offset-8">
              hello@deepnandre.com
            </a>
          </motion.div>

          <motion.p
            className="text-3xl sm:text-4xl lg:text-[64px] leading-[1.05] tracking-tight font-medium"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            Hello, I build secure software systems with speed and clarity. Manchester-based, shipping globally.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
