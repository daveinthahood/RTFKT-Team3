const $discordBannerFirstWinner = document.querySelector(".discord-banner-winner-first");
const $discordBannerSecondWinner = document.querySelector(".discord-banner-winners-second"); //  elemento su cui inserire l'hover
const $discordBannerThirdWinner = document.querySelector(".discord-banner-winners-third"); // elemento su cui inserire l'hover
const $discordBannerCenterImg = document.querySelector(".discord-banner-center-image"); // dove cambiare immagine
const $creator1 = document.querySelector(".creator");  // primo creator pic
const $creator2 = document.querySelector(".creator2"); // secondo creator pic
const $creator3 = document.querySelector(".creator3"); // terzo creator pic 
const $myImg = document.getElementById("creator");






//creo l'event listner sul banner numero 2 
$discordBannerSecondWinner.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains('discord-banner-winners-second')){
        const id = target.dataset.id;
        $myImg.src="https://cdn.rtfkt.com/assets/images/creatorChallenge/creator2.png";
    
    }
})

$discordBannerSecondWinner.addEventListener("mouseleave", (event) => {
    let target = event.target;
    if (target.classList.contains('discord-banner-winners-second')){
        const id = target.dataset.id;
        $myImg.src="https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png";
    
    }
})


$discordBannerThirdWinner.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains('discord-banner-winners-third')){
        const id = target.dataset.id;
        $myImg.src="https://cdn.rtfkt.com/assets/images/creatorChallenge/creator3.png";
    }
})
$discordBannerThirdWinner.addEventListener("mouseleave", (event) => {
    let target = event.target;
    if (target.classList.contains('discord-banner-winners-third')){
        const id = target.dataset.id;
        $myImg.src="https://cdn.rtfkt.com/assets/images/creatorChallenge/creator1.png";
    }
})

