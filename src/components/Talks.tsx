import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { apiService } from '../services/api';
import type { Talk } from '../services/api';

const Talks = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const data = await apiService.getFeaturedTalks();
        setTalks(data);
      } catch (error) {
        console.error('Failed to fetch talks:', error);
        // Fallback to static data if API is not available
        setTalks([
          {
            id: '1',
            title: "Advances in Drug Discovery with Machine Learning",
            event: "International Conference on Machine Learning (ICML)",
            location: "Vienna, Austria",
            date: "July 2024",
            type: "Conference Talk",
            description: "Presented our novel deep learning approach for drug-protein interaction prediction, including experimental results and future directions.",
            slides: "https://example.com/slides/icml-2024",
            video: "https://example.com/video/icml-2024",
            audience: "500+ researchers",
            featured: true
          },
          {
            id: '2',
            title: "Natural Language Processing in Scientific Research",
            event: "NLP for Scientific Literature Workshop",
            location: "Virtual",
            date: "March 2024",
            type: "Workshop",
            description: "Led a workshop on applying transformer models to extract insights from scientific papers and research literature.",
            slides: "https://example.com/slides/nlp-workshop-2024",
            video: "https://example.com/video/nlp-workshop-2024",
            audience: "50+ participants",
            featured: true
          },
          {
            id: '3',
            title: "Computer Vision Applications in Healthcare",
            event: "Medical Imaging Symposium",
            location: "San Francisco, CA",
            date: "November 2023",
            type: "Invited Talk",
            description: "Shared insights on implementing computer vision algorithms for medical image analysis and diagnostic assistance.",
            slides: "https://example.com/slides/medical-imaging-2023",
            video: "https://example.com/video/medical-imaging-2023",
            audience: "200+ healthcare professionals",
            featured: true
          },
          {
            id: '4',
            title: "Building Collaborative Data Science Platforms",
            event: "Data Science Summit",
            location: "London, UK",
            date: "September 2023",
            type: "Panel Discussion",
            description: "Participated in a panel discussion about the future of collaborative research platforms and open science.",
            slides: "https://example.com/slides/data-science-summit-2023",
            video: "https://example.com/video/data-science-summit-2023",
            audience: "300+ data scientists",
            featured: false
          },
          {
            id: '5',
            title: "Introduction to Deep Learning for Beginners",
            event: "University Guest Lecture Series",
            location: "Local University",
            date: "May 2023",
            type: "Guest Lecture",
            description: "Delivered an introductory lecture on deep learning fundamentals and practical applications for undergraduate students.",
            slides: "https://example.com/slides/deep-learning-intro-2023",
            video: "https://example.com/video/deep-learning-intro-2023",
            audience: "100+ students",
            featured: false
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  const featuredTalks = talks.filter(t => t.featured);
  const otherTalks = talks.filter(t => !t.featured);
  const displayedTalks = showAll ? talks : featuredTalks;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference Talk':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop':
        return 'bg-green-100 text-green-800';
      case 'Invited Talk':
        return 'bg-purple-100 text-purple-800';
      case 'Panel Discussion':
        return 'bg-orange-100 text-orange-800';
      case 'Guest Lecture':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <section id="talks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading talks...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="talks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Talks & Presentations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I regularly present my research at conferences, workshops, and universities. 
            Here are some of my recent speaking engagements and presentations.
          </p>
        </motion.div>

        <div className="space-y-8">
          {displayedTalks.map((talk, index) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{talk.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(talk.type)}`}>
                      {talk.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{talk.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{talk.audience}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {talk.description}
                  </p>

                  <div className="text-sm text-gray-600">
                    <strong>{talk.event}</strong>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:flex-shrink-0">
                  <a
                    href={talk.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Slides</span>
                  </a>
                  <a
                    href={talk.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
                  >
                    <Video size={16} />
                    <span>Video</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dropdown/Expandable Section */}
        {otherTalks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <span className="text-lg font-semibold text-gray-900">
                {showAll ? 'Show Less Talks' : `See ${otherTalks.length} More Talks`}
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
                    {otherTalks.map((talk, index) => (
                      <motion.div
                        key={talk.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-bold text-gray-900">{talk.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(talk.type)}`}>
                                {talk.type}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span>{talk.date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={16} />
                                <span>{talk.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users size={16} />
                                <span>{talk.audience}</span>
                              </div>
                            </div>

                            <p className="text-gray-700 mb-4">
                              {talk.description}
                            </p>

                            <div className="text-sm text-gray-600">
                              <strong>{talk.event}</strong>
                            </div>
                          </div>

                          <div className="flex flex-col space-y-2 lg:flex-shrink-0">
                            <a
                              href={talk.slides}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                            >
                              <ExternalLink size={16} />
                              <span>Slides</span>
                            </a>
                            <a
                              href={talk.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
                            >
                              <Video size={16} />
                              <span>Video</span>
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
            href="mailto:your.email@example.com?subject=Speaking%20Engagement"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <span>Invite Me to Speak</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Talks; 