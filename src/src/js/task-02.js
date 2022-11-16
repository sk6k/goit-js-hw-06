const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const navUl = document.querySelector("#ingredients");
const itemArray = [];
ingredients.forEach((ingredient) => {
	const createItem = document.createElement("li");
	createItem.textContent = ingredient;
	createItem.classList.add("item");
	itemArray.push(createItem);
});

navUl.append(...itemArray);
