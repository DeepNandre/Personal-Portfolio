
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Deep Nandre</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#impact" className="text-gray-600 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
