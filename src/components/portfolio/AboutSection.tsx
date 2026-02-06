
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Cloud, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      text: "MSc Cyber Security"
    },
    {
      icon: Cloud,
      text: "AWS & Azure Expert"
    },
    {
      icon: Code,
      text: "DevOps & Automation"
    },
    {
      icon: Zap,
      text: "ML-Driven Security"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-refined">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg mb-6">
            About Me
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Building the future of secure, scalable systems through code and curiosity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="prose prose-lg max-w-none space-y-6 text-neutral-800">
              <p className="text-xl leading-relaxed">
                I'm an <span className="font-semibold text-neutral-900">MSc Cyber Security</span> student at Manchester Metropolitan University (Class of 2025) with hands-on experience in engineering resilient infrastructure and secure systems.
              </p>
              
              <p className="leading-relaxed">
                My work spans across cloud platforms (<span className="font-medium">AWS, Azure</span>), DevOps pipelines (<span className="font-medium">Docker, Kubernetes, GitLab CI/CD</span>), and security monitoring tools (<span className="font-medium">Microsoft Sentinel, Splunk</span>). I thrive in fast-paced environments where infrastructure automation, system observability, and secure coding practices are essential.
              </p>
              
              <p className="leading-relaxed">
                I've delivered impactful projects including a <span className="font-medium text-blue-600">national award-winning VPN detection system</span>, a <span className="font-medium text-blue-600">BS EN 62305-2 compliant</span> lightning risk engine, and <span className="font-medium text-blue-600">ML-driven threat detection</span> on Azure Sentinel with <span className="font-medium text-blue-600">35% false positive reduction</span>.
              </p>
              
              <div className="p-6 border-2 border-neutral-900 bg-neutral-50">
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-3">
                  Manifesto
                </div>
                <p className="text-lg font-semibold text-neutral-900">
                  "I aim to bring system-level thinking and executional speed to build the next generation of secure financial services."
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 border-neutral-900 rounded-none shadow-none">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="p-3 bg-neutral-100 border-2 border-neutral-900">
                        <highlight.icon className="h-6 w-6 text-neutral-900" />
                      </div>
                      <span className="font-semibold text-neutral-900">{highlight.text}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spotify Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-2 border-neutral-900 rounded-none shadow-none">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-3">
                  <div className="text-xs uppercase tracking-[0.3em] text-neutral-600">
                    Now Playing
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 text-display">
                    Currently Listening
                  </h3>
                  <p className="text-sm text-neutral-700">
                    The soundtrack to my coding sessions
                  </p>
                </div>
                
                <div className="border-2 border-neutral-900">
                  <iframe 
                    style={{borderRadius: '0px'}} 
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1E35YPtSMUnvdd?utm_source=generator" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="w-full"
                  />
                </div>
                
                <p className="text-xs text-neutral-600 text-center uppercase tracking-wide">
                  Music fuels creativity and keeps the algorithms flowing
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
