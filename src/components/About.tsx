
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-portfolio-dark/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10">
          <p className="text-gray-300 mb-6">
            I'm a Computer Science student at VIT-AP University with a CGPA of 7.37. 
            I'm passionate about building web applications and exploring new technologies,
            particularly in the fields of artificial intelligence and machine learning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-5 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Adaptability</h3>
              <p className="text-gray-400">
                Quick to learn and apply new technologies to solve problems.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-5 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Team Worker</h3>
              <p className="text-gray-400">
                Collaborative and effective in group settings with strong communication.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-5 text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Learner</h3>
              <p className="text-gray-400">
                Rapidly picks up new concepts and applies them to practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
