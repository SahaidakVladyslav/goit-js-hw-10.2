import iziToast from "izitoast";
import ".../dist/node_modules/izitoast/dist/iziToast.min.css";


const delayInputEl = document.querySelector('[name="delay"]');
const formEl = document.querySelector('.form');
const failureInputEl = document.querySelector('input[value="fulfilled"]')
const rejectedInputEl = document.querySelector('input[value="rejected"]')


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const time = delayInputEl.value
    const inputChecked = failureInputEl.checked
    function createPromise(failure, rejected) {
        const promise = new Promise((resolve, reject) => {

            if (inputChecked) {
                resolve('succses')
            } else {
                reject('error')
            }
        })

        return promise;
    }
    setTimeout(() => {
        createPromise()
            .then((result) => {
                iziToast.success({
                    title: 'Success',
                    message: `виклик зробився за такий час ${time} ms`,
                });
            })
            .catch((reject) => {
                iziToast.error({
                    title: 'Error',
                    message: `виклик зробився за такий час ${time} ms`,
                });
            })

    }, time)
    formEl.reset();
})
