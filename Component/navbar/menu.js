// const $body = document.querySelector("#body-for-menu-onclick");
const $menu = document.querySelector("#menu-button__modal");
const $signInButton = document.querySelector("#signIn-navbar");
const $burgerSVG = document.querySelector("#burger");
const $xSVG = (document = document.querySelector("#burger-close"));

function showMenu() {
  let menuBox = document.getElementById("menu-button__modal");
  let signInButton = document.getElementById("signIn-navbar");
  let burgerSVG = document.getElementById("burger");
  let xSVG = document.getElementById("burger-close");
  //   let body = document.getElementById("body-for-menu-onclick");
  if (menuBox.style.display == "none") {
    menuBox.style.display = "flex";
    signInButton.style.display = "none";
    burgerSVG.style.display = "none";
    xSVG.style.display = "flex";
    // body.style.display = "none";
  } else {
    menuBox.style.display = "none";
    signInButton.style.display = "flex";
    burgerSVG.style.display = "flex";
    xSVG.style.display = "none";
    // body.style.display = "flex";
  }
}

showMenu();
