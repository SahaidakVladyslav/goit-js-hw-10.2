
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';





const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-seconds]');
let timeUpdateTime = null;
let valueDato;
let proDato;
let milliseconds;
const btnNone = () => {
    btnStart.style.opacity = 0.5;
    btnStart.style.pointerEvents = 'none';
};

const btnAuto = () => {
    btnStart.style.pointerEvents = 'auto';
    btnStart.style.opacity = 1;
};

const emptyTextContent = () => {
    inputDays.textContent = '00';
    inputHours.textContent = '00';
    inputMinutes.textContent = '00';
    inputSeconds.textContent = '00';
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const padStartFunction = ({ days, hours, minutes, seconds }) => {
    const proDays = days.toString().padStart(2, 0)
    const proHours = hours.toString().padStart(2, 0)
    const proMinutes = minutes.toString().padStart(2, 0)
    const proSeconds = seconds.toString().padStart(2, 0)
    return { proDays, proHours, proMinutes, proSeconds }
}

function timerTextContent() {
    timeUpdateTime = setInterval(() => {
        milliseconds -= 1000
        if (milliseconds < 1000) {
            clearInterval(timeUpdateTime)
        }
        valueDato = convertMs(milliseconds)
        proDato = padStartFunction(valueDato)

        inputDays.textContent = `${proDato.proDays}`;
        inputHours.textContent = `${proDato.proHours}`;
        inputMinutes.textContent = `${proDato.proMinutes}`;
        inputSeconds.textContent = `${proDato.proSeconds}`;
    }, 1000)
}

btnNone();


iziToast.settings({
    timeout: 2000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: "topRight",
    onOpening: function () {
        console.log('callback abriu!');
    },
});



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        clearInterval(timeUpdateTime);
        if (selectedDates[0].getTime() <= options.defaultDate.getTime()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            emptyTextContent()
            btnNone();
        } else {
            btnAuto()
            milliseconds = +selectedDates[0].getTime() - +options.defaultDate.getTime()
            valueDato = convertMs(milliseconds)
            proDato = padStartFunction(valueDato)

            inputDays.textContent = `${proDato.proDays}`;
            inputHours.textContent = `${proDato.proHours}`;
            inputMinutes.textContent = `${proDato.proMinutes}`;
            inputSeconds.textContent = `${proDato.proSeconds}`;
        }
    },
};

flatpickr(inputEl, options);

btnStart.addEventListener('click', () => {
    btnNone()
    timerTextContent()
});
