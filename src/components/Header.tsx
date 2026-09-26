import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { company, navigation } from '../data/siteData';
import logo from '../assets/logo-white.png';
import './Header.css';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 150;
      if (window.scrollY < 250) {
        setActiveNav('Home');
        return;
      }
      const sectionMap = [
        { id: 'contact', label: 'Contact' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'projects', label: 'Projects' },
        { id: 'capabilities', label: 'Capabilities' },
        { id: 'about', label: 'About' },
      ];
      for (const section of sectionMap) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNav(section.label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${mobileOpen ? 'header--menu-open' : ''}`}>
      <div className="header__inner container">
        <a href="#" className="header__logo" aria-label={`${company.name} — Home`}>
          <img src={logo} alt={`${company.name} logo`} />
        </a>

        <nav className="header__nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`header__link ${isActive ? 'header__link--active' : ''}`}
                onClick={() => setActiveNav(item.label)}
              >
                <span>{item.label}</span>
                {isActive && <span className="header__active-indicator" />}
              </a>
            );
          })}
        </nav>

        <div className="header__right">
          <a href="#contact" className="header__cta-btn">
            Get in Touch →
          </a>
          <button
            className={`header__hamburger ${mobileOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mobile-menu__link ${activeNav === item.label ? 'mobile-menu__link--active' : ''}`}
              onClick={() => {
                setActiveNav(item.label);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="header__cta-btn header__cta-btn--mobile"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch →
          </a>
        </nav>
      </div>
    </header>
  );
}
