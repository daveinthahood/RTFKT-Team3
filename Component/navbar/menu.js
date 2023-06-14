// // const $body = document.querySelector("#body-for-menu-onclick");
// const $menu = document.querySelector("#menu-button__modal");
// const $signInButton = document.querySelector("#signIn-navbar");
// const $buttonBX = document.querySelector("#buttonBX");
// const $burgerSVG = document.querySelector("#burger");
// const $xSVG = document.querySelector("#burger-close");

// $buttonBX.addEventListener("click", () => {
//   if ($menu.classList.contains("active")) {
//     $menu.classList.remove("active");
//     $menu.style.display = "none";
//     $burgerSVG.style.display = "block";
//     $signInButton.style.display = "block";
//     $xSVG.style.display = "none";
//   } else {
//     $menu.classList.add("active");
//     $menu.style.display = "block";
//     $burgerSVG.style.display = "none";
//     $signInButton.style.display = "none";
//     $xSVG.style.display = "block";
//   }
// });

const $body = document.querySelector("#body-for-menu-onclick");
const $modal = document.querySelector("#menu-button__modal");
const $signInButton = document.querySelector("#signIn-navbar");
const $buttonBX = document.querySelector("#buttonBX");
const $burgerSVG = document.querySelector("#burger");
const $xSVG = document.querySelector("#burger-close");

$buttonBX.addEventListener("click", () => {
  if ($modal.classList.contains("active")) {
    $modal.classList.remove("active");
    $body.style.overflow = "initial";
    $modal.style.display = "none";
    $burgerSVG.style.display = "block";
    $signInButton.style.display = "block";
    $xSVG.style.display = "none";
  } else {
    $modal.classList.add("active");
    $body.style.overflow = "hidden"
    // $menu.style.display = "flex";
    $modal.style.display = "block";
    $burgerSVG.style.display = "none";
    $signInButton.style.display = "none";
    $xSVG.style.display = "block";
  }
});

