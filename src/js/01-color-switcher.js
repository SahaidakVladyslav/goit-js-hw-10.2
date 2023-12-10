
// console.log('jeh hedder en pindsvin')
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyGetToWork = () => document.querySelector('body').style.backgroundColor = `${getRandomHexColor()}`
let timeUpdateColor = null;

btnStop.style.opacity = '0.5'


btnStart.addEventListener('click', () => {
    timeUpdateColor = setInterval(bodyGetToWork, 1000);
    btnStart.style.pointerEvents = 'none';
    btnStart.style.opacity = '0.5';
    btnStop.style.opacity = '1'
})
btnStop.addEventListener('click', () => {
    clearInterval(timeUpdateColor);
    btnStart.style.pointerEvents = 'auto';
    btnStart.style.opacity = '1';
    btnStop.style.opacity = '0.5'
})
