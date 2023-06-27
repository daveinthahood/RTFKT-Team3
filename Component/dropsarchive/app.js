const $menu = document.querySelector(".aside");
const $creators = document.querySelector(".creators");
const $categories = document.querySelector(".categories");
const $hideButton = document.querySelector("#hide");
const $buttonShow = document.querySelector("#show");
const $buttonSearch = document.querySelector("#searchbtn");
const $inputSearch = document.querySelector("#searchbox");


$hideButton.addEventListener("click", ()=> {
    $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
    $buttonShow.style.display = $buttonShow.style.display === "none" ? "block" : "none";
    $buttonSearch.style.right = "-30px";
    $inputSearch.style.right = "-33px";

})

$buttonShow.addEventListener("click", () => {
    $menu.style.display = $menu.style.display === "none" ? "flex" : "none";
    $buttonShow.style.display = $buttonShow.style.display === "block" ? "none" : "none";
})

$buttonSearch.addEventListener("click", () => {
    $inputSearch.style.transform = "scale(1)";
    $inputSearch.style.opacity = "1";

})

// document.addEventListener("click", (event) => {
//   const target = event.target;
//  //? Hider di tutto il flitro
//   if (target.classList.contains("button--hide")) {
//     $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
//   }
//  //?hide e show della categoria categories
//   if (target.classList.contains("clearcategories")) {
//     $categories.style.display = "none";
//   }

//   if (target.classList.contains("showcategories")) {
//     $categories.style.display = "flex";
//   }
//  //?hide e show della categoria creators
//   if (target.classList.contains("clearcreators")) {
//     $creators.style.display = "none";
//   }

//   if (target.classList.contains("showcreators")) {
//     $creators.style.display = "flex";
//   }
// });
