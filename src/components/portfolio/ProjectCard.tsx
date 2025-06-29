
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
  index: number;
  categoryKey: string;
  hoveredProject: number | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProjectCard = ({ 
  project, 
  index, 
  categoryKey, 
  hoveredProject, 
  onMouseEnter, 
  onMouseLeave 
}: ProjectCardProps) => (
  <motion.div 
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <Card
      className="group bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full rounded-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-800 transition-colors duration-300">
                {project.title}
              </h4>
              {project.highlight && (
                <Badge className="bg-neutral-900 text-white px-3 py-1 text-xs font-medium rounded-full">
                  <Award className="w-3 h-3 mr-1" />
                  {project.highlight}
                </Badge>
              )}
            </div>
            <p className="text-base text-neutral-600 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-8 flex-1 text-sm">
          {hoveredProject === index ? project.detailedDescription : project.description}
        </p>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-3">
              <Zap className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-neutral-900 block text-xs uppercase tracking-wide mb-1">Impact</span>
                <span className="text-neutral-600 text-sm">{project.impact}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-medium text-neutral-900 block text-xs uppercase tracking-wide mb-1">Architecture</span>
                <span className="text-neutral-600 text-sm">{project.architecture}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-neutral-900 mb-3 text-xs uppercase tracking-wide">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors duration-200 px-3 py-1 text-xs rounded-full border-0">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3 pt-2">
            {project.github && (
              <Button 
                variant="outline" 
                className="w-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-300 font-medium rounded-xl h-11"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            )}
            {project.live && (
              <Button 
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 rounded-xl h-11"
                onClick={() => window.open(project.live, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default ProjectCard;
