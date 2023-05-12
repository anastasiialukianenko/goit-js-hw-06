function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');
 
changeColorBtnEl.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const bodyEl = document.querySelector('body');
    const randomColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomColor;
    textColorEl.textContent = randomColor;
};