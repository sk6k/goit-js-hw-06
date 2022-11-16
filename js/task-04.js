const navCounterEl = document.querySelector("#counter");
const decrementBtn = navCounterEl.querySelector('[data-action="decrement"]');
const incrementBtn = navCounterEl.querySelector('[data-action="increment"]');
const valueField = navCounterEl.querySelector("#value");
let counterValue = 0;

function onIncrementBtnClick() {
	counterValue += 1;
	valueField.textContent = counterValue;
}

function onDecrementBtnClick() {
	counterValue -= 1;
	valueField.textContent = counterValue;
}

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
