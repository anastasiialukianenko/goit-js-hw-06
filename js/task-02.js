const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

console.log(ingredientsListEl);

let markup = ingredients.map(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add('item');
  return ingredientItemEl;
});

 ingredientsListEl.append(...markup);