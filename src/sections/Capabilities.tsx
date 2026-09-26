import { capabilities } from '../data/siteData';
import './Capabilities.css';

export function Capabilities() {
  return (
    <section className="section capabilities">
      <div className="container">
        <div className="reveal">
          <span className="section__eyebrow">Operational Reliability</span>
          <h2 className="section__title">Transport & Fleet Advantages</h2>
        </div>
        <div className="capabilities__grid">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const staggerClass = `stagger-${(index % 3) + 1}`;
            return (
              <div key={cap.title} className={`capability-item reveal ${staggerClass}`}>
                <div className="capability-item__icon">
                  <Icon size={24} />
                </div>
                <h3 className="capability-item__title">{cap.title}</h3>
                <p className="capability-item__description">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
