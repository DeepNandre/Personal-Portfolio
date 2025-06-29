
import { motion } from "framer-motion";
import InteractiveTimeline from "@/components/ui/InteractiveTimeline";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "IT Systems Engineer",
      company: "Enspec Power Ltd",
      period: "Sept 2024 – Sept 2025",
      location: "Manchester, UK",
      highlights: [
        "Engineered BS EN 62305-2 compliant lightning risk engine using TypeScript + React, reducing risk assessments by 40 hours/week",
        "Built Power BI dashboards achieving 20% cost reduction in marketing budgets",
        "Developed CI pipelines with GitHub Actions and automated QA processes"
      ],
      color: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      role: "Cloud TA & Lab Engineer", 
      company: "D Y Patil International University",
      period: "Jan 2023 – May 2023",
      location: "Pune, India",
      highlights: [
        "Managed AWS/GCP infrastructure improving uptime by 30% for 120+ students",
        "Taught cloud best practices and Docker orchestration to 20+ students",
        "Troubleshot EKS, S3, and Load Balancer configurations"
      ],
      color: "border-green-200",
      bgColor: "bg-green-50"
    },
    {
      role: "Summer Intern",
      company: "Data on Kubernetes",
      period: "Jan 2022 - Sept 2022", 
      location: "San Francisco, USA",
      highlights: [
        "Led community workshops that increased active membership by 15% through Docker and Kubernetes education",
        "Demystified stateful app containerization with Docker, sparking deeper community engagement",
        "Mentored new contributors and led community events, resulting in enhanced tool adoption"
      ],
      color: "border-yellow-200",
      bgColor: "bg-yellow-50"
    },
    {
      role: "Data Analyst Intern",
      company: "Vmedulife Software Services",
      period: "June 2021 – Sept 2021",
      location: "Remote",
      highlights: [
        "Utilized Python libraries and web scraping APIs to efficiently extract data from complex web structures, reducing analysis time by 50%",
        "Integrated and visualized scraped data using Tableau to create interactive dashboards, enhancing decision-making processes with dynamic, data-driven insights"
      ],
      color: "border-red-200",
      bgColor: "bg-red-50"
    },
    {
      role: "Cybersecurity Intern",
      company: "Indian Cyber Cell",
      period: "Apr 2021 – Jun 2021", 
      location: "Remote",
      highlights: [
        "Conducted IoT and dark web security research, contributing to 3 threat intelligence reports",
        "Applied MITRE ATT&CK for threat modeling and digital forensics",
        "Supported PCI DSS compliance audits for government agencies"
      ],
      color: "border-indigo-200",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-800">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Building secure, scalable systems across diverse industries and technologies
          </p>
        </motion.div>
        
        <InteractiveTimeline items={experiences} />
      </div>
      
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
    </section>
  );
};

export default ExperienceSection;
