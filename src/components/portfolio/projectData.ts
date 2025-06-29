
import { Code, Search, Home, Shield, Database, BarChart3, Award, Zap, Users, Lock } from "lucide-react";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  tech: string[];
  live?: string;
  github?: string;
  highlight: string;
  impact: string;
  architecture: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface ProjectCategory {
  label: string;
  icon: any;
  color: string;
  bgColor: string;
  projects: Project[];
}

export const projectCategories: Record<string, ProjectCategory> = {
  "software-engineer": {
    label: "Software Engineer",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    projects: [
      {
        title: "AdPulse Marketing Intelligence Platform",
        subtitle: "Full-Stack React + TypeScript Application with Python Backend",
        description: "Production-grade marketing analytics platform built with modern web technologies, featuring responsive design, real-time data processing, and scalable architecture.",
        detailedDescription: "Architected a comprehensive full-stack application using React + TypeScript frontend with Python backend. Implemented responsive design with shadcn/ui components, real-time data visualization with Recharts, and optimized PostgreSQL queries achieving <1s response times. Features CI/CD pipeline, comprehensive testing, and production deployment on Netlify.",
        tech: ["React", "TypeScript", "Python", "PostgreSQL", "Vite", "Tailwind CSS", "CI/CD"],
        live: "https://adplusanalytics.netlify.app/",
        highlight: "Production System",
        impact: "Full-stack architecture serving 565K+ records with <1s query performance",
        architecture: "React SPA + RESTful API + PostgreSQL + Cloud Deployment",
        icon: BarChart3,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      },
      {
        title: "Lightning Risk Engine",
        subtitle: "TypeScript Compliance System with Advanced Calculations",
        description: "Mission-critical TypeScript application implementing BS EN 62305-2 electrical safety compliance with complex mathematical computations and audit trails.",
        detailedDescription: "Built enterprise-grade compliance system using TypeScript with strict typing and functional programming patterns. Implemented complex mathematical algorithms for electrical safety assessments, PDF generation, and comprehensive audit trails. Optimized for 100+ building zones with <2s runtime performance.",
        tech: ["TypeScript", "React", "PDF Generation", "Mathematical Computing", "Compliance"],
        highlight: "Enterprise System",
        impact: "Processing 100+ daily assessments with zero calculation errors",
        architecture: "Functional Programming + Real-time Calculations + Audit Trail System",
        icon: Code,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      },
      {
        title: "Social Sleuth",
        subtitle: "React Application with API Integration & Data Visualization",
        description: "Modern React application featuring API integrations, responsive design, and interactive data visualization for social media analytics.",
        detailedDescription: "Developed full-stack social media analytics platform with React frontend consuming multiple APIs (Twitter v2, Meta Graph, YouTube Data). Implemented responsive design with Chart.js visualizations, normalized data processing, and real-time analytics dashboard with modern UX patterns.",
        tech: ["React", "API Integration", "Chart.js", "Responsive Design", "REST APIs"],
        live: "https://socialsleuth.netlify.app/",
        highlight: "API Integration",
        impact: "Streamlined social media monitoring with real-time data processing",
        architecture: "React SPA + Multiple API Integrations + Real-time Dashboard",
        icon: Search,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
      },
      {
        title: "Insight Homes England",
        subtitle: "React Analytics Platform with Interactive Dashboards",
        description: "Comprehensive React application providing real estate market insights with interactive visualizations and responsive design.",
        detailedDescription: "Built sophisticated real estate analytics platform using React with interactive dashboards, market trend analysis, and property intelligence. Features responsive design, data visualization components, and optimized user experience for property investment decision-making.",
        tech: ["React", "Data Visualization", "Interactive Dashboards", "Responsive Design"],
        live: "https://insighthomesengland.netlify.app/",
        highlight: "Analytics Platform",
        impact: "Enhanced property investment decisions through interactive data visualization",
        architecture: "React Application + Analytics Engine + Interactive UI Components",
        icon: Home,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
      }
    ]
  },
  "security-engineer": {
    label: "Security Engineer",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    projects: [
      {
        title: "IP VPN Tracker",
        subtitle: "AI-Powered Cybersecurity Detection System | National Award Winner",
        description: "Government-deployed cybersecurity solution using machine learning for VPN detection, solving critical security challenges for law enforcement agencies.",
        detailedDescription: "Architected enterprise-grade VPN detection system deployed for CRC Srinagar under Ministry of Social Justice. Implemented unsupervised K-means clustering on enriched IP metadata achieving 90%+ accuracy. Features Docker containerization, Flask API, and real-time threat detection capabilities for government cybersecurity operations.",
        tech: ["Python", "Machine Learning", "K-Means Clustering", "Flask", "Docker", "Cybersecurity"],
        github: "https://github.com/DeepNandre/SafeStreet-IP-Analyzer",
        live: "https://safestreetip.herokuapp.com",
        highlight: "National Award Winner",
        impact: "Deployed for government agencies, solving critical cybersecurity challenges",
        architecture: "ML Pipeline + Real-time Detection + Government Deployment",
        icon: Award,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
      },
      {
        title: "Azure Sentinel SIEM",
        subtitle: "Enterprise Security Operations Center with ML Detection",
        description: "Production SIEM system implementing advanced threat detection, automated response, and machine learning-based anomaly detection for enterprise security.",
        detailedDescription: "Built enterprise-grade Security Operations Center using Azure Sentinel with custom KQL queries, ML-based anomaly detection achieving 35% false positive reduction, and automated incident response playbooks. Implemented hybrid cloud log analysis, RDP attack detection, and reduced security analyst workload by 40 hours/week.",
        tech: ["Azure Sentinel", "KQL", "Machine Learning", "PowerShell", "Security Analytics", "SIEM"],
        github: "https://github.com/DeepNandre",
        highlight: "Production SIEM",
        impact: "35% false positive reduction, 40 hours/week analyst workload savings",
        architecture: "Cloud SIEM + ML Detection + Automated Response Playbooks",
        icon: Zap,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
      },
      {
        title: "Lightning Risk Engine",
        subtitle: "BS EN 62305-2 Security Compliance System",
        description: "Mission-critical compliance system ensuring electrical safety standards with comprehensive audit trails and security protocols.",
        detailedDescription: "Developed security-focused compliance system implementing BS EN 62305-2 standards with comprehensive audit trails, access controls, and data integrity measures. Features secure calculation engine, encrypted data storage, and compliance reporting for electrical safety assessments.",
        tech: ["TypeScript", "Security Compliance", "Audit Trails", "Data Integrity", "Access Control"],
        highlight: "Compliance System",
        impact: "100+ daily security assessments with comprehensive audit trails",
        architecture: "Secure Compliance Engine + Audit System + Access Controls",
        icon: Lock,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200"
      }
    ]
  },
  "data-engineer": {
    label: "Data Engineer",
    icon: Database,
    color: "text-green-600",
    bgColor: "bg-green-50",
    projects: [
      {
        title: "AdPulse Marketing Intelligence Platform",
        subtitle: "Advanced ETL Pipeline with Star Schema Data Warehouse",
        description: "Comprehensive data engineering platform featuring Python ETL pipelines, PostgreSQL star schema, and real-time analytics processing 565K+ records.",
        detailedDescription: "Engineered sophisticated data pipeline processing 565K+ marketing records across 28 EMEA markets. Built Python ETL using Pandas, Faker, and SQLAlchemy with PostgreSQL star schema optimization. Implemented pre-aggregated views, advanced indexing achieving <1s query times, and real-time analytics dashboard with €368K revenue attribution.",
        tech: ["Python", "PostgreSQL", "ETL Pipeline", "Star Schema", "Data Warehousing", "Pandas", "SQLAlchemy"],
        live: "https://adplusanalytics.netlify.app/",
        highlight: "Data Platform",
        impact: "565K+ records, <1s query performance, €368K revenue attribution",
        architecture: "Python ETL + PostgreSQL Star Schema + Real-time Analytics",
        icon: BarChart3,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
      },
      {
        title: "Social Sleuth",
        subtitle: "Multi-API Data Integration & Analytics Pipeline",
        description: "Advanced data integration platform consuming multiple social media APIs with normalized data warehousing and real-time analytics.",
        detailedDescription: "Built comprehensive data integration pipeline consuming Twitter v2, Meta Graph, and YouTube Data APIs. Implemented normalized star schema data warehousing, data quality validation, and real-time analytics processing. Features comparative analysis, sentiment scoring, and anomaly detection for viral content identification.",
        tech: ["API Integration", "Data Warehousing", "Star Schema", "Real-time Processing", "Analytics"],
        live: "https://socialsleuth.netlify.app/",
        highlight: "Data Integration",
        impact: "Multi-platform data aggregation with real-time analytics and anomaly detection",
        architecture: "Multi-API Integration + Star Schema + Real-time Analytics Pipeline",
        icon: Search,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
      },
      {
        title: "COVID-19 Pandemic Data Analysis",
        subtitle: "Real-time ML Data Pipeline with Forecasting Models",
        description: "Advanced data engineering pipeline with machine learning forecasting using Johns Hopkins University real-time COVID-19 data.",
        detailedDescription: "Engineered comprehensive data pipeline utilizing real-time COVID-19 data from Johns Hopkins University API. Implemented Python ML forecasting algorithms, R statistical analysis, and Microsoft Fabric for advanced data processing. Features automated data ingestion, trend analysis, and predictive modeling with dynamic visualization.",
        tech: ["Python", "Machine Learning", "R", "Microsoft Fabric", "API Integration", "Forecasting"],
        github: "https://github.com/DeepNandre/COVID-19-Outbreak-Analysis-and-Prediction",
        highlight: "ML Pipeline",
        impact: "Real-time disease trend forecasting with automated data pipeline",
        architecture: "Real-time API + ML Pipeline + Statistical Analysis + Visualization",
        icon: Users,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200"
      }
    ]
  }
};
