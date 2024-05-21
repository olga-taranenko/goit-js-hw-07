function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('input');
const createBtnElem = document.querySelector('[data-create]');
const destroyBtnElem = document.querySelector('[data-destroy]');
const boxCreateElem = document.querySelector('#boxes');

createBtnElem.addEventListener('click', () => {
  const amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = '';
  }
});

destroyBtnElem.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const resultCreatedBoxes = [];
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement('div');
    createBox.style.width = 30 + i * 10 + 'px';
    createBox.style.height = 30 + i * 10 + 'px';
    createBox.style.backgroundColor = getRandomHexColor();
    // boxCreateElem.appendChild(createBox);
    resultCreatedBoxes.push(createBox);
  }
  boxCreateElem.append(...resultCreatedBoxes);
}

function destroyBoxes() {
  boxCreateElem.innerHTML = '';
}
