import { Mail, MapPin, Clock } from 'lucide-react';
import { contact } from '../data/siteData';
import { ContactForm } from '../components/ContactForm';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <span className="section__eyebrow">Fleet Booking & Logistics Desk</span>
          <h2 className="section__title">Transport Inquiries & Headquarters</h2>
          <p className="contact__description">
            Direct corporate desk for bulk material transport contracts, dedicated tipper fleets,
            and highway infrastructure haulage across India.
          </p>

          <div className="contact__cards">
            {/* Headquarters Card */}
            <div className="contact__block">
              <div className="contact__block-icon">
                <MapPin size={22} />
              </div>
              <div className="contact__block-body">
                <span className="contact__block-label">Registered Corporate Office & Fleet Hub</span>
                <p className="contact__block-address">{contact.address}</p>
              </div>
            </div>

            {/* Electronic Mail Desk */}
            <div className="contact__block">
              <div className="contact__block-icon">
                <Mail size={22} />
              </div>
              <div className="contact__block-body">
                <span className="contact__block-label">Transport Contracts & Fleet Booking Desk</span>
                <a href={`mailto:${contact.email}`} className="contact__block-email">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="contact__block">
              <div className="contact__block-icon">
                <Clock size={22} />
              </div>
              <div className="contact__block-body">
                <span className="contact__block-label">Fleet Dispatch & Operations</span>
                <span className="contact__block-time">
                  Monday – Saturday: 08:00 AM – 07:00 PM IST
                </span>
                <div className="contact__highlight-247">
                  <span className="contact__pulse-dot" />
                  <span className="contact__highlight-text">
                    <strong>24/7 Operations:</strong> Active per project contract schedules
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form" className="contact__form-col reveal stagger-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
