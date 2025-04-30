// Бургер-меню для мобилок
const burgerMenu = () => {
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = '☰';
    document.querySelector('header').prepend(burger);
    
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('open');
    });
  };
  
  // Анимация при загрузке карточек
  const animateCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.animation = `fadeIn 0.5s ease forwards ${i * 0.2}s`;
    });
  };
  
  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    animateCards();
  });