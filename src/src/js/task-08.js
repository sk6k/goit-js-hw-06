const refs = {
	form: document.querySelector(".login-form"),
	email: document.querySelector('input[name="email"]'),
	password: document.querySelector('input[name="password"]'),
};
// refs.email.setAttribute("required", "");
// refs.password.setAttribute("required", "");

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const email = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;
	if (email === "" || password === "") {
		alert("Будь ласка, заповніть всі поля");
	} else {
		const formData = {
			email,
			password,
		};

		// const formData = new FormData(event.currentTarget);
		console.log(formData);
		event.currentTarget.reset();
	}
}
