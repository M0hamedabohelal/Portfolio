import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      desc: 'Building fast, responsive, and secure websites and web applications using modern technologies.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Frontend Design',
      desc: 'Creating intuitive, beautiful, and accessible user interfaces using React, Next.js, and Tailwind CSS.'
    },
    {
      icon: <FaServer />,
      title: 'Backend API',
      desc: 'Developing robust, scalable APIs and microservices using Node.js, Express, linked with SQL/NoSQL databases.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <motion.div 
              className="service-item padd-15" 
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="service-item-inner">
                <div className="icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
