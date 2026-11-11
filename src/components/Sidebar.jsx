import { useState } from 'react';
import { FaHome, FaUser, FaList, FaBriefcase, FaComments } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Sidebar({ activeSection, handleNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'services', label: 'Services', icon: <FaList /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FaComments /> }
  ];

  const onLinkClick = (id) => {
    handleNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      <div className={`aside ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <a href="#home" onClick={() => onLinkClick('home')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--skin-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
              <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.45)' }} />
            </div>
          </a>
        </div>
        <div 
          className={`nav-toggler ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </div>
        <ul className="nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(item.id);
                }}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile nav toggler button placed outside when sidebar is closed */}
      <div 
        className={`mobile-nav-toggler ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </div>
    </>
  );
}
