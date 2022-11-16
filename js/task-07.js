const rangeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
console.log(text);
console.log(rangeInput);

rangeInput.addEventListener("input", onIputChange);

function onIputChange() {
	text.style.fontSize = this.value + "px";
}
