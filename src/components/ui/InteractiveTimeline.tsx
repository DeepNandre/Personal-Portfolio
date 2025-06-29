
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Briefcase } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  color: string;
  bgColor: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

const InteractiveTimeline = ({ items }: InteractiveTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Animated timeline line */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200">
        <motion.div
          className="w-full bg-gradient-to-b from-blue-600 to-purple-600"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setActiveIndex(index)}
          >
            {/* Timeline dot */}
            <motion.div
              className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 ${
                activeIndex >= index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: activeIndex === index ? 1.3 : 1,
                boxShadow: activeIndex === index 
                  ? "0 0 20px rgba(59, 130, 246, 0.6)" 
                  : "0 2px 10px rgba(0, 0, 0, 0.1)"
              }}
            />

            {/* Content card */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
            }`}>
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Card className={`group bg-white border-2 ${item.color} hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative z-10 p-8">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {item.role}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {item.company}
                        </p>
                      </div>
                      
                      <div className="text-gray-600 space-y-1">
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
