import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import './Footer.css';

function Footer({ theme }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-inner">
          <p className="footer-text">
            © 2025 Aman Portfolio. Built with React.
          </p>

          <div className="footer-icons">
            <a
              href="https://github.com/AmanCodes22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/aman-singhal22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://instagram.com/agrawal_aman.22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="mailto:amansinghal1252@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
