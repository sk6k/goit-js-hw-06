const numberOfCategories =
	document.querySelector("#categories").childElementCount;
console.log(`Number of categories: ${numberOfCategories}`);

const navElements = document.querySelectorAll("li.item h2");

navElements.forEach((h2) => {
	console.log(
		`Category: ${h2.textContent}\nElements: ${h2.nextElementSibling.childElementCount}`
	);
});

// for (const navElement of navElements) {
// 	console.log(
// 		`Category: ${navElement.textContent}\nElements: ${navElement.nextElementSibling.childElementCount}`
// 	);
// }

// for (const navElement of navElements) {
// 	console.log(
// 		"Category:",
// 		navElement.textContent,
// 		"\n",
// 		"Elements:",
// 		navElement.nextElementSibling.childElementCount
// 	);
// }
// const [firstHeading, secondHeading, thirdHeading] = navHeadings;

// for (const navElementEl of navElements) {
// 	console.log("Elements:", navElementEl.childElementCount);
// }

// const firstCategoryElCount = navElements[0].childElementCount;
// const secondCategoryElCount = navElements[1].childElementCount;
// const thirdCategoryElCount = navElements[2].childElementCount;

// console.log("Category:", firstHeading.textContent);
// console.log("Elements:", firstCategoryElCount);
// console.log("Category:", secondHeading.textContent);
// console.log("Elements:", secondCategoryElCount);
// console.log("Category:", thirdHeading.textContent);
// console.log("Elements:", thirdCategoryElCount);
