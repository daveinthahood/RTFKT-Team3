const $discordBannerSecondWinner = document.querySelector(".discord-banner-winners-second");
const $discordBannerThirdWinner = document.querySelector(".discord-banner-winners-third");


function showImage(event) {
    $discordBannerSecondWinner.style.display = "block";
    var sDisplay = (event.type === "mouseout") ? "none" : "block";
    
}