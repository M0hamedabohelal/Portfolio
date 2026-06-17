import { motion } from 'framer-motion';
import { FaNodeJs, FaCalendar, FaDownload, FaAward, FaCertificate, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

export default function About({ handleNavClick }) {
  const personalInfo = [
    { label: 'Birthday', value: '25 May 2005' },
    { label: 'Age', value: '20' },
    { label: 'Degree', value: 'Bachelor of Computer Science' },
    { label: 'City', value: 'Cairo, Egypt' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Phone', value: '+20 109 312 2064', href: 'tel:+201093122064' },
    { label: 'Email', value: 'mohamed.abohelal.eng@gmail.com', href: 'mailto:mohamed.abohelal.eng@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/mohamed-abohelal', href: 'https://www.linkedin.com/in/mohamed-abohelal' },
    { label: 'GitHub', value: 'github.com/M0hamedabohelal', href: 'https://github.com/M0hamedabohelal' }
  ];

  const nodeSatellites = [
    { name: 'Express', img: '/image/ex.png' },
    { name: 'MongoDB', img: '/image/mongo.png' },
    { name: 'Docker', img: '/image/doc.png' },
    { name: 'MySQL', img: '/image/my.png' }
  ];

  const reactSatellites = [
    { name: 'JS', img: '/image/js.png' },
    { name: 'TS', img: '/image/ts.png' },
    { name: 'Tailwind', img: '/image/Tail.png' },
    { name: 'Bootstrap', img: '/image/boots.jpeg' },
    { name: 'HTML/CSS', img: '/image/react.png' }
  ];

  const certifications = [
    { title: 'React Frontend Web Developer', provider: 'Digital Egypt Pioneers Initiative (DEPI)', date: 'Nov 2025 - Present' },
    { title: 'Web Design (HTML, CSS, JS, Bootstrap)', provider: 'National Telecommunication Institute (NTI)', date: 'Nov 2025 - Jan 2026' },
    { title: 'Fundamentals of Programming (C++)', provider: 'Route Academy', date: 'May 2024 - Sep 2024' },
    { title: 'Team Leadership', provider: 'Udemy', date: 'Feb 2024' },
    { title: 'IT Infrastructure (CCNA, MCSA, Firewall)', provider: 'IT GATE Academy', date: 'Jul 2024 - Dec 2024' }
  ];

  const activities = [
    {
      title: 'Tanta Vibe Coding Hackathon 2025 — Finalist',
      desc: 'Ranked in the Top 10 out of 120+ projects with project "Basira". Honored by the President of Tanta University and the Dean of FCI for excellence in pitching and technical innovation.',
      date: '3–4 Dec 2025',
      featured: true
    },
    {
      title: 'Training Workshop - Quality Assurance of Education',
      desc: 'Tanta University in collaboration with NAQAAE.',
      date: '18 Sep 2025',
      featured: false
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Mohamed Abohelal, a passionate <span>MERN Stack Web Developer</span></h3>
                <p>
                  Full-stack web developer specialized in MERN stack. Skilled in building responsive front-end interfaces with 
                  React and scalable back-end systems using Node.js and Express. Passionate about performance optimization, 
                  clean architecture, and delivering user-focused applications.
                </p>
              </div>
            </div>
            
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  {personalInfo.map((info, idx) => (
                    <div className="info-item padd-15" key={idx}>
                      <p>
                        {info.label} : {' '}
                        {info.href ? (
                          <span>
                            <a href={info.href} target="_blank" rel="noopener noreferrer">
                              {info.value}
                            </a>
                          </span>
                        ) : (
                          <span>{info.value}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="row">
                  <div className="buttons padd-15">
                    <a href="/Mohamed-Abohelal-CV.pdf" download className="btn">
                      <FaDownload className="icon-btn-margin" /> Download CV
                    </a>
                    <a 
                      href="#contact" 
                      className="btn hire-me"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('contact');
                      }}
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbit Skills Section */}
            <div className="row orbit-row">
              {/* Node.js Orbit */}
              <div className="skill-orbit padd-15">
                <div className="orbit-wrapper">
                  <div className="center-icon">
                    <FaNodeJs />
                    <span>Node.js</span>
                  </div>
                  <div className="orbit-spinner">
                    {nodeSatellites.map((sat, idx) => (
                      <div 
                        key={sat.name} 
                        className={`satellite orbit-${idx} total-${nodeSatellites.length}`}
                        style={{ 
                          '--total': nodeSatellites.length, 
                          '--i': idx 
                        }}
                      >
                        <img src={sat.img} alt={sat.name} />
                        <span>{sat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* React Orbit */}
              <div className="skill-orbit padd-15">
                <div className="orbit-wrapper">
                  <div className="center-icon next-core">
                    <img src="/image/react.png" alt="React" />
                    <span>React</span>
                  </div>
                  <div className="orbit-spinner">
                    {reactSatellites.map((sat, idx) => (
                      <div 
                        key={sat.name} 
                        className={`satellite orbit-${idx} total-${reactSatellites.length}`}
                        style={{ 
                          '--total': reactSatellites.length, 
                          '--i': idx 
                        }}
                      >
                        <img src={sat.img} alt={sat.name} />
                        <span>{sat.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education and Experience Redesign */}
            <div className="row mt-5">
              {/* Education */}
              <div className="education padd-15 col-12 col-lg-6">
                <h3 className="section-subtitle"><FaGraduationCap className="sub-icon" /> Education</h3>
                <div className="timeline-cards">
                  <motion.div 
                    className="timeline-card shadow-dark"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card-header-badge">2023 - 2027</div>
                    <h4 className="card-title">Bachelor of Computer Science</h4>
                    <span className="card-subtitle">Tanta University — Computer Science Department</span>
                    <div className="card-gpa">Grade: <strong>Very Good</strong> | GPA: <strong>3.1</strong></div>
                    <p className="card-desc">Faculty of Computers and Information. Deep study of algorithms, data structures, database design, software engineering, and web technology.</p>
                  </motion.div>
                </div>
              </div>

              {/* Experience */}
              <div className="excperience padd-15 col-12 col-lg-6">
                <h3 className="section-subtitle"><FaBriefcase className="sub-icon" /> Experience</h3>
                <div className="timeline-cards">
                  <motion.div 
                    className="timeline-card shadow-dark"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card-header-badge">Nov 2025 - Present</div>
                    <h4 className="card-title">React Frontend Web Developer</h4>
                    <span className="card-subtitle">Digital Egypt Pioneers Initiative (DEPI)</span>
                    <ul className="card-list">
                      <li>Completed 120+ hours of training in React, TypeScript, and modern UI architecture.</li>
                      <li>Integrated 15+ RESTful API endpoints and built 10+ reusable components (reducing dev time by 25%).</li>
                      <li>Collaborated in an Agile team of 5 members using Git/GitHub.</li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    className="timeline-card shadow-dark mt-4"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="card-header-badge">Nov 2025 - Jan 2026</div>
                    <h4 className="card-title">Web Designer Intern</h4>
                    <span className="card-subtitle">National Telecommunication Institute (NTI), Tanta</span>
                    <ul className="card-list">
                      <li>Designed and deployed 4+ responsive web pages using HTML, CSS, JS, and Bootstrap.</li>
                      <li>Converted 10+ UI/UX concepts into pixel-perfect, interactive interfaces.</li>
                      <li>Boosted page load speeds by 20% through optimization and clean code.</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Certifications Redesign - Side-by-side Grid */}
            <div className="row mt-5">
              <div className="padd-15 col-12">
                <h3 className="section-subtitle"><FaCertificate className="sub-icon" /> Certifications</h3>
                <div className="certifications-grid">
                  {certifications.map((cert, idx) => (
                    <motion.div 
                      className="cert-card shadow-dark" 
                      key={idx}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="cert-icon-wrapper">
                        <FaCertificate />
                      </div>
                      <div className="cert-info">
                        <span className="cert-date">{cert.date}</span>
                        <h4>{cert.title}</h4>
                        <p>{cert.provider}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Extracurricular Activities Redesign */}
            <div className="row mt-5 mb-4">
              <div className="padd-15 col-12">
                <h3 className="section-subtitle"><FaAward className="sub-icon" /> Extracurricular Activities</h3>
                <div className="activities-grid">
                  {activities.map((act, idx) => (
                    <motion.div 
                      className={`activity-card shadow-dark ${act.featured ? 'featured' : ''}`}
                      key={idx}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="activity-icon-wrapper">
                        {act.featured ? <FaTrophy className="gold-trophy" /> : <FaAward />}
                      </div>
                      <div className="activity-info">
                        <div className="activity-header">
                          <h4>{act.title}</h4>
                          <span className="activity-date">{act.date}</span>
                        </div>
                        <p>{act.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
