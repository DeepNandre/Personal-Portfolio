
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const CurrentProjectsSection = () => {
  const currentProjects = [
    {
      icon: Database,
      title: "Real-time Threat Detection Pipeline",
      description: "Kafka + Spark + Graph ML for anomaly detection at scale",
      tech: ["Apache Kafka", "Spark", "Graph ML", "Redis"],
      status: "In Development"
    },
    {
      icon: Code,
      title: "Kubernetes-Native GitOps Pipeline",
      description: "Secure ML deployment with automated security scanning",
      tech: ["K8s", "ArgoCD", "Helm", "Falco"],
      status: "Architecture Phase"
    },
    {
      icon: Clock,
      title: "VPN Detection Research Paper",
      description: "DNS + traffic signature analysis for advanced VPN detection",
      tech: ["Python", "Research", "DNS Analysis"],
      status: "Writing Phase"
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
            Currently Building
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Continuous innovation at the intersection of security, scale, and speed
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-refined group hoverable h-full">
                <CardContent className="p-8 space-y-6 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-neutral-100 rounded-xl group-hover:bg-neutral-200 transition-colors duration-300">
                      <project.icon className="h-6 w-6 text-neutral-700" />
                    </div>
                    <Badge variant="outline" className="text-xs font-medium border-neutral-300 text-neutral-600">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 text-display">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-neutral-200 text-neutral-500 hover:border-neutral-300 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
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

export default CurrentProjectsSection;
