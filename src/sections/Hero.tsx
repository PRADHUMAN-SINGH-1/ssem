import { useState, useRef } from 'react';
import { hero } from '../data/siteData';
import './Hero.css';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="hero">
      {/* Background Media: Poster fallback & Video architecture */}
      <div className="hero__media-wrapper">
        <img
          src={hero.posterImage}
          alt="SSEM Commercial Transport Truck and Highway Logistics"
          className={`hero__poster ${videoLoaded ? 'hero__poster--hidden' : ''}`}
          loading="eager"
        />
        <video
          ref={videoRef}
          className={`hero__video ${videoLoaded ? 'hero__video--active' : ''}`}
          poster={hero.posterImage}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      {/* Hero Content: Readability on left, truck dominant on right */}
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__eyebrow-wrap">
            <span className="hero__eyebrow-accent">—+</span>
            <span className="hero__eyebrow-text">{hero.eyebrow}</span>
          </div>

          <h1 className="hero__headline">
            {hero.headline.split('\n').map((line, i) => (
              <span key={i} className="hero__headline-line">
                {line}
                {i < hero.headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn hero__btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn hero__btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
