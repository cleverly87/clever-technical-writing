'use client';

import { useState, useEffect } from 'react';
import OutcomeCard from './OutcomeCard';

interface OutcomeData {
  label: string;
  metric?: string;
  blurb: string;
}

interface OutcomeCarouselProps {
  outcomes: OutcomeData[];
}

/**
 * OutcomeCarousel - Professional carousel showcasing business outcomes
 * Displays expertise depth through multiple outcome cards
 */
export default function OutcomeCarousel({ outcomes }: OutcomeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // lg: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // md: 2 cards
      } else {
        setCardsPerView(1); // sm: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, outcomes.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <OutcomeCard
                label={outcome.label}
                metric={outcome.metric}
                blurb={outcome.blurb}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {outcomes.length > cardsPerView && (
        <div className="flex items-center justify-center mt-8 gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 transition-colors"
            aria-label="Previous outcomes"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-neutral-300'
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-neutral-100 transition-colors"
            aria-label="Next outcomes"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}