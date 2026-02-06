
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectCategories } from "./projectData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-spacing bg-white border-t-2 border-neutral-900">
      <div className="container-refined">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg mb-4 text-neutral-900">
            Featured Work
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-neutral-800">
            A curated selection of projects showcasing technical expertise and innovation
          </p>
        </motion.div>

        <Tabs defaultValue="software-engineer" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-16 h-14 p-1 bg-white border-2 border-neutral-900 rounded-none">
            {Object.entries(projectCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key} 
                className="flex items-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wide rounded-none data-[state=active]:bg-neutral-900 data-[state=active]:text-white transition-all duration-300 text-neutral-700 hover:text-neutral-900"
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.label.split(' ')[0]}</span>
                <Badge variant="secondary" className="ml-1 bg-white border border-neutral-900 text-neutral-900 text-xs px-2 py-0.5 rounded-none data-[state=active]:bg-neutral-800 data-[state=active]:text-neutral-300">
                  {category.projects.length}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projectCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <ProjectCard 
                    key={index} 
                    project={project} 
                    index={index} 
                    categoryKey={key}
                    hoveredProject={hoveredProject}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
