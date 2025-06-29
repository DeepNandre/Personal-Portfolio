
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ImpactMetrics = () => {
  const impactMetrics = [
    { 
      icon: TrendingUp, 
      value: "20%", 
      label: "Budget reduction via automated Power BI dashboards",
      description: "Streamlined financial reporting processes"
    },
    { 
      icon: Shield, 
      value: "90%+", 
      label: "VPN detection accuracy using unsupervised clustering",
      description: "Advanced network security monitoring"
    },
    { 
      icon: Zap, 
      value: "35%", 
      label: "Reduction in SIEM false positives",
      description: "Enhanced threat detection precision"
    },
    { 
      icon: TrendingUp, 
      value: "99.9%", 
      label: "Cloud lab uptime maintained for 120+ students",
      description: "Reliable infrastructure management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-spacing bg-neutral-50/50">
      <div className="container-refined">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg mb-6">
            Proven Impact
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Measurable results from production systems and real-world deployments
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-refined group text-center p-8 hoverable h-full">
                <CardContent className="space-y-6 p-0">
                  <div className="flex justify-center">
                    <div className="p-4 bg-neutral-100 rounded-2xl group-hover:bg-neutral-200 transition-colors duration-300">
                      <metric.icon className="h-8 w-8 text-neutral-700" />
                    </div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-neutral-900 group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="space-y-2">
                    <p className="text-neutral-700 font-medium leading-relaxed">
                      {metric.label}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
