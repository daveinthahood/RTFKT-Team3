const $menu = document.querySelector(".aside");
const $creators = document.querySelector(".creators");
const $categories = document.querySelector(".categories");

document.addEventListener("click", (event) => {
  const target = event.target;
 //? Hider di tutto il flitro
  if (target.classList.contains("button--hide")) {
    $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
  }
 //?hide e show della categoria categories
  if (target.classList.contains("clearcategories")) {
    $categories.style.display = "none";
  }

  if (target.classList.contains("showcategories")) {
    $categories.style.display = "flex";
  }
 //?hide e show della categoria creators
  if (target.classList.contains("clearcreators")) {
    $creators.style.display = "none";
  }

  if (target.classList.contains("showcreators")) {
    $creators.style.display = "flex";
  }
});
