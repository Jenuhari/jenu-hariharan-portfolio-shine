
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center z-10">
        {/* Avatar */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-float">
          <div className="absolute inset-0 rounded-full gradient-bg blur-sm opacity-60"></div>
          <div className="relative flex items-center justify-center w-full h-full rounded-full bg-portfolio-dark text-white text-4xl font-bold border-2 border-portfolio-purple/30">
            JH
          </div>
        </div>
        
        {/* Introduction */}
        <h1 className="mb-4 animate-fade-in-down">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Jenu Hariharan</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
          Computer Science Student | Web Developer | AI/ML Enthusiast
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in-up">
          <a 
            href="https://github.com/Jenuhari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} className="text-white" />
          </a>
          <a 
            href="https://linkedin.com/in/jenu-hariharan-b87464318/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-white" />
          </a>
          <a 
            href="mailto:hariharunsince92@gmail.com" 
            className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} className="text-white" />
          </a>
        </div>
        
        {/* CTA Button */}
        <a 
          href="#projects" 
          className="inline-block px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity animate-fade-in-up"
        >
          View My Work
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-scroll-down">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
