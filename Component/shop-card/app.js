const $card = document.querySelector(".section__shop__card");
const $vid = document.querySelector("video");
const $vidBox = document.querySelector(".section__shop__card-vid")

$card.addEventListener("mouseenter", () => {
    $vid.play();
});

$card.addEventListener("mouseout", () => {
    $vid.pause();
});