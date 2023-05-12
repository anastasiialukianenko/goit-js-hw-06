const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');
// console.dir(counterEl);

let counterValue = 0;

buttonIncrementEl.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
});

buttonDecrementEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});
