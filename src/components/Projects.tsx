import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileText, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { apiService } from '../services/api';
import type { Project } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCardExpansion = (projectId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await apiService.getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        // Fallback to static data if API is not available
        setProjects([
          {
            id: '1',
            title: "Three-Dimensional Hand Gestures Classification: Comparative Study of Machine Learning Techniques",
            description: `This project implements and compares various machine learning techniques for 3D hand gesture classification. 

**Key Objectives:**
- Compare baseline approaches (KNN with different distance metrics)
- Evaluate advanced techniques (LSTM, HMM, DenseNet)
- Analyze performance across different gesture recognition scenarios

**Technical Implementation:**
The study encompasses multiple approaches ranging from traditional machine learning to deep learning methods. Each technique was evaluated on standardized datasets to ensure fair comparison.

**Results:**
Our comprehensive analysis revealed significant performance differences between traditional and neural approaches, with deep learning methods showing superior accuracy in complex gesture recognition tasks.`,
            technologies: ["Python", "PyTorch"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/LINFO2275/tree/main/Project-GestRecogn",
            report: "/projects/LINFO2275_report_project2.pdf",
            image: "/projects/hand_gestures_classification.jpeg",
            featured: true,
            entity: "UCLouvain, LINFO2275 – Data Mining and Decision Making",
            isGradedBest: true
          },
          {
            id: '2',
            title: "Optimal Strategy for Snakes and Ladders using MDP and Q-Learning",
            description: `This project presents a computational analysis of a stochastic version of the classic game Snakes and Ladders, using **Markov Decision Processes (MDP)** and **Reinforcement Learning (Q-learning)**. 

**Objective:**
The primary goal is to determine optimal strategies for dice selection to minimize the expected number of moves required to reach the final square.

**Methodology:**
- Implementation of MDP framework for game state modeling
- Q-learning algorithm for strategy optimization
- Comparative analysis of different dice selection strategies

**Key Findings:**
The study revealed that strategic dice selection can significantly reduce game completion time, with certain patterns emerging for optimal play under different board configurations.`,
            technologies: ["Python", "PyTorch"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/LINFO2275/tree/main/Project-MDP",
            report: "/projects/LINFO2275_report_project1.pdf",
            image: "/projects/snake_and_ladder_game.png",
            featured: true,
            entity: "UCLouvain, LINFO2275 – Data Mining and Decision Making",
            isGradedBest: true
          },
          {
            id: '3',
            title: "Inference and Imputes in Bayesian Networks",
            description: `Advanced study of probabilistic reasoning in Bayesian Networks with focus on inference algorithms and missing data handling.

**Research Areas:**
- Exact inference algorithms (Variable Elimination, Junction Tree)
- Approximate inference methods (Sampling techniques)
- Missing data imputation strategies
- Performance comparison across different network topologies

**Technical Contributions:**
Implementation of efficient algorithms for probabilistic inference and comprehensive evaluation of imputation techniques for incomplete datasets.`,
            technologies: ["Python"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/LINFO2364-Mining-Patterns-in-Data/project3",
            report: "/projects/LINFO2364_report_project3.pdf",
            image: "/projects/inference.png",
            featured: true,
            entity: "UCLouvain, LINFO2364 - Mining Patterns in Data",
            isGradedBest: true
          },
          {
            id: '4',
            title: "Sequence Pattern Mining and Supervised Classification",
            description: `Comprehensive study of sequence pattern mining techniques combined with supervised learning approaches for classification tasks.

**Core Components:**
- Sequential pattern discovery algorithms
- Feature extraction from temporal sequences
- Integration with classification models
- Performance evaluation on real-world datasets

**Innovation:**
Novel approach combining traditional sequence mining with modern machine learning classifiers for improved prediction accuracy.`,
            technologies: ["Python"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/LINFO2364-Mining-Patterns-in-Data/project2",
            report: "/projects/LINFO2364_report_project2.pdf",
            image: "/projects/sequence_pattern_ining.png",
            featured: true,
            entity: "UCLouvain, LINFO2364 - Mining Patterns in Data",
            isGradedBest: true
          },
          {
            id: '5',
            title: "Comparison and Analysis of Frequent Item-set Mining Algorithms",
            description: `This report presents a comprehensive analysis and comparison of frequent item-set mining algorithms, focusing on the **Apriori** and **ECLAT** approaches. 

**Implementation Details:**
We implemented three distinct variants:
- **Apriori Naive**: Basic implementation with straightforward candidate generation
- **Apriori Pruning**: Enhanced version with optimized pruning strategies  
- **ECLAT**: Vertical data format approach for improved efficiency

**Experimental Methodology:**
The algorithms were evaluated across multiple datasets with varying densities, assessing:
- Computational efficiency (execution time)
- Memory consumption patterns
- Performance under different minimum support thresholds

**Key Findings:**
Our comprehensive experiments demonstrate that **ECLAT generally outperforms Apriori in dense datasets**, while **Apriori Pruning offers significant improvements** over its naive counterpart. The results highlight the importance of algorithm selection based on dataset characteristics.`,
            technologies: ["Python"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/LINFO2364-Mining-Patterns-in-Data/project1",
            report: "/projects/LINFO2364_report_project1.pdf",
            image: "/projects/frequent_itemset_mining.png",
            featured: false,
            entity: "UCLouvain, LINFO2364 - Mining Patterns in Data",
            isGradedBest: true
          },
          {
            id: '6',
            title: "Fully Fonctionnal Motion Planner for Autonomous Car in CARLA",
            description: `This project involved implementing a comprehensive **motion planning stack** for an autonomous vehicle capable of complex navigation tasks in the [CARLA simulation environment](https://carla.org/).

**System Requirements:**
- Lane tracking and maintenance
- Static and dynamic obstacle avoidance  
- Stop sign detection and handling
- Real-time path planning and execution

**Architecture Components:**
1. **Behavioral Planning**: Finite state machine managing driving states and transitions
2. **Path Generation**: Optimized spiral path computation for smooth trajectories
3. **Collision Checking**: Real-time obstacle detection and avoidance algorithms
4. **Path Selection**: Multi-criteria optimization for safe and efficient route planning
5. **Velocity Planning**: Smooth speed profile generation with comfort constraints

**Results:**
The implemented solution successfully meets all project expectations, demonstrating correct vehicle behavior across various simulation scenarios including urban environments, highway driving, and complex intersection navigation.`,
            technologies: ["Python", "Numpy", "SciPy", "CARLA", "OpenCV"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/AV-Toronto-specialization/motion-planning",
            report: "https://coursera.org/share/1d079e56434234d29f495fe5d5637f91",
            image: "/projects/motion_planner.gif",
            featured: false,
            entity: "University of Toronto - Self-Driving Cars Specialization (4 courses)",
            isGradedBest: false
          },
          {
            id: '7',
            title: "Analysis and Comparison of Segmentation Models for Pet Recognition",
            description: `Segmentation models are essential for image-based pet recognition, with critical applications in **wildlife detection for endangered species conservation**. 

**Research Focus:**
This study provides a comprehensive evaluation of **U-Net** and **PSPNet** architectures on The Oxford-IIIT Pet Dataset, comparing their segmentation performance and uncertainty estimation capabilities.

**Technical Implementation:**
- Training on NVIDIA GTX1070 Ti hardware
- Qualitative and quantitative performance assessment
- Comprehensive uncertainty analysis methodology

**Key Findings:**
- **PSPNet outperforms U-Net** in accuracy metrics but requires higher computational resources
- **Uncertainty analysis** reveals PSPNet's sensitivity to pixel-based transformations (brightness, noise) but demonstrates robustness to geometric changes (rotations, flips)
- Results suggest PSPNet is well-suited for pet segmentation applications but requires adaptive thresholding strategies

**Future Directions:**
Recommendations include exploring data augmentation techniques, hyperparameter optimization, and evaluation of additional architectures like Mask R-CNN and DeepLabV3+.`,
            technologies: ["Python", "PyTorch", "OpenCV", "Albumentations"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/pet_recognition",
            report: "/projects/LELEC2885_Report.pdf",
            image: "/projects/pet_recognition.png",
            featured: false,
            entity: "UCLouvain, LELEC2885 - Image processing and computer vision",
            isGradedBest: true
          },
          {
            id: '8',
            title: "Heart Failures Prediction",
            description: `Heart failure represents a growing concern in healthcare, requiring advanced predictive models for early intervention. 

**Problem Statement:**
Existing methods rely on linear models that fail to capture complex physiological interactions, and limited research integrates both tabular clinical data and medical imaging.

**Innovation:**
This study improves prediction accuracy by combining:
- Advanced feature selection techniques
- Deep learning-based image processing
- Optimized ensemble models

**Technical Achievement:**
A custom **CNN architecture (CNNDoubleConv)** combined with an **SVR model** achieved remarkable results:
- **RMSE reduction**: from 0.08 to 0.0426
- **Performance improvement**: 46.75% enhancement over baseline

**Clinical Insights:**
Key risk factors identified include blood pressure patterns, cholesterol levels, and dietary factors. These findings highlight the significant potential of deep learning approaches for early heart failure detection and preventive healthcare strategies.`,
            technologies: ["Python", "Scikit-learn", "PyTorch", "CV2"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/heart-failures-predictions",
            report: "/projects/LELEC2870_Report.pdf",
            image: "/projects/heart_failures_prediction.png",
            featured: false,
            entity: "UCLouvain, LELEC2870 - Machine learning : regression, deep networks and dimensionality reduction",
            isGradedBest: false
          },
          {
            id: '9',
            title: "Information transfer: Analysis of a network application, the case of KDrive",
            description: `This report presents a comprehensive analysis of **KDrive**, a cloud storage solution provided by [Infomaniak](https://www.infomaniak.com/), with focus on network behavior, security, and ethical practices.

**Research Methodology:**
Using passive measurement techniques across various operational scenarios, we examined:
- DNS resolution patterns and performance
- Network latency characteristics  
- Transport protocol utilization
- Cryptographic implementation analysis

**Key Findings:**

**Infrastructure Ownership:**
Infomaniak maintains complete ownership of its infrastructure, ensuring user data remains secure and is not shared with third parties.

**Geographic Performance:**
- **Swiss-based servers** provide optimal performance within Europe
- **Increased latency** observed outside European regions compared to global providers (Google Drive, OneDrive)
- Trade-off between data sovereignty and global performance

**Security Analysis:**
- **TLS 1.3 encryption** ensures robust data security during transmission
- End-to-end security protocols implemented throughout the platform

**Areas for Improvement:**
Identified optimization opportunities in file-sharing mechanisms and operational delays that could enhance user experience.

**Conclusion:**
This analysis underscores KDrive's strong commitment to ethical cloud storage practices and data security while highlighting areas for performance optimization.`,
            technologies: ["Python", "Pyshark", "Wireshark"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/LINFO1341/Project1",
            report: "/projects/LINFO1341_Report.pdf",
            image: "/projects/kdrive.png",
            featured: false,
            entity: "UCLouvain, LINFO1341 - Computer Networks",
            isGradedBest: false
          },
          {
            id: '10',
            title: "Advanced Algorithms for Optimization",
            description: `I worked on multiple projects applying different optimization techniques to solve combinatorial problems. Each project focused on a specific approach:

**MDD (Multi-valued Decision Diagrams)**: Implemented a decision diagram-based method to model and solve discrete optimization problems efficiently by exploiting problem structure.

**Branch and Bound**: Developed an exact algorithm using bounding techniques to prune the search space and accelerate the resolution of combinatorial problems.

**Constraint Programming**: Formulated optimization problems as constraint satisfaction models, leveraging constraint propagation and search heuristics to find optimal solutions.

**Dynamic Programming**: Designed recursive and memoized solutions for optimization problems, efficiently solving subproblems and reusing computed values to reduce computational complexity.

**Linear Programming**: Modeled and solved problems using linear constraints and objective functions, employing solvers like Simplex or Interior Point methods.

**Local Search**: Implemented heuristic-based algorithms to explore solution spaces iteratively, improving solutions through neighborhood search techniques.

Each project involved algorithm implementation, performance evaluation, and a comparative study of its advantages, limitations, and real-world applicability.`,
            technologies: ["Java", "Maven"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/LINFO2266",
            report: "",
            image: "/projects/advanced_algo.png",
            featured: false,
            entity: "UCLouvain, LINFO2266 - Advanced Algorithms for Optimization",
            isGradedBest: false
          },
          {
            id: '11',
            title: "Ranking Social Networks and Web Pages: Implementing and Evaluating the PageRank Algorithm",
            description: `This comprehensive study focuses on implementing and evaluating ranking algorithms for graph nodes, with particular emphasis on the **PageRank algorithm** with teleportation and personalization vectors.

**Theoretical Foundation:**
The project explores PageRank's mathematical formulation through:
- Probability transition matrix construction
- Steady-state vector computation techniques
- Teleportation mechanisms for handling disconnected components

**Implementation Approaches:**
Two distinct methodologies were developed and compared:

1. **Linear System Resolution**: Direct solving of the PageRank equation system
2. **Power Method**: Iterative eigenvector computation technique

**Performance Analysis:**
Comprehensive benchmarking revealed that **linear system resolution is significantly faster than the Power Method**, with an observed **speed-up factor of approximately 10** in experimental conditions.

**Alternative Algorithms:**
Investigation of **HITS (Hyperlink-Induced Topic Search)** algorithm, which differentiates between hub and authority scores. Analysis highlighted key limitations:
- Query dependency requirements
- Higher computational costs at search time  
- Reduced practicality for large-scale applications compared to PageRank

**Key Conclusions:**
For this project scope, **solving the linear system of equations proves most efficient** for computing PageRank scores. The research concludes with discussions on potential improvements and future research directions in graph-based ranking methodologies.`,
            technologies: ["Python"],
            year: "2025",
            status: "Completed",
            github: "https://forge.uclouvain.be/linfo1114/project",
            report: "/projects/LINFO1114_Report.pdf",
            image: "/projects/ranking.png",
            featured: false,
            entity: "UCLouvain, LINFO1114 - Discrete Mathematics",
            isGradedBest: true
          },
          {
            id: '12',
            title: "Parallelism for Cryptographic Algorithms",
            description: `Advanced study of parallel computing techniques applied to cryptographic algorithm optimization, conducted as part of the **LINFO2241** course at UCLouvain.

**Project Scope:**
- Evaluation and optimization of server system performance
- Analysis under various workloads and configurations
- Implementation of parallel processing techniques for cryptographic operations

**Technical Focus:**
- **SIMD (Single Instruction, Multiple Data)** optimizations
- **CUDA** implementations for GPU acceleration
- Performance benchmarking and scalability analysis`,
            technologies: ["C","Lua", "Python", "SIMD", "CUDA"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/c-bousmar/LINFO2241",
            report: "",
            image: "/projects/parallelism_crypto.png",
            featured: false,
            entity: "UCLouvain, LINFO2241 - Architecture and Performance of Computer Systems",
            isGradedBest: false
          },
          {
            id: '13',
            title: "Connected application to manage teaching resources within the context of a university merger",
            description: `**Bachelor Thesis Project**: Development of a comprehensive application for managing teaching resources during the merger between **University Saint-Louis - Brussels** and **Université catholique de Louvain (UCLouvain)**.

**Project Context:**
- **University Saint-Louis**: Centralized management system using dedicated desktop programs
- **UCLouvain**: Decentralized resource management approach  
- **Challenge**: Create unified solution compatible with both institutional frameworks

**Project Phases:**

**1. Requirements Analysis**
- Stakeholder consultation and requirements gathering
- Development of convincing terms of reference for all involved parties
- Analysis of existing systems and integration challenges

**2. System Design & Architecture**
- Application design tailored to institutional needs
- Architecture planning for scalability and integration
- Technology stack selection and justification

**3. Development & Implementation**
- Development using **OutSystems** low-code platform
- Integration within existing institutional technology ecosystem
- Deployment and testing across both university environments

**Professional Skills Developed:**
- **Project Management**: Leading cross-institutional collaboration
- **Business Analysis**: Requirements gathering and stakeholder management  
- **Technical Implementation**: OutSystems platform expertise

**Impact:**
Successfully delivered a unified solution enabling seamless resource management across both institutions during the critical merger period.`,
            technologies: ["Outsystems", "Project Management", "Business Analysis"],
            year: "2025",
            status: "Completed",
            github: "https://bib.vinci.be/opac_css/index.php?lvl=notice_display&id=315108",
            report: "/projects/b_thesis.pdf",
            image: "/projects/bthesis_graph.png",
            featured: false,
            entity: "Bachelor thesis conducted at Haute École Léonard de Vinci",
            isGradedBest: false
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const displayedProjects = featuredProjects;

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my personal and courses' projects. Each project includes open-source code and high quality report or detailed documentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleCardExpansion(project.id)}
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Ongoing' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Entity and Graded Best Project Line */}
                <div className="mb-3">
                  <p className="text-sm text-gray-500 font-medium">{project.entity}</p>
                  {project.isGradedBest && (
                    <p className="text-sm text-blue-700 font-medium">Graded Best Course's Project</p>
                  )}
                </div>

                <div className="mb-4">
                  {expandedCards.has(project.id) ? (
                    <div className="prose-project">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          a: ({ href, children }) => (
                            <a 
                              href={href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {children}
                            </a>
                          ),
                          p: ({ children }) => <p className="mb-3 text-sm leading-relaxed">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                          ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                          h3: ({ children }) => <h3 className="font-semibold text-gray-900 mt-4 mb-2 text-base">{children}</h3>,
                          h4: ({ children }) => <h4 className="font-medium text-gray-800 mt-3 mb-1 text-sm">{children}</h4>,
                          blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-3">{children}</blockquote>,
                          code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                        }}
                      >
                        {project.description}
                      </ReactMarkdown>
                      <button
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardExpansion(project.id);
                        }}
                      >
                        Show less
                      </button>
                    </div>
                  ) : (
                    <div className="prose-project">
                      <div className="text-sm leading-relaxed text-gray-600">
                        {project.description.length > 150 ? (
                          <span>
                            {project.description.substring(0, 150)}...{' '}
                            <button
                              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium inline"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCardExpansion(project.id);
                              }}
                            >
                              Show more.
                            </button>
                          </span>
                        ) : (
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              a: ({ href, children }) => (
                                <a 
                                  href={href} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {children}
                                </a>
                              ),
                              p: ({ children }) => <span className="block mb-3">{children}</span>,
                              strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                              ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                              li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                              h3: ({ children }) => <h3 className="font-semibold text-gray-900 mt-4 mb-2 text-base">{children}</h3>,
                              h4: ({ children }) => <h4 className="font-medium text-gray-800 mt-3 mb-1 text-sm">{children}</h4>,
                              blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-3">{children}</blockquote>,
                              code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                            }}
                          >
                            {project.description}
                          </ReactMarkdown>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText size={16} />
                        <span className="text-sm">Report</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More/Less Section */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
            id="projects-toggle-section"
          >
            {!showAll && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                {`See ${otherProjects.length} More Projects`}
              </button>
            )}

            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                    {otherProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer text-left"
                        onClick={() => toggleCardExpansion(project.id)}
                      >
                        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === 'Ongoing' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar size={16} />
                              <span>{project.year}</span>
                            </div>
                          </div>

                          {/* Entity and Graded Best Project Line */}
                          <div className="mb-3">
                            <p className="text-sm text-gray-500 font-medium">{project.entity}</p>
                            {project.isGradedBest && (
                              <p className="text-sm text-blue-600 font-medium">Graded Best Course's Project</p>
                            )}
                          </div>

                          <div className="mb-4">
                            {expandedCards.has(project.id) ? (
                              <div className="prose-project">
                                <ReactMarkdown 
                                  remarkPlugins={[remarkGfm]}
                                  rehypePlugins={[rehypeRaw]}
                                  components={{
                                    a: ({ href, children }) => (
                                      <a 
                                        href={href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {children}
                                      </a>
                                    ),
                                    p: ({ children }) => <p className="mb-3 text-sm leading-relaxed">{children}</p>,
                                    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                    ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                                    ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                                    li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                                    h3: ({ children }) => <h3 className="font-semibold text-gray-900 mt-4 mb-2 text-base">{children}</h3>,
                                    h4: ({ children }) => <h4 className="font-medium text-gray-800 mt-3 mb-1 text-sm">{children}</h4>,
                                    blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-3">{children}</blockquote>,
                                    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                                  }}
                                >
                                  {project.description}
                                </ReactMarkdown>
                                <button
                                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleCardExpansion(project.id);
                                  }}
                                >
                                  Show less
                                </button>
                              </div>
                            ) : (
                              <div className="prose-project">
                                <div className="text-sm leading-relaxed text-gray-600">
                                  {project.description.length > 150 ? (
                                    <span>
                                      {project.description.substring(0, 150)}...{' '}
                                      <button
                                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium inline"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleCardExpansion(project.id);
                                        }}
                                      >
                                        Show more.
                                      </button>
                                    </span>
                                  ) : (
                                    <ReactMarkdown 
                                      remarkPlugins={[remarkGfm]}
                                      rehypePlugins={[rehypeRaw]}
                                      components={{
                                        a: ({ href, children }) => (
                                          <a 
                                            href={href} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            {children}
                                          </a>
                                        ),
                                        p: ({ children }) => <span className="block mb-3">{children}</span>,
                                        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                        ul: ({ children }) => <ul className="list-disc list-inside mb-3 space-y-1">{children}</ul>,
                                        ol: ({ children }) => <ol className="list-decimal list-inside mb-3 space-y-1">{children}</ol>,
                                        li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                                        h3: ({ children }) => <h3 className="font-semibold text-gray-900 mt-4 mb-2 text-base">{children}</h3>,
                                        h4: ({ children }) => <h4 className="font-medium text-gray-800 mt-3 mb-1 text-sm">{children}</h4>,
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 mb-3">{children}</blockquote>,
                                        code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
                                      }}
                                    >
                                      {project.description}
                                    </ReactMarkdown>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={16} />
                                  <span className="text-sm">Code</span>
                                </a>
                              )}
                              {project.report && (
                                <a
                                  href={project.report}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <FileText size={16} />
                                  <span className="text-sm">Report</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Show Less button appears after the cards */}
                  <div className="mt-8">
                    <button
                      onClick={() => {
                        // Then scroll up with a slight delay to ensure the collapse starts
                        setTimeout(() => {
                          document.getElementById('projects')?.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }, 0);
                        // First trigger the collapse
                        setTimeout(() => {
                          setShowAll(false);
                        }, 500);
                      }}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
                    >
                      Show Less
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;