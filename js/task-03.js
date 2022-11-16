const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const navListEl = document.querySelector(".gallery");
const makeGaleryItemMarkup = (image) => {
	return `
	<li class="item">
		<img class="image" src="${image.url}" alt="${image.alt}">
	</li>
	`;
};

const makeGaleryMarkup = images.map(makeGaleryItemMarkup).join("");

navListEl.insertAdjacentHTML("beforeend", makeGaleryMarkup);

console.log(makeGaleryMarkup);

// const elements = images.map((image) => {
// 	const navItemEl = document.createElement("li");
// 	navItemEl.classList.add("item");
// 	navItemEl.insertAdjacentHTML(
// 		"beforeend",
// 		`<h3 class="markup">${image.alt}</h3>`
// 	);

// 	const navImgEl = document.createElement("img");
// 	navImgEl.classList.add("image");
// 	navImgEl.src = image.url;
// 	navImgEl.alt = image.alt;

// 	navItemEl.appendChild(navImgEl);
// 	return navItemEl;
// });

// navListEl.append(...elements);

// images.forEach((image) => {
// 	const navItemEl = document.createElement("li");
// 	navItemEl.classList.add("item");
// 	navItemEl.insertAdjacentHTML(
// 		"beforeend",
// 		`<h3 class="markup">${image.alt}</h3>`
// 	);

// 	const navImgEl = document.createElement("img");
// 	navImgEl.classList.add("image");
// 	navImgEl.src = image.url;
// 	navImgEl.alt = image.alt;

// 	navItemEl.appendChild(navImgEl);
// 	navListEl.appendChild(navItemEl);
// });
