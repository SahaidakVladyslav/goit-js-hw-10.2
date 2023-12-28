import iziToast from "izitoast";
// import "izitoast/dist/css/izitoast.min.css";
import ".../dist/node_modules/izitoast/dist/css/iziToast.min.css";


const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('.form');
const btnStart = document.querySelector('button[type="submit"]');
const shouldResolve = Math.random() > 0.3;
let timerId = null;
let count = 0;
let timeDelay = 0;
let counterAmount = 0;
iziToast.settings({
    timeout: 2000,
    resetOnHover: true,
    icon: 'material-icons',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: "topRight",
});

const btnNone = () => {
    btnStart.style.opacity = 0.5;
    btnStart.style.pointerEvents = 'none';
};

const btnAuto = () => {
    btnStart.style.pointerEvents = 'auto';
    btnStart.style.opacity = 1;
};


function createPromise(position, initialDelay, subsequentDelay) {
    return new Promise((resolve, reject) => {
        timeDelay = initialDelay;
        counterAmount = 1
        function finallyDesition() {
            if (count !== 0) {
                timerId = setInterval(() => {
                    const shouldResolve = Math.random() > 0.3;

                    counterAmount += 1
                    timeDelay = +timeDelay + +subsequentDelay;
                    if (shouldResolve) {
                        iziToast.success({
                            title: 'Success',
                            message: `виклик зробився за такий час ${timeDelay} ms`,
                        });
                        console.log(`виклик зробився за такий час ${timeDelay}`)
                    } else {
                        iziToast.error({
                            title: 'Error',
                            message: `виклик зробився за такий час ${timeDelay} ms`,
                        });
                        console.log(`виклик зробився за такий час ${timeDelay}`)
                    }
                    count += 1;
                    if (count >= position) {
                        count = 0;
                        formEl.reset();
                        btnAuto()
                        clearInterval(timerId);
                    }
                }, subsequentDelay)
            }
        }

        function intervalFunction() {
            if (count === 0) {
                setTimeout(() => {
                    const shouldResolve = Math.random() > 0.3;
                    console.log(1)

                    count += 1;
                    if (shouldResolve) {
                        iziToast.success({
                            title: 'Success',
                            message: `виклик зробився за такий час ${initialDelay} ms`,
                        });
                        console.log(`виклик зробився за такий час ${initialDelay} ms`)

                        resolve(finallyDesition());
                    } else {
                        iziToast.error({
                            title: 'Error',
                            message: `виклик зробився за такий час ${initialDelay} ms`,
                        });
                        console.log(`виклик зробився за такий час ${initialDelay} ms`)

                        reject(finallyDesition());
                    }
                }, initialDelay)
            }
        }
        intervalFunction()
    });
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    btnNone()
    const amountStep = amountInputEl.value;
    const initialDelay = delayInputEl.value;
    const subsequentDelay = stepInputEl.value;

    createPromise(amountStep, initialDelay, subsequentDelay)
        .then((result) => {
            console.log('Promise resolved:', result);
        })
        .catch((error) => {
            console.log('Promise rejected:', error);
        })
});
