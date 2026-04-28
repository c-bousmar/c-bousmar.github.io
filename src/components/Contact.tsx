import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const About = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's Connect !
          </h2>
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/cyril-bousmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/c-bousmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          <a href="mailto:cyril.bousmar@etik.com" className="hover:text-blue-600 transition-colors duration-200"
              >cyril.bousmar@etik.com</a></p>
          <a href="mailto:cyril.bousmar@student.uclouvain.be" className="hover:text-blue-600 transition-colors duration-200"
                >cyril.bousmar@student.uclouvain.be</a></p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          +32 476/33.67.47
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          +1 (310) 981-3584
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
