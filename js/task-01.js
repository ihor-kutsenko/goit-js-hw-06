const category = document.querySelectorAll(".item");
const numberCategory = category.length;
console.log("Number of categories:", numberCategory);

[...category].forEach((element, index) => {
  const nameOfCategories = element.querySelector("h2");
  const numberOfCategory = element.querySelectorAll("li");
  console.log(`Category: ${nameOfCategories.textContent}`);
  console.log(`Elements: ${numberOfCategory.length}`);
});

// variant 2
// const category = document.querySelector("#categories");
// const items = category.querySelectorAll(".item");

// // Виводимо кількість категорій в списку
// console.log(`Number of categories: ${items.length}`);


// Для кожної категорії виводимо заголовок та кількість елементів
// items.forEach(item => {
//   const categoryTitle = item.querySelector("h2").textContent;
//   console.log(`Category: ${categoryTitle}`);

//   const categoryItems = item.querySelectorAll("li").length;
//   console.log(`Elements: ${categoryItems}`);
// })