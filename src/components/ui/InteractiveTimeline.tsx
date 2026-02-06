
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
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-neutral-900">
        <motion.div className="w-full bg-neutral-900" style={{ height: lineHeight }} />
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
              className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 border-2 border-neutral-900 z-10 ${
                activeIndex >= index ? 'bg-neutral-900' : 'bg-white'
              }`}
              whileHover={{ scale: 1.1 }}
              animate={{ scale: activeIndex === index ? 1.15 : 1 }}
            />

            {/* Content card */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
            }`}>
              <motion.div>
                <Card className={`group bg-white border-2 ${item.color} rounded-none shadow-none`}>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-neutral-900 uppercase tracking-wide">
                          {item.role}
                        </h3>
                        <p className="text-base text-neutral-800 font-semibold flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {item.company}
                        </p>
                      </div>
                      
                      <div className="text-neutral-700 space-y-1 text-sm">
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
                          <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 leading-relaxed">
                            <div className="w-2 h-2 bg-neutral-900 mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
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
