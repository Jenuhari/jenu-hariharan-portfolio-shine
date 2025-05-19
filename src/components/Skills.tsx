
import React from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "JavaScript", percentage: 95 },
        { name: "Java", percentage: 85 },
        { name: "TypeScript", percentage: 85 },
        { name: "R", percentage: 75 }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React.js", percentage: 95 },
        { name: "Next.js", percentage: 90 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "Redux", percentage: 85 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", percentage: 90 },
        { name: "MongoDB", percentage: 85 },
        { name: "PostgreSQL", percentage: 80 },
        { name: "RESTful APIs", percentage: 90 },
        { name: "Express.js", percentage: 85 }
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", percentage: 90 },
        { name: "Docker", percentage: 80 },
        { name: "AWS", percentage: 75 },
        { name: "Firebase", percentage: 85 },
        { name: "CI/CD", percentage: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
