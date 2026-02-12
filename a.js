function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    const hearts = ['❤️', '💖', '💕', '💗', '💓']; // Список эмодзи

    heart.classList.add('floating-heart');
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Случайная позиция по горизонтали
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Случайная длительность анимации (от 3 до 6 секунд)
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    // Случайный размер
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';

    container.appendChild(heart);

    // Удаляем сердечко после завершения анимации, чтобы не перегружать память
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Создавать новое сердечко каждые 300 мс
setInterval(createHeart, 300);