
import React from 'react';

const EducationItem: React.FC<{
  title: string;
  institution: string;
  period: string;
  details: string;
  isLast?: boolean;
}> = ({ title, institution, period, details, isLast = false }) => {
  return (
    <div className="relative pb-12">
      {!isLast && (
        <div className="absolute left-4 top-5 h-full w-0.5 gradient-bg"></div>
      )}
      
      <div className="relative flex items-start group">
        <div className="h-9 w-9 rounded-full gradient-bg flex items-center justify-center z-10">
          <div className="h-7 w-7 rounded-full bg-portfolio-dark group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
        
        <div className="ml-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-lg text-portfolio-purple mb-1">{institution}</p>
          <p className="text-gray-400 mb-2">{period}</p>
          <p className="text-gray-300">{details}</p>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto pl-4">
          <EducationItem
            title="BTech in Computer Science"
            institution="VIT-AP University"
            period="2021 - Present"
            details="Currently pursuing my Bachelor's degree with a CGPA of 7.37, focusing on computer science fundamentals, web development, and AI/ML technologies."
          />
          
          <EducationItem
            title="Intermediate"
            institution="TIRUMALA, Bhimavaram"
            period="2019 - 2021"
            details="Completed intermediate education with 964 marks, with a focus on Mathematics, Physics, and Chemistry."
          />
          
          <EducationItem
            title="10th Standard"
            institution="RAVINDRA ENGLISH MEDIUM SCHOOL"
            period="2018 - 2019"
            details="Completed secondary education with a GPA of 9.3, developing a strong foundation in science and mathematics."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
