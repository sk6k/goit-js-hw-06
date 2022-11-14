const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

ingredients.forEach((ingredient) => {
	const navUl = document.querySelector("#ingredients");
	console.log(navUl);
	const createItem = document.createElement("li");
	console.log(createItem);
	createItem.textContent = ingredient;
	createItem.classList.add("item");
	navUl.append(createItem);
	console.log(createItem);
});
