import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { apiService } from '../services/api';
import type { Publication } from '../services/api';

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await apiService.getFeaturedPublications();
        setPublications(data);
      } catch (error) {
        console.error('Failed to fetch publications:', error);
        // Fallback to static data if API is not available
        setPublications([
          {
            id: '1',
            title: "Deep Learning Approaches for Drug-Protein Interaction Prediction",
            authors: "Your Name, Co-author 1, Co-author 2",
            journal: "Nature Machine Intelligence",
            year: "2024",
            doi: "10.1038/s42256-024-00001-x",
            abstract: "We present a novel deep learning framework for predicting drug-protein interactions using graph neural networks and attention mechanisms...",
            pdf: "https://example.com/paper1.pdf",
            code: "https://github.com/yourusername/drug-interaction-prediction",
            citations: 15,
            featured: true
          },
          {
            id: '2',
            title: "Transformer-based Analysis of Scientific Literature",
            authors: "Your Name, Co-author 1",
            journal: "Computational Linguistics",
            year: "2023",
            doi: "10.1162/CL_a_00456",
            abstract: "This paper introduces a new approach to extracting key insights from scientific papers using transformer models...",
            pdf: "https://example.com/paper2.pdf",
            code: "https://github.com/yourusername/scientific-nlp",
            citations: 8,
            featured: true
          },
          {
            id: '3',
            title: "Computer Vision for Medical Image Analysis",
            authors: "Your Name, Co-author 1, Co-author 2, Co-author 3",
            journal: "Medical Image Analysis",
            year: "2023",
            doi: "10.1016/j.media.2023.102789",
            abstract: "We propose a novel computer vision system for automated detection of medical conditions from X-ray images...",
            pdf: "https://example.com/paper3.pdf",
            code: "https://github.com/yourusername/medical-vision",
            citations: 23,
            featured: true
          },
          {
            id: '4',
            title: "Data Science Platform for Collaborative Research",
            authors: "Your Name",
            journal: "Journal of Open Source Software",
            year: "2022",
            doi: "10.21105/joss.04567",
            abstract: "A comprehensive platform for data analysis and visualization with real-time collaboration features...",
            pdf: "https://example.com/paper4.pdf",
            code: "https://github.com/yourusername/data-platform",
            citations: 12,
            featured: false
          },
          {
            id: '5',
            title: "Blockchain Applications in Healthcare",
            authors: "Your Name, Co-author 1",
            journal: "Healthcare Technology",
            year: "2022",
            doi: "10.1016/j.healthtech.2022.001234",
            abstract: "Exploring the potential of blockchain technology for secure and transparent healthcare data management...",
            pdf: "https://example.com/paper5.pdf",
            code: "https://github.com/yourusername/healthcare-blockchain",
            citations: 7,
            featured: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  const featuredPublications = publications.filter(p => p.featured);
  const otherPublications = publications.filter(p => !p.featured);
  const displayedPublications = showAll ? publications : featuredPublications;

  if (loading) {
    return (
      <section id="publications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading publications...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My research contributions published in peer-reviewed journals and conferences. 
            Each publication includes open-source code and detailed documentation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{pub.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-blue-600 font-medium">{pub.journal}</span>
                    <span className="text-gray-500">DOI: {pub.doi}</span>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <FileText size={16} />
                      <span>{pub.citations} citations</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:flex-shrink-0">
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <FileText size={16} />
                    <span>PDF</span>
                  </a>
                  <a
                    href={pub.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dropdown/Expandable Section */}
        {otherPublications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <span className="text-lg font-semibold text-gray-900">
                {showAll ? 'Show Less Publications' : `See ${otherPublications.length} More Publications`}
              </span>
              {showAll ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-8 mt-8">
                    {otherPublications.map((pub, index) => (
                      <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
                              <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                                {pub.title}
                              </a>
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <Users size={16} />
                                <span>{pub.authors}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span>{pub.year}</span>
                              </div>
                            </div>

                            <p className="text-gray-700 mb-4 line-clamp-3">
                              {pub.abstract}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="text-blue-600 font-medium">{pub.journal}</span>
                              <span className="text-gray-500">DOI: {pub.doi}</span>
                              <div className="flex items-center space-x-1 text-gray-600">
                                <FileText size={16} />
                                <span>{pub.citations} citations</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 lg:flex-shrink-0">
                            <a
                              href={pub.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                            >
                              <FileText size={16} />
                              <span>PDF</span>
                            </a>
                            <a
                              href={pub.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                            >
                              <ExternalLink size={16} />
                              <span>Code</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span>View Google Scholar Profile</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 