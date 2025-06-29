
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-4">Deep Vijay Nandre © 2025</p>
        <p className="text-gray-400">Cybersecurity-Aware Software Engineer | Building Secure, Scalable Systems</p>
        <div className="flex justify-center gap-6 mt-6">
          <Github 
            className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors" 
            onClick={() => window.open('https://github.com/DeepNandre', '_blank')}
          />
          <Linkedin 
            className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors"
            onClick={() => window.open('https://www.linkedin.com/in/deep-nandre5/', '_blank')}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
