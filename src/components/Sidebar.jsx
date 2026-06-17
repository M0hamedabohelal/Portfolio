import { useState } from 'react';
import { FaHome, FaUser, FaList, FaBriefcase, FaComments } from 'react-icons/fa';

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
          <a href="#home" onClick={() => onLinkClick('home')}>
            <span>M</span>o
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
