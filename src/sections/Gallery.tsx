import { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, MapPin, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { gallery } from '../data/siteData';
import './Gallery.css';

type FilterCategory = 'all' | 'fleet' | 'aggregates' | 'dispatch';

const filters: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: 'All Operations' },
  { key: 'fleet', label: 'Commercial Tipper Fleet' },
  { key: 'aggregates', label: 'Aggregate & Material Feeds' },
  { key: 'dispatch', label: 'Transit Hubs & Staging' },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [filteredItems.length, selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [filteredItems.length, selectedIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="gallery-header reveal">
          <div className="gallery-header__text">
            <span className="section__eyebrow">Fleet & Field Operations</span>
            <h2 className="section__title">Commercial Fleet & Operations Gallery</h2>
            <p className="section__description">
              Photographic documentation of our commercial tippers, aggregate handling
              facilities, corridor transport, and material logistics in active execution.
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery category filters">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.key}
                className={`gallery-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(f.key);
                  setSelectedIndex(null);
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedIndex(index)}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndex(index);
                }
              }}
            >
              <div className="gallery-card__image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-card__image"
                  loading="lazy"
                />
                <div className="gallery-card__overlay">
                  <span className="gallery-card__zoom-btn" title="View Full Image">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="gallery-card__badge">
                  <Layers size={11} />
                  <span>{item.categoryLabel}</span>
                </div>
              </div>

              <div className="gallery-card__details">
                <div className="gallery-card__location">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>
                <h3 className="gallery-card__title">{item.title}</h3>
                <p className="gallery-card__caption">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* High-Resolution Interactive Lightbox Modal */}
      {activeItem && selectedIndex !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="gallery-modal__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="gallery-modal__top-nav">
              <span className="gallery-modal__counter">
                {selectedIndex + 1} / {filteredItems.length}
              </span>
              <span className="gallery-modal__badge">{activeItem.categoryLabel}</span>
              <button
                className="gallery-modal__close"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close preview"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stage with Navigation Arrows */}
            <div className="gallery-modal__stage">
              <button
                className="gallery-modal__nav-btn gallery-modal__nav-btn--prev"
                onClick={handlePrev}
                aria-label="Previous photo"
                type="button"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="gallery-modal__media">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="gallery-modal__image"
                />
              </div>

              <button
                className="gallery-modal__nav-btn gallery-modal__nav-btn--next"
                onClick={handleNext}
                aria-label="Next photo"
                type="button"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="gallery-modal__caption-bar">
              <div className="gallery-modal__meta">
                <span className="gallery-modal__location">
                  <MapPin size={13} />
                  <span>{activeItem.location}</span>
                </span>
              </div>
              <h3 className="gallery-modal__title">{activeItem.title}</h3>
              <p className="gallery-modal__desc">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
