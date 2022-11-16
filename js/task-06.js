const fieldInput = document.querySelector("#validation-input");
const dataLength = Number(fieldInput.attributes[2].value);

fieldInput.addEventListener("blur", onIputBlur);

function onIputBlur() {
	if (fieldInput.value.length === dataLength) {
		fieldInput.className = "valid";
	} else {
		fieldInput.className = "invalid";
	}
}
