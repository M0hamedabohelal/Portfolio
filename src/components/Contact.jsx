import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [result, setResult] = useState('');

  const contactItems = [
    {
      icon: <FaPhone />,
      title: 'Call',
      desc: '+20 1093122064',
      href: 'tel:+201093122064'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      desc: 'Tanta, Egypt'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      desc: 'mohamed.abohelal.eng@gmail.com',
      href: 'mailto:mohamed.abohelal.eng@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      desc: 'Mohamed Abohelal',
      href: 'https://www.linkedin.com/in/mohamed-abohelal'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    formData.append('access_key', '93b9a66c-de26-4f5c-8808-54519cb7264b');
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult('Message sent successfully! I\'ll get back to you soon.');
        e.target.reset();
      } else {
        setStatus('error');
        setResult(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setResult('Network error. Please check your connection and try again.');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        
        <h3 className="contact-title padd-15">Have you any Question ?</h3>
        <h4 className="contact-sub-title padd-15">I'm at your Service</h4>
        
        <div className="row">
          {contactItems.map((item, idx) => (
            <div className="contact-info-item padd-15" key={idx}>
              <div className="icon">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>
                {item.href ? (
                  <a 
                    href={item.href} 
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.desc}
                  </a>
                ) : (
                  item.desc
                )}
              </p>
            </div>
          ))}
        </div>

        <h3 className="contact-title padd-15">Send Me an Email</h3>
        
        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              {/* Anti-spam botcheck */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Name" 
                      minLength="3"
                      title="Name must be at least 3 characters"
                      required 
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="Email" 
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="subject" 
                      className="form-control" 
                      placeholder="Subject" 
                      minLength="4"
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      className="form-control" 
                      placeholder="Message" 
                      minLength="10"
                      title="Message must be at least 10 characters"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button 
                    type="submit" 
                    className={`btn contact-submit-btn ${status === 'loading' ? 'loading' : ''}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="btn-spinner"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="icon-btn-margin" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Result message */}
                  {status === 'success' && (
                    <div className="form-result success">
                      <FaCheckCircle />
                      <span>{result}</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="form-result error">
                      <FaTimesCircle />
                      <span>{result}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
