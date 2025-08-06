import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMore = () => {
    const element = document.getElementById('more');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/profile_picture.png"
            alt="Cyril Bousmar"
            className="mx-auto mb-6 w-40 h-40 rounded-full object-cover shadow-md"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Cyril</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            M.Sc. student and Graduate Research Assistant in Computer Science passionate about Machine Learning and Computer Vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToMore}
              className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Learn More</span>
              <ArrowDown size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/cyril-bousmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/c-bousmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 