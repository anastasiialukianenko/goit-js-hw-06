
const fontSizeControlerEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlerEl.addEventListener('input', fontSizeChange)

function fontSizeChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}