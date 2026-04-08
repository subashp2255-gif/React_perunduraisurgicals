import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <nav id="topnav" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={closeNav}>
          <img
            src={`${import.meta.env.BASE_URL}PS FULL LOGO.png`}
            alt="Perundurai Surgicals"
            className="navbar__logo-img"
          />
        </a>

        {/* Nav Links */}
        <ul className={`navbar__links ${navOpen ? 'navbar__links--open' : ''}`} id="navLinks">
          <li>
            <a href="#hero" className="navbar__link active" onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="navbar__link" onClick={closeNav}>
              About Us
            </a>
          </li>
          <li>
            <a href="#products" className="navbar__link" onClick={closeNav}>
              Products
            </a>
          </li>
          <li>
            <a href="#services" className="navbar__link" onClick={closeNav}>
              Services
            </a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="navbar__actions">
          <a href="tel:+919865271371" className="navbar__contact-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            <span>Contact</span>
          </a>

          <a href="#contact" className="navbar__cta" onClick={closeNav}>
            Get Quote
          </a>

          <button
            type="button"
            className={`navbar__hamburger ${navOpen ? 'navbar__hamburger--active' : ''}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </div>
    </nav>
  );
}
