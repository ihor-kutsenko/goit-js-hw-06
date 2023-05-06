const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listOfIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const item = document.createElement("li");

    item.textContent = ingredient;
    item.classList.add("item");
    return item;
  });
};

list.append(...listOfIngredients(ingredients));

// variant 2
// const listOfIngredients = ingredients.map(ingredient => {
//     const item = document.createElement("li");
//     item.textContent = ingredient;
//     item.classList.add("item");
//     return item;
//   })
// console.log(listOfIngredients);
// console.log(...listOfIngredients);


// list.append(...listOfIngredients);