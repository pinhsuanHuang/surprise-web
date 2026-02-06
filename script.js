const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');
const quizContainer = document.querySelector('#quizContainer');
const resultContainer = document.querySelector('#resultContainer');
const resultGif = document.querySelector('#resultGif');
const resultText = document.querySelector('#resultText');

function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 定義「中間附近」的範圍 (例如螢幕中間 50% 的區域)
    const rangeWidth = windowWidth * 0.5;
    const rangeHeight = windowHeight * 0.5;

    // 計算該區域的起始座標 (讓範圍居中)
    const minX = (windowWidth - rangeWidth) / 2;
    const minY = (windowHeight - rangeHeight) / 2;

    // 在這個中間區域內隨機產生座標
    const randomX = minX + Math.random() * (rangeWidth - noBtn.offsetWidth);
    const randomY = minY + Math.random() * (rangeHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.margin = '0';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block'; 
    resultGif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDI5bm4yZ3B3eXcwZngwOTZ6YTg5cjMxZWswN3QxdHUzaGhpeWdoayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ofSBsGsk8TPcLaNws/giphy.gif"; 
    resultText.innerHTML = 'I found a love for me.<br>Darling, just dive right in and follow my lead<br>Well, I found a girl, beautiful and sweet<br>Oh, I never knew you were the someone waiting for me';

    setTimeout(() => {
        window.location.href = "https://pinhsuanhuang.github.io/surprise-web"; 
    }, 5000);
});

noBtn.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block'; 
    resultGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamtkOWk5N2ZjanI1anhyaXRpcGx0ZWM0emMyamYyd3R1NHRqajZ5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LTFmLb6e88cPz2sjux/giphy.gif"; 
    resultText.innerHTML = 'You are not my lover, more like a brother!';

    setTimeout(() => {
        window.location.href = "https://pinhsuanhuang.github.io/surprise-web"; 
    }, 5000);
});
