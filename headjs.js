// Анимация перехода между страницами
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация Barba.js
    barba.init({
        transitions: [{
            name: 'default-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0,
                    x: '-50%',
                    duration: 0.5
                });
            },
            enter(data) {
                gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.2
                });
            }
        }]
    });

    // Обработчик события для кнопки
    document.getElementById('redirectButton').addEventListener('click', function() {
        // Используем Barba.js для перехода на другую страницу
        barba.go('index.html'); // Переход на index.html с анимацией
    });
});
// Анимация перехода между страницами конец
// Анимация на кнопке регистрации
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('redirectButton');

    // Анимация при наведении
    button.addEventListener('mouseenter', function() {
        gsap.to(button, {
            scale: 1.1, // Увеличение размера
            duration: 0.3,
            ease: "power1.out"
        });
    });

    // Анимация при уходе курсора
    button.addEventListener('mouseleave', function() {
        gsap.to(button, {
            scale: 1, // Возврат к исходному размеру
            duration: 0.3,
            ease: "power1.out"
        });
    });

    // Анимация при нажатии
    button.addEventListener('mousedown', function() {
        gsap.to(button, {
            scale: 0.95, // Уменьшение размера
            duration: 0.1,
            ease: "power1.out"
        });
    });

    // Возврат к исходному размеру после нажатия
    button.addEventListener('mouseup', function() {
        gsap.to(button, {
            scale: 1, // Возврат к исходному размеру
            duration: 0.1,
            ease: "power1.out"
        });
    });
});
// Анимация на кнопке регистрации конец