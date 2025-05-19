
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-portfolio-purple mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a href="mailto:hariharunsince92@gmail.com" className="text-gray-300 hover:text-portfolio-purple transition-colors">
                    hariharunsince92@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-portfolio-purple mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a href="tel:+918074222974" className="text-gray-300 hover:text-portfolio-purple transition-colors">
                    +91 8074222974
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-portfolio-purple mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/jenu-hariharan-b87464318/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-portfolio-purple transition-colors"
                  >
                    linkedin.com/in/jenu-hariharan-b87464318/
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Github className="text-portfolio-purple mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <a 
                    href="https://github.com/Jenuhari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-portfolio-purple transition-colors"
                  >
                    github.com/Jenuhari
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-portfolio-purple"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-portfolio-purple"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-portfolio-purple"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="gradient-bg text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
