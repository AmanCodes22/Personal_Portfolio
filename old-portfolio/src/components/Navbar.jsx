import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          <Link to="/" className="logo">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>

            <button className="icon-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <button className="icon-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="icon-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/skills" onClick={toggleMenu}>Skills</Link>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
