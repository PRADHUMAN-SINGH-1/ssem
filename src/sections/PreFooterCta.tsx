import { ShieldCheck, Truck, Clock, ArrowRight, Mail } from 'lucide-react';
import { contact } from '../data/siteData';
import './PreFooterCta.css';

export function PreFooterCta() {
  return (
    <section className="pre-footer-cta">
      <div className="container">
        <div className="pre-footer-cta__box reveal">
          <div className="pre-footer-cta__content">
            <span className="pre-footer-cta__eyebrow">
              Commercial Fleet Mobilization & Transport Contracts
            </span>
            <h2 className="pre-footer-cta__title">
              Need Dedicated Truck Fleet or Bulk Construction Material Haulage?
            </h2>
            <p className="pre-footer-cta__description">
              Shree Shyam Earthmovers LLP provides high-volume commercial truck fleets,
              highway corridor raw material loops, and heavy machinery mobilization
              with round-the-clock dispatch and strict safety adherence.
            </p>
            <div className="pre-footer-cta__guarantees">
              <div className="guarantee-item">
                <ShieldCheck size={18} className="guarantee-item__icon" />
                <span>100% Transit & Axle Compliant</span>
              </div>
              <div className="guarantee-item">
                <Truck size={18} className="guarantee-item__icon" />
                <span>Modern Multi-Axle Fleet</span>
              </div>
              <div className="guarantee-item">
                <Clock size={18} className="guarantee-item__icon" />
                <span>24/7 Turnaround Discipline</span>
              </div>
            </div>
          </div>
          <div className="pre-footer-cta__actions">
            <a href="#contact" className="btn btn--primary pre-footer-cta__btn">
              <span>Initiate Project Discussion</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn btn--secondary pre-footer-cta__btn-sec"
            >
              <Mail size={18} />
              <span>{contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
