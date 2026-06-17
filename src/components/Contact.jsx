import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
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
      desc: 'Cairo, Egypt'
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
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
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
            <form 
              action="https://send.pageclip.co/53fn9pNKwXjjx7b4elNne4cezf2hNRvf" 
              className="pageclip-form" 
              method="post"
            >
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Name" 
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
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn pageclip-form__submit">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
