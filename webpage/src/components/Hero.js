import { useEffect, useState } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroSlides = [
    {
      image: `${process.env.PUBLIC_URL}/hero_1.jpg`,
      title: 'Transform Your Space with Premium Blinds',
      subtitle: 'High-quality blinds, shades, and shutters for your home or business'
    },
    {
      image: `${process.env.PUBLIC_URL}/hero_2.jpg`,
      title: 'Become Our Partner',
      subtitle: 'Begin your journey with us by requesting a quote.'
    },
    {
      image: `${process.env.PUBLIC_URL}/hero_3.jpg`,
      title: 'Designed for Every Space',
      subtitle: 'From consultation to installation, we deliver beautiful custom window treatments.'
    }
  ];

  const currentSlide = heroSlides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.35);
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [heroSlides.length]);

  const textOpacity = Math.max(0.2, 1 - offsetY / 430);
  const textShift = offsetY * 0.13;

  return(
    <section id="home" className="hero">
      <div
        className="hero-slides"
        style={{ transform: `translateY(${offsetY}px) scale(1.08)` }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-image ${index === currentIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentIndex}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <button className="hero-arrow hero-arrow-left" onClick={prevSlide} aria-label="Previous hero image">
        &#10094;
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={nextSlide} aria-label="Next hero image">
        &#10095;
      </button>

      <div className="container">
        <div
          key={currentIndex}
          className="hero-content hero-copy"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textShift}px)`
          }}
        >
          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-subtitle">{currentSlide.subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero;