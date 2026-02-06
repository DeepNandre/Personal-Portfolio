
import { motion } from "framer-motion";
import InteractiveTimeline from "@/components/ui/InteractiveTimeline";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Graduate Software Engineer",
      company: "Enspec Power Ltd",
      period: "Sept 2025 – Present",
      location: "Manchester, UK",
      highlights: [
        "Joined Enspec Power Ltd full-time after completing a placement year as an IT Systems Engineer",
        "Same employer where I completed my placement year"
      ],
      color: "border-neutral-900",
      bgColor: "bg-white"
    },
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
      color: "border-neutral-900",
      bgColor: "bg-white"
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
      color: "border-neutral-900",
      bgColor: "bg-white"
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
      color: "border-neutral-900",
      bgColor: "bg-white"
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
      color: "border-neutral-900",
      bgColor: "bg-white"
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
      color: "border-neutral-900",
      bgColor: "bg-white"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-4">
            Timeline
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-neutral-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Building secure, scalable systems across diverse industries and technologies
          </p>
        </motion.div>
        
        <InteractiveTimeline items={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
