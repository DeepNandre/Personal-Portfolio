import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const SpeakingSection = () => {
  const talks = [
    {
      event: "Microsoft Fabric Conference 2025",
      title: "Securing the Data Landscape with AI-driven Security Analytics",
      location: "Las Vegas, US",
      link: "https://azuredataconf.com/#!/speaker/Deep%20Nandre/3679",
      type: "Conference Talk",
      color: "border-neutral-900",
      bgColor: "bg-white"
    },
    {
      event: "GNOME GUADEC 2023",
      title: "Building and Securing Cloud-Native Applications",
      location: "Worldwide",
      link: "https://www.youtube.com/watch?v=hv-bkYpHSbQ&t=15863s",
      type: "Conference Talk",
      color: "border-neutral-900",
      bgColor: "bg-white"
    },
    {
      event: "DoK Day 2022 Europe",
      title: "Containerizing Stateful Applications at Scale",
      location: "Europe",
      link: "https://www.youtube.com/watch?v=a8nA-VdVpOI&t=16s",
      type: "Conference Talk",
      color: "border-neutral-900",
      bgColor: "bg-white"
    }
  ];

  const leadership = [
    {
      role: "Moderator",
      event: "OWASP AppSec Day",
      description: "Took on a leadership role at the OWASP AppSec EU 2022 Conference, efficiently managing the online community through Whova. Facilitated seamless interactions among participants, ensuring an engaging and informative experience for all attendees, while honing my organizational and communication capabilities.",
      color: "border-neutral-900",
      bgColor: "bg-white"
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
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-4">
            Talks
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900">
            Speaking & Conferences
          </h2>
          <div className="w-24 h-1 bg-neutral-900 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge and insights with the global technology community
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {talks.map((talk, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`group bg-white border-2 ${talk.color} rounded-none shadow-none h-full`}>
                <CardContent className="p-8 text-center space-y-6 h-full flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-neutral-900 uppercase tracking-wide">
                      {talk.event}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed flex-1">
                      {talk.title}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Badge className="bg-white text-neutral-900 border-2 border-neutral-900 px-3 py-1 font-semibold uppercase tracking-wide text-[11px]">
                      {talk.location}
                    </Badge>
                    
                    {talk.link && (
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 font-semibold rounded-none"
                        onClick={() => window.open(talk.link, '_blank')}
                      >
                        {talk.link.includes('youtube') ? (
                          <Youtube className="mr-2 h-4 w-4" />
                        ) : (
                          <ExternalLink className="mr-2 h-4 w-4" />
                        )}
                        Watch Talk
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-4 text-center">
            Community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-16">
            Leadership & Volunteer Experience
          </h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {leadership.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`group bg-white border-2 ${item.color} rounded-none shadow-none`}>
                  <CardContent className="p-10">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-neutral-100 border-2 border-neutral-900">
                        <Award className="w-7 h-7 text-neutral-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-neutral-900 mb-3 uppercase tracking-wide">
                          {item.role} - {item.event}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakingSection;
