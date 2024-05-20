const inputNameElem = document.getElementById('name-input');
const outputNameElem = document.getElementById('name-output');
inputNameElem.addEventListener('input', event => {
  outputNameElem.textContent = event.currentTarget.value;
});
