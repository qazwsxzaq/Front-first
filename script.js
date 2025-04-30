document.addEventListener('DOMContentLoaded', () => {
    // Создаем бургер-меню
    const burger = document.createElement('div');
    burger.className = 'burger';
    burger.innerHTML = '☰';
    
    // Находим header и добавляем бургер
    const header = document.querySelector('header');
    if (header) {
        header.style.position = 'relative'; // Добавляем позиционирование
        header.prepend(burger);
        console.log('Header успешно найден!');
    } else {
        console.error('Header не найден на странице!');
        return;
    }
});
