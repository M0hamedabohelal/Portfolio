import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home({ handleNavClick }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["MERN Stack Developer", "Software Engineer", "React Specialist", "Node.js Expert"];
  
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="home section active" id="home">
      <div className="container">
        <div className="row">
          <motion.div 
            className="home-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="hello">
              Hello, my name is <span className="name">Mohamed Abohelal</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">{text}</span>
              <span className="typed-cursor">|</span>
            </h3>
            <p>
              Full-stack web developer specialized in MERN stack. Skilled in building responsive front-end interfaces with 
              React and scalable back-end systems using Node.js and Express.
            </p>
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
          </motion.div>
          <motion.div 
            className="home-img padd-15"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="home-img-inner">
              <img src="/image/me.jpg" alt="Mohamed Abohelal" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
