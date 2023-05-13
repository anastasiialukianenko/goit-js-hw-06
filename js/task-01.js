const body = document.body;

const categoriesList = body.children[1];
const categoriesItem = Array.from(categoriesList.children);


console.log(`Number of categories: ${categoriesItem.length}`);


categoriesItem.forEach(item => {
    const categoryTitle = item.firstElementChild.textContent;
    console.log(`Category: ${categoryTitle}`);
    
    const categoryEl = item.querySelectorAll('li').length;
    console.log(`Elements: ${categoryEl}`);
});