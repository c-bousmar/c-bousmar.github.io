import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {

  const education = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Université Catholique de Louvain (UCLouvain)",
      year: "Expected 2026",
      description: 'Major in artificial intelligence: big data, optimization, and algorithms'
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Haute École Léonard de Vinci",
      year: "2020 - 2023",
      description: 'Foundation in mathematical theory, computational methods, project management, and business analysis'
    }
  ];

  return (
    <section id="more" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I am a M.Sc. student of Computer Science at
            <a href="https://uclouvain.be/en/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"
              > UCLouvain 
            </a> and a Graduate Research Assistant at
            <a href="https://uclouvain.be/en/research-institutes/icteam" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"
              > ICTEAM 
            </a> with a focus on machine learning and computer vision.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I am currently completing a Master’s thesis in collaboration with another graduate student, focusing on leveraging Transformer architectures for context-aware multi-object tracking. This research explores how contextual reasoning can improve tracking robustness in complex scenes, and our findings have led to the preparation of a research paper.
            </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          I plan on pursuing a PhD to further explore these domains. My goal is to contribute to the theoretical and practical advancements of science, to improve quality of life and preserve the environment.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Based in Brussels</span>
            </div>
            <div className='mt-8'>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Interests</h3>
              <ul className="space-y-3 text-gray-700">
                <li><b>Computer Vision:</b> Tracking, Denoising,…</li>
                <li><b>Machine Learning:</b> Spatial-Reasoning, Context Awareness,…</li>
                <li><b>Applications:</b> Robotics, Autonomous Vehicles, Satellites Imaging,…</li>
              </ul>
            </div>
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Background</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Based in Brussels & Los Angeles</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="text-blue-600" size={20} />
                <span className="text-gray-700">M.Sc. in Computer Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-blue-600" size={20} />
                <span className="text-gray-700">1+ years of research experience</span>
              </div>
            </div> */}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
