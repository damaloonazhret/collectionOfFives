let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
document.getElementById('score').textContent = score;

const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/7012');

function addFive() {
    score++;
    localStorage.setItem('score', score);
    document.getElementById('score').textContent = score;

    const jar = document.querySelector('.jar');
    const fallingFive = document.createElement('div');
    fallingFive.classList.add('falling-5');
    fallingFive.textContent = '5';
    fallingFive.style.left = Math.random() * 150 + 'px'; // Рандомное положение
    jar.appendChild(fallingFive);

    setTimeout(() => {
        fallingFive.remove();
    }, 2000);

    audio.currentTime = 0;
    audio.play();
}
