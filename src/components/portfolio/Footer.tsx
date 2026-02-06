
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-neutral-900 border-t-2 border-neutral-900">
      <div className="container-refined text-center">
        <p className="text-lg font-bold uppercase tracking-wide mb-3">Deep Vijay Nandre © 2026</p>
        <p className="text-neutral-700 uppercase tracking-wide text-sm">Cybersecurity-Aware Software Engineer | Building Secure, Scalable Systems</p>
        <div className="flex justify-center gap-6 mt-6">
          <Github 
            className="h-6 w-6 cursor-pointer transition-colors" 
            onClick={() => window.open('https://github.com/DeepNandre', '_blank')}
          />
          <Linkedin 
            className="h-6 w-6 cursor-pointer transition-colors"
            onClick={() => window.open('https://www.linkedin.com/in/deep-nandre5/', '_blank')}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
