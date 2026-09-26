import { about } from '../data/siteData';
import { useCountUp } from '../hooks/useCountUp';
import './About.css';

export function About() {
  const { count: gpsCount, elementRef: gpsRef } = useCountUp(100, { duration: 1500 });

  return (
    <section id="about" className="about-section">
      <div className="about-split">
        <div className="about-split__content">
          <div className="about-split__inner reveal">
            <span className="section__eyebrow">{about.eyebrow}</span>
            <h2 className="about-split__title">{about.title}</h2>
            <div className="about-split__text">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="about-split__accent" />
          </div>
        </div>

        <div className="about-split__media reveal stagger-1">
          <video
            src="/videos/about-truck.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="about-split__video"
          />
          <div className="about-split__badge" ref={gpsRef}>
            <span className="about-split__badge-number">{gpsCount}%</span>
            <span className="about-split__badge-label">GPS-Monitored Fleet Transit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
