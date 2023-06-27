const $menu = document.querySelector(".aside");
const $creators = document.querySelector("#creators");
const $categories = document.querySelector(".categories");
const $hideButton = document.querySelector("#hide");
const $buttonShow = document.querySelector("#show");
const $buttonSearch = document.querySelector("#searchbtn");
const $inputSearch = document.querySelector("#searchbox");
const $buttonCloseSrc = document.querySelector("#clssrcbtn");
const $clearCat = document.querySelector("#clearcat");
const $showCat = document.querySelector("#showcat");
const $showCreat = document.querySelector("#showcreat");
const $clearCreat = document.querySelector("#clearcreat")

//*nasconde il menù filtri
$hideButton.addEventListener("click", ()=> {
    $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
    $buttonShow.style.display = $buttonShow.style.display === "none" ? "block" : "none";
    $buttonSearch.style.right = "-30px";
    $inputSearch.style.right = "-33px";

})

//*mostra il emnu filtri
$buttonShow.addEventListener("click", () => {
    $menu.style.display = $menu.style.display === "none" ? "flex" : "none";
    $buttonShow.style.display = $buttonShow.style.display === "block" ? "none" : "none";
})
//* animazione input ricerca apertura
$buttonSearch.addEventListener("click", () => {
    $inputSearch.style.transform = "translateX(1)";
    $inputSearch.style.opacity = "1";
    $buttonCloseSrc.style.display = "block";
})

//* animazione input ricerca chiusura
$buttonCloseSrc.addEventListener("click", () => {
    $inputSearch.style.transform = "";
    $inputSearch.style.opacity = "";
    $buttonCloseSrc.style.display = "";
})


$clearCat.addEventListener("click", () => {
    $categories.style.display = "none";
})

$showCat.addEventListener("click", () => {
    $categories.style.display = "flex";
})

$clearCreat.addEventListener("click", () => {
    $creators.style.display = "none";
})
$showCreat.addEventListener("click", () => {
    $creators.style.display = "flex";
})
//  //?hide e show della categoria creators
//   if (target.classList.contains("clearcreators")) {
//     $creators.style.display = "none";
//   }

//   if (target.classList.contains("showcreators")) {
//     $creators.style.display = "flex";
//   }
// });
