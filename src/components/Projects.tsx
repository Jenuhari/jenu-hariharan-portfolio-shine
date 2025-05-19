
import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, technologies, date }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-portfolio-purple/50 transition-colors group">
      <div className="mb-4">
        <span className="text-gray-400 text-sm">{date}</span>
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
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Detection of Malaria Using Deep Learning",
      description: "Used Alex Net architecture to achieve 96.9% accuracy in classifying 9 different classes of malaria parasites in blood samples.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "CNN"],
      date: "July 2023"
    },
    {
      title: "Unique Petrol Dispenser",
      description: "Developed an Arduino Uno & Bluetooth-based system with 98% accuracy for real-time monitoring and control of petrol dispensing.",
      technologies: ["C/C++", "Python", "HTML", "CSS", "JavaScript", "Arduino"],
      date: "October 2023"
    },
    {
      title: "Brain Tumor Cell Identification",
      description: "Created a deep learning solution using TensorFlow & PyTorch that achieved 96.5–99.5% accuracy in identifying brain tumor cells from medical imaging.",
      technologies: ["Python", "MATLAB", "R", "C++", "JavaScript", "TensorFlow", "PyTorch"],
      date: "January 2025"
    },
    {
      title: "AI Stress Detection in College Students",
      description: "Implemented a ResNet-50 based solution with 96.5% accuracy to detect and measure stress levels in college students using various physiological signals.",
      technologies: ["Python", "Deep Learning", "LLM", "ML", "AI", "Computer Vision"],
      date: "May 2025"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
