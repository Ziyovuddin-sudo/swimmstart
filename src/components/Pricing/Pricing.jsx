import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    title: 'АБОНЕМЕНТ НА БАССЕЙН + GYM (1 МЕСЯЦ)',
    subtitle: 'Идеально для активного старта',
    prices: [
      { time: '07:00–13:00', price: '1 800 000 сум' },
      { time: '13:00–18:00', price: '2 000 000 сум' },
      { time: '18:00–23:00', price: '2 800 000 сум' }
    ],
    features: [
      'Безлимитное количество посещений',
      'Экономия средств при частых посещениях',
      'Регулярные тренировки для формы'
    ],
    buttonText: 'Выбрать 1 месяц',
    popular: false
  },
  {
    title: 'АБОНЕМЕНТ НА БАССЕЙН + GYM (ГОДОВОЙ)',
    subtitle: 'Максимальная выгода и результат',
    prices: [
      { time: '6 месяцев', price: 'от 5 500 000 сум' },
      { time: '12 месяцев', price: 'от 9 500 000 сум' }
    ],
    features: [
      'Приоритетный доступ к услугам',
      'Регулярные замеры и консультации',
      'Максимальная экономия (до 40%)',
      'Заморозка абонемента до 30 дней'
    ],
    buttonText: 'Стать резидентом',
    popular: true
  },
  {
    title: 'ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ',
    subtitle: 'Персональный путь к успеху',
    prices: [
      { time: '12 занятий (Индив.)', price: '3 500 000 сум' },
      { time: '12 занятий (Сплит)', price: '2 000 000 сум' },
      { time: 'Пробное занятие', price: 'Любое время' }
    ],
    features: [
      'Ускоренное освоение навыков',
      'Персональный подход к ученику',
      'Гибкий график по вашему выбору',
      'План питания в подарок'
    ],
    buttonText: 'Начать обучение',
    popular: false
  },
  {
    title: 'GYM (ТРЕНАЖЕРНЫЙ ЗАЛ)',
    subtitle: 'Сила и результат каждый день',
    prices: [
      { time: 'Женский (мес)', price: '800 000 сум' },
      { time: 'Мужской (мес)', price: '1 000 000 сум' },
      { time: 'Разовый (Взрослый)', price: '400 000 сум' },
      { time: 'Разовый (Детский)', price: '200 000 сум' }
    ],
    features: [
      'Доступность для разовых визитов',
      'Выгода для постоянных клиентов',
      'Гибкая ценовая политика',
      'Профессиональное оборудование'
    ],
    buttonText: 'Записаться в зал',
    popular: false
  },
  {
    title: 'МАССАЖ И РЕЛАКС',
    subtitle: 'Восстановление тела и души',
    prices: [
      { time: 'Спина, шея, ноги', price: '350 000 сум' },
      { time: 'Балийский / Шведский', price: '600 000 сум' },
      { time: 'Микс массаж', price: '800 000 сум' },
      { time: 'Арома / Скраб', price: '500 000 сум' }
    ],
    features: [
      'Премиальный уход и косметика',
      'Дополнительные услуги релакса',
      'Оздоровительное воздействие',
      'Атмосфера полного покоя'
    ],
    buttonText: 'Забронировать',
    popular: false
  }
];

const Pricing = ({ onOpenModal }) => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span className="section-tag">Тарифы</span>
        <h2>Выберите свой абонемент</h2>
        <p>Мы предлагаем гибкие условия для каждого — от разовых занятий до полных годовых абонементов.</p>
      </div>

      <div className="pricing-container">
        <div className="pricing-grid">
          {pricingData.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="card-badge">Популярный</div>}
              <div className="card-head">
                <h3>{tier.title}</h3>
                <p className="card-subtitle">{tier.subtitle}</p>
              </div>
              
              <div className="card-prices">
                {tier.prices.map((p, i) => (
                  <div key={i} className="price-row">
                    <span className="time">{p.time}</span>
                    <span className="dots"></span>
                    <span className="price">{p.price}</span>
                  </div>
                ))}
              </div>

              <ul className="card-features">
                {tier.features.map((feature, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="card-btn" onClick={() => onOpenModal(tier.title)}>
                {tier.buttonText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
