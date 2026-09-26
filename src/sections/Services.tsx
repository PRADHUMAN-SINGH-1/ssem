import { services } from '../data/siteData';
import type { Service } from '../data/siteData';
import './Services.css';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const staggerClass = `stagger-${(index % 3) + 1}`;
  return (
    <article className={`service-card reveal ${staggerClass}`}>
      <div className="service-card__image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          className="service-card__image"
          loading="lazy"
        />
      </div>
      <div className="service-card__body">
        <div className="service-card__icon">
          <Icon size={24} />
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.description}</p>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="capabilities" className="section section--alt services">
      <div className="container">
        <div className="reveal">
          <span className="section__eyebrow">Comprehensive Fleet Operations</span>
          <h2 className="section__title">Full Transport Services</h2>
          <p className="section__description">
            Dedicated commercial transport solutions covering bulk aggregate haulage,
            road construction supply lines, low-bed heavy plant mobilization, and long-haul freight.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
