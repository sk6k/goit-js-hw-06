function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	button: document.querySelector(".change-color"),
	color: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
	const randomColor = getRandomHexColor();
	document.body.style.background = randomColor;
	refs.color.textContent = randomColor;
}
