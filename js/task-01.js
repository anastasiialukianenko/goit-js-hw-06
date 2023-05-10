const categoriesList = document.querySelector("#categories");
const categoriesItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItem.length}`);


categoriesItem.forEach(item => {
    // console.log(item)
    const categoryTitle = item.querySelector("h2").textContent;
    console.log(`Category: ${categoryTitle}`);
    
    const categoryEl = item.querySelectorAll('li').length;
    console.log(`Elements: ${categoryEl}`);
})