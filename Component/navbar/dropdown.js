const collectionLink = document.querySelector("#collections-link");

const floatingMenu = document.querySelector("#floating-menu");

function showMenu() {
  floatingMenu.classList.add("visible");
}

function hideMenu() {
  floatingMenu.classList.remove("visible");
}

collectionLink.addEventListener("mouseover", showMenu);

floatingMenu.addEventListener("mouseover", showMenu);

collectionLink.addEventListener("mouseout", hideMenu);

floatingMenu.addEventListener("mouseout", hideMenu);
