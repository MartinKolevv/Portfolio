import { useState } from 'react';

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 1000,
  background: 'rgba(15, 15, 35, 0.95)',
  backdropFilter: 'blur(10px)',
  minHeight: '60px',
  padding: '0.5rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
  fontFamily: 'Orbitron, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '1rem',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  borderBottom: '1px solid rgba(108, 99, 255, 0.2)',
};

const linkStyle = {
  color: '#e0e0e0',
  textDecoration: 'none',
  letterSpacing: '1px',
  padding: '0.5rem 1.2rem',
  borderRadius: '1.5rem',
  transition: 'all 0.3s ease',
  position: 'relative',
  fontWeight: '600',
  background: 'transparent',
  border: '2px solid transparent',
};

const linkHoverStyle = {
  ...linkStyle,
  color: '#6c63ff',
  background: 'rgba(108, 99, 255, 0.05)',
  border: '2px solid rgba(108, 99, 255, 0.2)',
  transform: 'translateY(-2px)',
  boxShadow: '0 4px 12px rgba(108, 99, 255, 0.15)',
};

function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const getLinkStyle = (linkName) => {
    return hoveredLink === linkName ? linkHoverStyle : linkStyle;
  };

  return (
    <nav style={navStyle}>
      <a 
        href="#" 
        style={getLinkStyle('home')}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </a>
      <a 
        href="#about" 
        style={getLinkStyle('about')}
        onMouseEnter={() => handleMouseEnter('about')}
        onMouseLeave={handleMouseLeave}
      >
        About
      </a>
      <a 
        href="#projects" 
        style={getLinkStyle('projects')}
        onMouseEnter={() => handleMouseEnter('projects')}
        onMouseLeave={handleMouseLeave}
      >
        Projects
      </a>
      <a 
        href="#contact" 
        style={getLinkStyle('contact')}
        onMouseEnter={() => handleMouseEnter('contact')}
        onMouseLeave={handleMouseLeave}
      >
        Contact
      </a>
    </nav>
  );
}

export default NavBar; 