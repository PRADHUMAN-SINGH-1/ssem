import { Mail, MapPin, Clock, ArrowUp, ShieldCheck, Award, Truck, CheckCircle2 } from 'lucide-react';
import { company, contact, navigation, services, footer as footerData } from '../data/siteData';
import logo from '../assets/logo-white.png';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Tier 1: Main 4-Column Corporate Index */}
      <div className="container footer__inner">
        {/* Col 1: Corporate Profile */}
        <div className="footer__col footer__col--brand">
          <a href="#" className="footer__logo-wrap" aria-label={`${company.name} — Home`}>
            <img
              src={logo}
              alt={`${company.name} — ${company.fullName}`}
              className="footer__logo"
            />
          </a>
          <h3 className="footer__company-name">{company.fullName}</h3>
          <p className="footer__description">{footerData.description}</p>
          <div className="footer__llp-tag">
            <span>Registered LLP Entity | Heavy Fleet Transport & Infrastructure Haulage</span>
          </div>
        </div>

        {/* Col 2: Core Capabilities */}
        <div className="footer__col">
          <h4 className="footer__heading">Transport Verticals</h4>
          <ul className="footer__list">
            {services.map((service) => (
              <li key={service.title}>
                <a href="#capabilities" className="footer__link">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <nav aria-label="Footer navigation">
            <ul className="footer__list">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Col 4: Registered Office */}
        <div className="footer__col footer__col--office">
          <h4 className="footer__heading">Registered Headquarters</h4>
          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <MapPin size={18} className="footer__contact-icon" />
              <div className="footer__contact-content">
                <span className="footer__contact-label">Registered Office</span>
                <span className="footer__contact-value">{contact.address}</span>
              </div>
            </div>
            <div className="footer__contact-item">
              <Mail size={18} className="footer__contact-icon" />
              <div className="footer__contact-content">
                <span className="footer__contact-label">Official Correspondence</span>
                <a href={`mailto:${contact.email}`} className="footer__contact-value">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="footer__contact-item">
              <Clock size={18} className="footer__contact-icon" />
              <div className="footer__contact-content">
                <span className="footer__contact-label">Working Hours</span>
                <span className="footer__contact-value">Monday – Saturday: 08:00 AM – 07:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Standards & Operational Badges */}
      <div className="footer__standards">
        <div className="container footer__standards-inner">
          <div className="standard-badge">
            <ShieldCheck size={16} />
            <span>Motor Transport & Road Safety Compliant</span>
          </div>
          <div className="standard-badge">
            <Award size={16} />
            <span>MoRTH & Highway Spec Haulage</span>
          </div>
          <div className="standard-badge">
            <Truck size={16} />
            <span>Active GPS-Tracked Truck Fleet</span>
          </div>
          <div className="standard-badge">
            <CheckCircle2 size={16} />
            <span>Certified Axle-Load & Transit Discipline</span>
          </div>
        </div>
      </div>

      {/* Tier 3: Bottom Legal Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-left">
            <span>{footerData.copyright}</span>
            <span className="footer__bottom-divider">•</span>
            <span>Registered in Madhya Pradesh, India</span>
          </div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Engagement</a>
            <button
              onClick={scrollToTop}
              className="footer__back-to-top"
              aria-label="Back to top"
              type="button"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
