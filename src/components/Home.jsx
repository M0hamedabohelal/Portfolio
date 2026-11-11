import { useState, useEffect } from 'react';

const WORDS = ["Full Stack Developer", "MERN Stack Developer", "React Specialist", "Nest.js Developer"];

export default function Home({ handleNavClick }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % WORDS.length;
      const fullText = WORDS[i];

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
          <div className="home-info home-info-animate">
            <h3 className="hello">
              Hello, my name is <span className="name">Mohamed Abohelal</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">{text}</span>
              <span className="typed-cursor">|</span>
            </h3>
            <p>
              Full-stack web developer specializing in the MERN stack, React.js, and modern frontend architectures. 
              Experienced in building scalable back-end systems using Node.js and Nest.js. Focused on performance 
              optimization, component reusability, and delivering pixel-perfect, user-centric web applications.
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
          </div>
          <div className="home-img padd-15 home-img-animate">
            <div className="home-img-inner">
              <img src="/image/profile.webp" alt="Mohamed Abohelal" loading="eager" fetchpriority="high" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}