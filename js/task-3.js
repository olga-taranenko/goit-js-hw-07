const inputNameElem = document.getElementById('name-input');
const outputNameElem = document.getElementById('name-output');
inputNameElem.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  inputValue === ''
    ? (outputNameElem.textContent = 'Anonymous')
    : (outputNameElem.textContent = event.currentTarget.value);
});
