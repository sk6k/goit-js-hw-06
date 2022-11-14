let form = document.querySelector("#name-input");
const out = document.querySelector("#name-output");

form.addEventListener("input", () => {
	out.textContent = form.value;
	if (form.value === "") {
		out.textContent = "Anonymous";
	}
});

console.log(form);

// = event.data;
