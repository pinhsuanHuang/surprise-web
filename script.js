const noBtn = document.querySelector('#noBtn');
const yesBtn = document.querySelector('#yesBtn');

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    // 這裡可以換成你的 Google Form 邏輯或單純 Alert
    alert('就知道你是!!!');
    window.location.href = "https://www.google.com"; 
});
