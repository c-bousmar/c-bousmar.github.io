import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const CV = () => {
  const personalInfo = {
    name: "Cyril Bousmar",
    title: "M.Sc. in Computer Science",
    emails: [
      "cyril.bousmar@student.uclouvain.be",
      "cyril.bousmar@gmail.com"
    ],
    phones: [
      "+32 476/33.67.47",
      "+1 (213) 823-5931 (RCS only)"
    ],
    location: "Brussels, Belgium",
    linkedin: "https://linkedin.com/in/cyril-bousmar",
    github: "https://github.com/c-bousmar",
    website: "https://c-bousmar.github.io/"
  };

  const experience = [
    {
      title: "Visiting Graduate Researcher",
      institution: "UCLA",
      institutionUrl: "https://www.ucla.edu/",
      group: "Visual Machines Group",
      groupUrl: "https://visual.ee.ucla.edu/",
      place: "Los Angeles, CA",
      period: "08/2025 - Present",
      professor: "Prof. A. Kadambi",
      professorUrl: "https://scholar.google.com/citations?user=Qv7v5JwAAAAJ&hl=en",
      description: `• Investigate physic-based and self-improving VLMs under supervision of <a href="https://scholar.google.com/citations?user=Qv7v5JwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. A. Kadambi</a>`
    },
    {
      title: "Graduate Research Assistant",
      institution: "UCLouvain",
      institutionUrl: "https://www.uclouvain.be/en",
      group: "ICTEAM",
      groupUrl: "https://www.uclouvain.be/en/research-institutes/icteam",
      place: "Louvain-la-Neuve, Belgium",
      period: "01/2025 - Present",
      professor: "Prof. C. de Vleeschouwer",
      professorUrl: "https://scholar.google.com/citations?user=6v4v5JwAAAAJ&hl=en",
      description: `• Collaborate on modular end-to-end vision tracking framework under supervision of <a href="https://scholar.google.com/citations?user=6v4v5JwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. C. de Vleeschouwer</a>`
    },
    {
      title: "Graduate Research Assistant",
      institution: "UCLouvain",
      institutionUrl: "https://www.uclouvain.be/en",
      group: "ICTEAM",
      groupUrl: "https://www.uclouvain.be/en/research-institutes/icteam",
      place: "Louvain-la-Neuve, Belgium",
      period: "09/2024 - Present",
      professor: "Prof. E. Piette",
      professorUrl: "https://scholar.google.com/citations?user=7v4v5JwAAAAJ&hl=en",
      description: `• Pioneer recommender system for general game playing systems under supervision of <a href="https://scholar.google.com/citations?user=7v4v5JwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Prof. E. Piette</a><br/>• Investigate game specific language descriptors utility against expert knowledge for classification and recommendation`
    },
    {
      title: "Software Engineer",
      institution: "UCLouvain",
      institutionUrl: "https://www.uclouvain.be/en",
      group: "SIAB",
      groupUrl: "https://www.uclouvain.be/fr/directories/entity/search?acronym=SIAB",
      place: "Brussels, Belgium",
      period: "6/2023 - 6/2024",
      professor: "",
      professorUrl: "",
      description: `• Led robust software transition following universities’ merger by securing devices and deploying appropriate software`
    },
    {
      title: "Software Engineer Intern",
      institution: "UCLouvain",
      institutionUrl: "https://www.uclouvain.be/en",
      group: "SIAB",
      groupUrl: "https://www.uclouvain.be/fr/directories/entity/search?acronym=SIAB",
      place: "Brussels, Belgium",
      period: "2/2023 – 5/2023",
      professor: "",
      professorUrl: "",
      description: `• Conceptualized business analysis for application managing teaching resources University-wide (35,000+ students)</br>• Implemented the application and ensured its suitability for use through collaboration with University Law
Department, Office of Student Life, Teaching Staff, and Administration`
    },
    {
      title: "Project Manager",
      institution: "Technological University Dublin",
      institutionUrl: "https://www.tudublin.ie/",
      group: "",
      groupUrl: "",
      place: "Dublin, Ireland",
      period: "9/2022 – 1/2023",
      professor: "",
      professorUrl: "",
      description: `• Acted as project manager for interdisciplinary and cross-cultural collaboration to formulate software application during semester abroad`
    }
  ];

  const education = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Université Catholique de Louvain (UCLouvain)",
      year: "Expected 2026",
      gpa: "3.67"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Haute École Léonard de Vinci",
      year: "2023",
      gpa: "4.0"
    }
  ];

  const skills = {
    "Programming": ["Python", "Java", "C++", "SQL", "Javascript"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "SIMD", "CUDA"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "SciPy"],
    "Research": ["Research & Information Gathering", "Writing Technical Reports", "Presenting Papers"],
    "Soft": ["Teamwork & collaboration", "Public speaking", "Decision-making", "Analytical thinking", "Open-mindedness"],
    "Languages": ["English (Fluent)", "French (Native)"]
  };

  const awards = [
    {
      name: "Erasmus+ Student Exchange",
      description: "Selected as part of my Master's degree",
      year: "2026"
    },
    {
      name: "Erasmus Student Exchange",
      description: "Selected as part of my Bachelor's degree",
      year: "2023"
    }
  ];

  const volunteering = [
    {
      title: "Facilitator/Animator",
      organization: "Biggest Belgian STEM Event, Printemps des Sciences",
      description: "Introducing AI to 100+ high school students"
    },
    {
      title: "Mentor for University Exchange Students",
      organization: "Haute École Léonard de Vinci",
      description: "Mentoring 40+ students each year since 2023"
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Specialization",
      institution: "Stanford University",
      institutionUrl: "https://www.coursera.org/specializations/machine-learning-introduction",
      certificateUrl: "https://coursera.org/share/405637b9da7d9f07019a7bf239ed5e04",
      period: "10/2024",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and neural networks"
    },
    {
      name: "Self-Driving Cars Specialization",
      institution: "University of Toronto",
      institutionUrl: "https://www.coursera.org/specializations/self-driving-cars",
      certificateUrl: "https://coursera.org/share/1d079e56434234d29f495fe5d5637f91",
      period: "09/2024",
      description: "Advanced course on autonomous vehicle technology and computer vision"
    },
    {
      name: "International English Language Testing System (IELTS)",
      institution: "British Council",
      institutionUrl: "https://www.ielts.org/",
      certificateUrl: "https://c-bousmar.github.io/files/cyril_bousmar_IELTS_results.pdf",
      period: "06/2023",
      description: "Band 8/9 - Academic English proficiency certification"
    },
    {
      name: "Basics of Japanese (LJAPO1100)",
      institution: "The Language Institute of the UCLouvain",
      institutionUrl: "https://www.uclouvain.be/en/ilv",
      period: "06/2020",
      description: "Fundamental Japanese language course covering basic grammar and vocabulary"
    }
  ];

  // const publications = [
  //   "Deep Learning Approaches for Drug-Protein Interaction Prediction. Nature Machine Intelligence, 2024.",
  //   "Transformer-based Analysis of Scientific Literature. Computational Linguistics, 2023.",
  //   "Computer Vision for Medical Image Analysis. Medical Image Analysis, 2023.",
  //   "Data Science Platform for Collaborative Research. Journal of Open Source Software, 2022."
  // ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 mb-4">{personalInfo.title}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              {/* Emails - Stacked */}
              <div className="flex items-start space-x-1">
                <Mail size={16} className="mt-0.5" />
                <div className="flex flex-col items-start">
                  {personalInfo.emails.map((email, index) => (
                    <a 
                      key={`email-${index}`} 
                      href={`mailto:${email}`} 
                      className="hover:text-blue-600 text-left"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Phone Numbers - Stacked */}
              <div className="flex items-start space-x-1">
                <Phone size={16} className="mt-0.5" />
                <div className="flex flex-col items-start">
                  {personalInfo.phones.map((phone, index) => (
                    <span key={`phone-${index}`} className="text-left">
                      {phone}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Github size={20} />
              </a>
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mb-8">
            <a
              href="/cyril_bousmar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={20} />
              <span>PDF Resume</span>
            </a>
          </div>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg">{exp.title}</h3>
                      <div className="flex flex-wrap gap-2 items-center mt-1">
                        {exp.institutionUrl ? (
                          <a href={exp.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                            {exp.institution}
                          </a>
                        ) : (
                          <span className="text-blue-600 font-medium">{exp.institution}</span>
                        )}
                        {exp.group && exp.groupUrl && (
                          <>
                            <span className="text-gray-400">|</span>
                            <a href={exp.groupUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                              {exp.group}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{exp.place}</div>
                    </div>
                  </div>
                  <div
                    className="text-gray-700 mt-2"
                    dangerouslySetInnerHTML={{ __html: exp.description.replace(/(<a )/g, '$1class=\"underline text-blue-700 hover:text-blue-900\" ') }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {cert.certificateUrl ? (
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {cert.name}
                        </a>
                      ) : cert.name}
                    </h3>
                    <p className="text-blue-600">
                      {cert.institutionUrl ? (
                        <a href={cert.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {cert.institution}
                        </a>
                      ) : cert.institution}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{cert.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{cert.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{edu.year}</p>
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Awards</h2>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{award.name}</h3>
                    <p className="text-sm text-gray-600">{award.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">({award.year})</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Volunteering</h2>
            <div className="space-y-4">
              {volunteering.map((vol, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{vol.title}</h3>
                    <p className="text-blue-600">{vol.organization}</p>
                    <p className="text-sm text-gray-600">{vol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          {/* <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Selected Publications</h2>
            <ul className="space-y-3">
              {publications.map((pub, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{pub}</span>
                </li>
              ))}
            </ul>
          </section> */}

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV; 