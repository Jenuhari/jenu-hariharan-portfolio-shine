
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-portfolio-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Internship Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Internship</h3>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <h4 className="text-lg font-semibold text-portfolio-purple">Microsoft, Languify</h4>
                <span className="text-gray-400">Jul 2022 - Sep 2022</span>
              </div>
              <p className="text-gray-300">
                Worked on a Celebrity Image Classifier project using AI & Python.
                Developed and implemented machine learning algorithms for image recognition 
                and classification with high accuracy rates.
              </p>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
            
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full gradient-bg mt-2 mr-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-purple">
                      Internship Certificate from Smart Internz, Google
                    </h4>
                    <p className="text-gray-300">
                      Completed a comprehensive internship program focused on Google technologies.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full gradient-bg mt-2 mr-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-purple">
                      PCAP: Programming Essentials in Python
                    </h4>
                    <p className="text-gray-300">
                      Certification from CISCO Academy demonstrating proficiency in Python programming.
                    </p>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start">
                  <div className="h-2 w-2 rounded-full gradient-bg mt-2 mr-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-purple">
                      Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
                    </h4>
                    <p className="text-gray-300">
                      Advanced certification in Oracle Cloud Infrastructure with a focus on generative AI technologies.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
