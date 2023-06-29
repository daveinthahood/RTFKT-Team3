const $card = document.querySelector(".section__shop__card");
const $vid = document.querySelector("video");

document.addEventListener("mouseover", (event) => {
    const target= event.target;
    if(target.classList.contains("section__shop__card")){
      $vid.play();  
    }
    
});

document.addEventListener("mouseout", (event) => {
    const target= event.target;
    if(target.classList.contains("section__shop__card")){
      $vid.pause();  
    }


});