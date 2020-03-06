const categoriesData = categories;

let categoryBox = (document.getElementById(
  "categories"
).innerHTML = categoriesData
  .map(
    categories =>
      `<div class="category-box">
    <div class="pic-link" style="background-image: url('${categories.img}')"></div>
    <span><a href="#">${categories.name}</a></span>
  </div>`
  )
  .join(""));
