const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

function moveButton() {
    // 取得視窗寬高
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 取得按鈕本身的寬高
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 計算安全範圍（扣除按鈕大小，並留 20px 邊距防止貼齊邊緣）
    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    // 確保隨機值至少為 10px，避免跳到左上角死角
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.margin = '0'; // 清除原本 CSS 可能有的 margin 影響
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
