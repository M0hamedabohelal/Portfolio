import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCode } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Fixora (Craftsman-Matching Platform)',
      category: 'React.js, Firebase, Tailwind CSS',
      image: 'image/fixora.png',
      shortDesc: 'Developed a modern, interactive web application as a graduation project for the DEPI initiative in collaboration with SkillsDynamix.',
      fullDesc: 'Engineered a highly responsive UI using React.js (Vite), Tailwind CSS, and HeroUI, integrated with Firebase for reliable backend services and real-time authentication. Implemented interactive location-based features using Leaflet and enhanced user experience with smooth micro-animations via Framer Motion and React Spring.',
      tags: ['React.js (Vite)', 'Tailwind CSS', 'HeroUI', 'Firebase', 'Leaflet', 'Framer Motion'],
      features: [
        'Real-time Authentication via Firebase.',
        'Location-based Craftsman Matching with Leaflet.',
        'Responsive UI with Tailwind CSS and HeroUI.',
        'Micro-animations for Enhanced UX.'
      ],
      github: 'https://github.com/M0hamedabohelal/Fixora',
      demo: 'https://fixora-rho.vercel.app/'
    },
    {
      id: 2,
      title: 'Skills Upscale (CV Analyzer)',
      category: 'React.js',
      image: 'image/img1.png',
      shortDesc: 'Developed a React-based frontend web application designed to analyze CVs.',
      fullDesc: 'Skills Upscale is a React-based frontend web application designed to analyze CVs. It implements a fully responsive user interface utilizing modern UI/UX principles and optimized state management to provide seamless, real-time user feedback. It helps users discover their skill gaps and builds an optimal roadmap to career alignment.',
      tags: ['React.js', 'Framer Motion', 'Bootstrap', 'State Management', 'Responsive Design'],
      features: [
        'CV Analysis (Extract structured data, technical, and soft skills from resumes with high accuracy).',
        'Skill Gap Engine (Compare your skills with target job requirements and categorize them with professional accuracy).',
        'Personalized Roadmap (Generate a personalized learning path to bridge skill gaps based on market demand).',
      ],
      github: 'https://github.com/M0hamedabohelal/Skills-Upscale',
      demo: 'https://m0hamedabohelal.github.io/Skills-Upscale/'
    },
    {
      id: 3,
      title: 'Interactive Fiqh Book (Al-Fiqh Al-Muyassar)',
      category: 'React.js',
      image: 'image/img2.png',
      shortDesc: 'Designed and developed a highly interactive and visually appealing digital version of "Al-Fiqh Al-Muyassar".',
      fullDesc: 'Designed and developed a highly interactive and visually appealing digital version of "Al-Fiqh Al-Muyassar" using React.js. It features a responsive component design, smooth navigation, and an intuitive user interface to deliver an engaging reading experience of Islamic jurisprudence across all devices.',
      tags: ['React.js', 'Vite', 'Fuse.js', 'Bootstrap', 'Framer Motion', 'YouTube API'],
      features: [
        'Simple & Modern Explanation (شرح ميسر لأحكام الفقه الإسلامي).',
        'Step-by-step Fiqh issues monitoring (متابعة المسائل الفقهية خطوة بخطوة).',
        'Book PDF Download option (تحميل ملف الكتاب).',
        'Advanced Search and Glossary engine for rapid Islamic jurisprudence lookup.'
      ],
      github: 'https://github.com/M0hamedabohelal/MO-Fiqh',
      demo: 'https://m0hamedabohelal.github.io/MO-Fiqh/'
    }
  ];

  return (
    <section className="portfolio section" id="portfolio" style={{ zIndex: selectedProject ? 999 : 1 }}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Featured Projects :</h2>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="row justify-content-center">
          {projects.map((project) => (
            <motion.div 
              className="portfolio-item padd-15" 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              style={{ flex: '0 0 50%', maxWidth: '50%' }}
            >
              <div 
                className="portfolio-item-inner shadow-dark"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-img">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <span className="view-details-btn">View Details</span>
                  </div>
                </div>
                <div className="portfolio-info-box">
                  <h4>{project.title}</h4>
                  <p>{project.shortDesc}</p>
                  <div className="portfolio-tags">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="portfolio-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="portfolio-modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>
              
              <div className="modal-grid">
                <div className="modal-img-container">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="modal-info">
                  <h3>{selectedProject.title}</h3>
                  <span className="modal-category">{selectedProject.category.toUpperCase()}</span>
                  <p className="modal-description">{selectedProject.fullDesc}</p>
                  
                  <h4>Key Features:</h4>
                  <ul className="modal-features">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                  
                  <h4>Technologies Used:</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag"><FaCode className="tag-icon" /> {tag}</span>
                    ))}
                  </div>
                  
                  <div className="modal-actions">
                    {selectedProject.demo !== '#' && (
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {selectedProject.github !== '#' && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                        <FaGithub /> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
