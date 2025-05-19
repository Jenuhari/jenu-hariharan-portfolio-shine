
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold gradient-text">Jenu Hariharan</p>
            <p className="text-gray-400 mt-2">
              Computer Science Student | Web Developer | AI/ML Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Jenuhari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/jenu-hariharan-b87464318/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hariharunsince92@gmail.com" 
              className="text-gray-400 hover:text-portfolio-purple transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Jenu Hariharan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
