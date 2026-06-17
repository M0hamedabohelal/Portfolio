import { useState, useEffect } from 'react';
import { FaCog, FaMoon, FaSun } from 'react-icons/fa';

export const themeColors = [
  { id: 'color-1', hex: '#ec1839', rgb: '236, 24, 57' },
  { id: 'color-2', hex: '#fa5b0f', rgb: '250, 91, 15' },
  { id: 'color-3', hex: '#37b182', rgb: '55, 177, 130' },
  { id: 'color-4', hex: '#1854b4', rgb: '24, 84, 180' },
  { id: 'color-5', hex: '#f021b2', rgb: '240, 33, 178' }
];

export default function StyleSwitcher({ theme, toggleTheme, skinColor, changeSkinColor }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [isOpen]);

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div 
        className="style-switcher-toggler s-icon" 
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle Style Switcher"
      >
        <FaCog className={isOpen ? 'fa-spin' : ''} />
      </div>
      <div 
        className="day-night s-icon" 
        onClick={toggleTheme}
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {themeColors.map((color) => (
          <span 
            key={color.id} 
            className={`color-item ${skinColor.hex === color.hex ? 'active' : ''}`}
            style={{ backgroundColor: color.hex, borderColor: skinColor.hex === color.hex ? '#fff' : 'transparent' }}
            onClick={() => changeSkinColor(color)}
          />
        ))}
      </div>
    </div>
  );
}
