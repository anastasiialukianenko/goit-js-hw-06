function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Стукаємо до елементів
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

// Слухаємо кнопки
createBtnEl.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  destroyBoxes()
  const boxes = [];

  for (let i = 0; i < amount; i++) {

    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  };
   boxesEl.append(...boxes);
};

function destroyBoxes() {
  boxesEl.innerHTML = '';
}