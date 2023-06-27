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
const $clearCreat = document.querySelector("#clearcreat");
const $large = document.querySelector("#large");
const $small = document.querySelector("#small");
const $card = document.querySelectorAll(".section__shop__main__card");

$large.addEventListener("click", () => {
    $small.classList.add("transparent");
    $large.classList.remove("transparent");
    $large.style.transform = "scale(1.3)";
    $small.style.transform = "";
    [...$card].forEach(el => {
        el.style.flex = "1 0 45%"
    })
})

$small.addEventListener("click", () => {
    $large.classList.add("transparent");
    $small.classList.remove("transparent");
    $small.style.transform = "scale(1.3)";
    $large.style.transform = "";
    [...$card].forEach(el => {
        el.style.flex = "1 0 30%"
    })
})

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
    $buttonShow.style.display = $buttonShow.style.display === "block" ? "none" : "block";
})
//* animazione input ricerca apertura
$buttonSearch.addEventListener("click", () => {
    $inputSearch.style.transform = "translateX(1)";
    $inputSearch.style.opacity = "1";
    // $buttonSearch.style.display = "none";
    $buttonCloseSrc.style.display = "block";
})

//* animazione input ricerca chiusura
$buttonCloseSrc.addEventListener("click", () => {
    $inputSearch.style.transform = "";
    $inputSearch.style.opacity = "";
    $buttonCloseSrc.style.display = "none";
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
