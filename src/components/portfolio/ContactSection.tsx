
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";
import CreativeContact from "./CreativeContact";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-neutral-600 mb-4">Contact</div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Let's Connect</h2>
          <p className="text-lg text-neutral-700 mb-12">
            Ready to build something amazing together? Here's how to reach me:
          </p>
          
          {/* Creative Contact Section */}
          <div className="mb-12">
            <CreativeContact />
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-neutral-900 border-2 border-neutral-900 px-8 py-3 rounded-none hover:bg-neutral-900 hover:text-white"
                onClick={() => window.open('mailto:23685656@stu.mmu.ac.uk', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-3 rounded-none"
                onClick={() => window.open('https://www.linkedin.com/in/deep-nandre5/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            
            <div className="text-neutral-700">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                Manchester, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
