
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
          <h2 className="heading-lg mb-6">
            Engineering Philosophy
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Core principles that drive my approach to building secure, scalable systems
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-refined group text-center hoverable h-full">
                <CardContent className="p-10 space-y-8 h-full flex flex-col">
                  <div className="flex justify-center">
                    <div className="p-4 bg-neutral-100 rounded-2xl group-hover:bg-neutral-200 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-neutral-700" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 text-display">
                    {value.title}
                  </h3>
                  <ul className="space-y-4 flex-1">
                    {value.items.map((item, idx) => (
                      <li key={idx} className="text-neutral-600 leading-relaxed flex items-start">
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        {item}
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
