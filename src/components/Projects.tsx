
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  image?: string; // Optional image URL
}

const ProjectCard: React.FC<Project> = ({ title, description, technologies, date, image }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-portfolio-purple/50 transition-colors group">
      <CardContent className="p-0">
        <div className="mb-4">
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        
        {/* Project Image */}
        <div className="mb-4 rounded-lg overflow-hidden bg-white/5 aspect-video flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4 bg-portfolio-dark/50">
              <Bot className="w-12 h-12 text-portfolio-purple opacity-50" />
              <span className="text-white/50 ml-2">AI-generated image coming soon</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-portfolio-purple transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block text-xs text-white bg-white/10 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Detection of Malaria Using Deep Learning",
      description: "Used Alex Net architecture to achieve 96.9% accuracy in classifying 9 different classes of malaria parasites in blood samples.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "CNN"],
      date: "July 2023",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Unique Petrol Dispenser",
      description: "Developed an Arduino Uno & Bluetooth-based system with 98% accuracy for real-time monitoring and control of petrol dispensing.",
      technologies: ["C/C++", "Python", "HTML", "CSS", "JavaScript", "Arduino"],
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1469&auto=format&fit=crop"
    },
    {
      title: "Brain Tumor Cell Identification",
      description: "Created a deep learning solution using TensorFlow & PyTorch that achieved 96.5–99.5% accuracy in identifying brain tumor cells from medical imaging.",
      technologies: ["Python", "MATLAB", "R", "C++", "JavaScript", "TensorFlow", "PyTorch"],
      date: "January 2025",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "AI Stress Detection in College Students",
      description: "Implemented a ResNet-50 based solution with 96.5% accuracy to detect and measure stress levels in college students using various physiological signals.",
      technologies: ["Python", "Deep Learning", "LLM", "ML", "AI", "Computer Vision"],
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1480&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="relative bg-portfolio-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              date={project.date}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
