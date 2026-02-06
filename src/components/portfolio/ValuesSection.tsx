
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "What I Value",
      items: [
        "Ownership over oversight",
        "Scale with security baked-in",
        "Systems thinking over quick fixes"
      ]
    },
    {
      icon: Users,
      title: "How I Work",
      items: [
        "Async-first, commit-driven",
        "Small teams, high leverage",
        "Documentation as code"
      ]
    },
    {
      icon: Rocket,
      title: "What I Look For",
      items: [
        "Tech with real-world impact",
        "Smart systems over smart hacks",
        "Learning at the edge of complexity"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-refined">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-4">
            Principles
          </div>
          <h2 className="heading-lg mb-6">
            Engineering Philosophy
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-neutral-700">
            Core principles that drive my approach to building secure, scalable systems
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-2 border-neutral-900 rounded-none shadow-none h-full">
                <CardContent className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex justify-center">
                    <div className="p-3 bg-neutral-100 border-2 border-neutral-900">
                      <value.icon className="h-7 w-7 text-neutral-900" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 text-display uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <ul className="space-y-3 flex-1">
                    {value.items.map((item, idx) => (
                      <li key={idx} className="text-neutral-700 leading-relaxed flex items-start">
                        <div className="w-2 h-2 bg-neutral-900 mt-2 mr-3 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
