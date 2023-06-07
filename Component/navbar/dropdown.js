const $collectionLink = document.querySelector("#collections-link");

const $floatingMenu = document.querySelector("#floating-menu");

function showDropdown() {
  $floatingMenu.classList.add("visible");
}

function hideDropdown() {
  $floatingMenu.classList.remove("visible");
}

$collectionLink.addEventListener("mouseover", showDropdown);

$floatingMenu.addEventListener("mouseover", showDropdown);

$collectionLink.addEventListener("mouseout", hideDropdown);

$floatingMenu.addEventListener("mouseout", hideDropdown);
