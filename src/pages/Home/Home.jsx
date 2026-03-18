import React, { useState, useEffect } from 'react';
import NewsScroll from '../../components/NewsScroll/NewsScroll';
import Pricing from '../../components/Pricing/Pricing';
import Location from '../../components/Location/Location';

const slides = [
  {
    id: 1,
    title: 'SWIMMSTART',
    description: 'Команда профессиональных тренеров. Swimmstart помогает вам достичь вершин в плавании. Мы не просто обучаем — мы создаём чемпионов. Воплотите свою мечту вместе с нами!',
    background: '/hero-bg.jpg'
  },
  {
    id: 2,
    title: 'GYM',
    description: 'Команда профессиональных тренеров. Gymstart поможет вам достичь вершин физического совершенства и силы. Мы не просто проводим тренировки — мы впитываем победителей. Создайте тело своей мечты вместе с нами!',
    background: '/hero-bg-2.png'
  }
];

const Home = ({ openModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="slide-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </section>
      
      <NewsScroll />
      <Pricing onOpenModal={openModal} />
      <Location />
    </>
  );
};

export default Home;
