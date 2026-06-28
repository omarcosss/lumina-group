import React, { useRef, useState, useEffect } from 'react';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import './Carousel.css';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, title }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [items]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const firstChild = current.firstElementChild as HTMLElement;
      if (firstChild) {
        const scrollAmount = firstChild.offsetWidth + 24; // 24px is gap matching 1.5rem
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      } else {
        const scrollAmount = current.offsetWidth * 0.8;
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="carousel-wrapper">
      {title && (
        <div className="carousel-title-wrapper">
          <h2 className="carousel-title" style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#1d1d1f' }}>{title}</h2>
        </div>
      )}
      <div className="carousel-container" ref={scrollContainerRef} onScroll={checkScroll}>
        {items.map((item, idx) => (
          <div key={idx} className="carousel-item">
            <div className="carousel-image-wrapper">
              <img src={item.image} alt={item.title} className="carousel-image" />
            </div>
            <div className="carousel-text">
              <strong>{item.title}.</strong> {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button 
          onClick={() => scroll('left')} 
          className="carousel-control-btn" 
          disabled={!canScrollLeft}
          aria-label="Previous slide"
        >
          <CaretLeftIcon size={24} weight="bold" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="carousel-control-btn"
          disabled={!canScrollRight}
          aria-label="Next slide"
        >
          <CaretRightIcon size={24} weight="bold" />
        </button>
      </div>
    </div>
  );
};
