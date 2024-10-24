// buttons
let startChangingColorButton = document.querySelector('#start');
let stopChangingColorButton = document.querySelector('#stop');
let colorDisplayBox = document.querySelector('.colorDisplyBox');

let interval;
// color generator
const randomColor = () => {
    let color = '#';
    const hex = '1234567890ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const startChangingColor = () => {
    if (!interval) {
        interval = setInterval(() => {
            let newColor = randomColor();
            colorDisplayBox.style.backgroundColor = newColor;
            colorDisplayBox.innerHTML = `<h1>${newColor}</h1>`;// Display hex code in document
        }, 1000);
    }
    startChangingColorButton.disabled = true;
}

const stopChangingColor = () => {
    clearInterval(interval);
    startChangingColorButton.disabled = false;
    interval = null
}
startChangingColorButton.addEventListener('click', startChangingColor);
stopChangingColorButton.addEventListener('click', stopChangingColor);
