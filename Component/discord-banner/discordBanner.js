const $discordBannerFirstWinner = document.querySelector(".discord-banner-winner-first");
const $discordBannerSecondWinner = document.querySelector(".discord-banner-winners-second"); //  elemento su cui inserire l'hover
const $discordBannerThirdWinner = document.querySelector(".discord-banner-winners-third"); // elemento su cui inserire l'hover
const $discordBannerCenterImg = document.querySelector(".discord-banner-center-image"); // dove cambiare immagine
const $creator1 = document.querySelector(".creator");  // primo creator pic
const $creator2 = document.querySelector(".creator2"); // secondo creator pic
const $creator3 = document.querySelector(".creator3"); // terzo creator pic 


//creo l'event listner sul banner numero 2 
$discordBannerSecondWinner.addEventListener('mouseover', () => {

    $discordBannerCenterImg.innerHTML = $creator2;
    console.log("funciont");
})

$discordBannerSecondWinner.addEventListener('mouseleave', () => {
    
    $discordBannerCenterImg.innerHTML = $creator1;

    console.log("CIAO 2");
})


//creo l'event listner sul banner numero 3
$discordBannerThirdWinner.addEventListener('mouseover', () => {
    
    $discordBannerCenterImg.innerHTML = $creator3;
    console.log("OK");
})

$discordBannerThirdWinner.addEventListener('mouseleave', () => {
   
    $discordBannerCenterImg.innerHTML = $creator1;
    console.log("CIAO3");
})


