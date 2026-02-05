const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

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
    // 這裡可以換成你的 Google Form 邏輯或單純 Alert
    alert('<3');
    window.location.href = "https://www.google.com"; 
});
