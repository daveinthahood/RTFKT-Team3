const $card = document.querySelector(".section__shop__card");
const $vid = document.querySelector("video");

$card.addEventListener("mouseenter", () => {
    $vid.play();
});

$card.addEventListener("mouseout", () => {
    $vid.pause();
});