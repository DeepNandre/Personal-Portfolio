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
      color: "border-blue-200",
      bgColor: "bg-blue-50"
    },
    {
      event: "GNOME GUADEC 2023",
      title: "Building and Securing Cloud-Native Applications",
      location: "Worldwide",
      link: "https://www.youtube.com/watch?v=hv-bkYpHSbQ&t=15863s",
      type: "Conference Talk",
      color: "border-green-200",
      bgColor: "bg-green-50"
    },
    {
      event: "DoK Day 2022 Europe",
      title: "Containerizing Stateful Applications at Scale",
      location: "Europe",
      link: "https://www.youtube.com/watch?v=a8nA-VdVpOI&t=16s",
      type: "Conference Talk",
      color: "border-indigo-200",
      bgColor: "bg-indigo-50"
    }
  ];

  const leadership = [
    {
      role: "Moderator",
      event: "OWASP AppSec Day",
      description: "Took on a leadership role at the OWASP AppSec EU 2022 Conference, efficiently managing the online community through Whova. Facilitated seamless interactions among participants, ensuring an engaging and informative experience for all attendees, while honing my organizational and communication capabilities.",
      color: "border-purple-200",
      bgColor: "bg-purple-50"
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Speaking & Conferences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
              <Card className={`group bg-white border-2 ${talk.color} hover:shadow-2xl transition-all duration-500 h-full hover:scale-105 relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 ${talk.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <CardContent className="relative z-10 p-8 text-center space-y-6 h-full flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {talk.event}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {talk.title}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Badge className="bg-blue-100 text-blue-800 px-3 py-1 font-semibold">
                      📍 {talk.location}
                    </Badge>
                    
                    {talk.link && (
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
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
                <Card className={`group bg-white border-2 ${item.color} hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative z-10 p-10">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-purple-100 rounded-full border-2 border-purple-200 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                          {item.role} - {item.event}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
    </section>
  );
};

export default SpeakingSection;
