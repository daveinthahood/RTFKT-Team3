const $span = document.querySelector(".pic");
const $span1 = document.querySelector(".pic1");
const $span2 = document.querySelector(".pic2");
const $span3 = document.querySelector(".pic3");
const $span4 = document.querySelector(".pic4");
const $span5 = document.querySelector(".pic5");
const $span6 = document.querySelector(".pic6");
const $span7 = document.querySelector(".pic7");
const $span8 = document.querySelector(".pic8");
const $myPic = document.getElementById('picHover');
const $myPic1 = document.getElementById('picHover1'); 
const $myPic2 = document.getElementById('picHover2');
const $myPic3 = document.getElementById('picHover3'); 
const $myPic4 = document.getElementById('picHover4');
const $myPic5 = document.getElementById('picHover5'); 
const $myPic6 = document.getElementById('picHover6');
const $myPic7 = document.getElementById('picHover7'); 
const $myPic8 = document.getElementById('picHover8'); 

// prima immagine 
$span.addEventListener("mouseover", (event) => {
    const target = event.target;
    if(target.classList.contains("pic")){
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/creator.gif";   
    }
})

$span.addEventListener("mouseleave", (event) => {
        $myPic.style.display= "none";   

})

$span.addEventListener('mousemove', (event) => {
    $myPic.style.display = "inherit";
    $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/creator.gif";   
    $myPic.style.top =`${event.clientY/-10}px` ;
    $myPic.style.left = `${event.clientX/100}px`;
    console.log(event.clientY,event.clientX);
    $myPic.style.zIndex = "1";
    $myPic.style.opacity = "1";
  })


// Seconda Immagine 
$span1.addEventListener("mouseover", (event) => {
    const target = event.target;
    if(target.classList.contains("pic1")){
        $myPic1.src="https://cdn.rtfkt.com/assets/whoarewe/RTFKT.png";   
    }
})

$span1.addEventListener("mouseleave", (event) => {
    $myPic1.style.display= "none";  
})

$span1.addEventListener('mousemove', (event) => {
    $myPic1.style.display = "inherit";
    $myPic1.src="https://cdn.rtfkt.com/assets/whoarewe/RTFKT.png";   
    $myPic1.style.top =`${event.clientY/-10}px` ;
    $myPic1.style.left = `${event.clientX/ -20}px`;
    console.log(event.clientY,event.clientX);
    $myPic1.style.zIndex = "1";
    $myPic1.style.opacity = "1";
  })


// Terza Immagine
$span2.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic2")){
        $myPic2.src="https://cdn.rtfkt.com/assets/whoarewe/game-engine.png";   
    }
})
$span2.addEventListener("mouseleave", (event) => {
    $myPic2.style.display= "none";  
})

$span2.addEventListener('mousemove', (event) => {
    $myPic2.style.display = "inherit";
    $myPic2.src="https://cdn.rtfkt.com/assets/whoarewe/game-engine.png";   
    $myPic2.style.top =`${event.clientY/-10}px` ;
    $myPic2.style.left = `${event.clientX/ -20}px`;
    console.log(event.clientY,event.clientX);
    $myPic2.style.zIndex = "1";
    $myPic2.style.opacity = "1";
  })





// Quarta Immagine
$span3.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic3")){
        $myPic3.src="https://cdn.rtfkt.com/assets/whoarewe/clonex-nft.png";   
    }
})
$span3.addEventListener("mouseleave", (event) => {
    $myPic3.style.display= "none";  
})

$span3.addEventListener('mousemove', (event) => {
    $myPic3.style.display = "inherit";
    $myPic3.src="https://cdn.rtfkt.com/assets/whoarewe/clonex-nft.png";   
    $myPic3.style.top =`${event.clientY/-10}px` ;
    $myPic3.style.left = `${event.clientX/ -10}px`;
    console.log(event.clientY,event.clientX);
    $myPic3.style.zIndex = "1";
    $myPic3.style.opacity = "1";
  })





// Quinta Immagine 
$span4.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic4")){
        $myPic4.src="https://cdn.rtfkt.com/assets/whoarewe/blockchain.png";   
    }
})
$span4.addEventListener("mouseleave", (event) => {
    $myPic4.style.display= "none";  
})
$span4.addEventListener('mousemove', (event) => {
    $myPic4.style.display = "inherit";
    $myPic4.src="https://cdn.rtfkt.com/assets/whoarewe/blockchain.png";   
    $myPic4.style.top =`${event.clientY/-10}px` ;
    $myPic4.style.left = `${event.clientX/0}px`;
    console.log(event.clientY,event.clientX);
    $myPic4.style.zIndex = "1";
    $myPic4.style.opacity = "1";
  })



// Sesta Immagine
$span5.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic5")){
        $myPic5.src="https://cdn.rtfkt.com/assets/whoarewe/augmented-reality.png";   
    }
})
$span5.addEventListener("mouseleave", (event) => {
    $myPic5.style.display= "none";  
})
$span5.addEventListener('mousemove', (event) => {
    $myPic5.style.display = "inherit";
    $myPic5.src="https://cdn.rtfkt.com/assets/whoarewe/augmented-reality.png";   
    $myPic5.style.top =`${event.clientY/-30}px` ;
    $myPic5.style.left = `${event.clientX/100}px`;
    console.log(event.clientY,event.clientX);
    $myPic5.style.zIndex = "1";
    $myPic5.style.opacity = "1";
  })



// SEttima Immagine
$span6.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic6")){
        $myPic6.src="https://cdn.rtfkt.com/assets/whoarewe/manufacturing.png";   
    }
})
$span6.addEventListener("mouseleave", (event) => {
    $myPic6.style.display= "none";  
})
$span6.addEventListener('mousemove', (event) => {
    $myPic6.style.display = "inherit";
    $myPic6.src="https://cdn.rtfkt.com/assets/whoarewe/manufacturing.png";   
    $myPic6.style.top =`${event.clientY/-10}px` ;
    $myPic6.style.left = `${event.clientX/100}px`;
    console.log(event.clientY,event.clientX);
    $myPic6.style.zIndex = "1";
    $myPic6.style.opacity = "1";
  })



// Ottava Immagine
$span7.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic7")){
        $myPic7.src="https://cdn.rtfkt.com/assets/whoarewe/sneakers.png";   
    }
})
$span7.addEventListener("mouseleave", (event) => {
    $myPic7.style.display= "none";  
})
$span7.addEventListener('mousemove', (event) => {
    $myPic7.style.display = "inherit";
    $myPic7.src="https://cdn.rtfkt.com/assets/whoarewe/sneakers.png";   
    $myPic7.style.top =`${event.clientY /200}px` ;
    $myPic7.style.left = `${event.pageX / 100}px`;
    console.log(event.clientY,event.clientX);
    $myPic7.style.zIndex = "1";
    $myPic7.style.opacity = "1";
  })





// Nona Immagine 
$span8.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic8")){
        $myPic8.src="https://cdn.rtfkt.com/assets/whoarewe/digital-artefacts.png";   
    }
})
$span8.addEventListener("mouseleave", (event) => {
    $myPic8.style.display= "none";  
})
$span8.addEventListener('mousemove', (event) => {
    $myPic8.style.display = "inherit";
    $myPic8.src="https://cdn.rtfkt.com/assets/whoarewe/digital-artefacts.png";   
    $myPic8.style.top =`${event.clientY / 200}px` ;
    $myPic8.style.left = `${event.clientX/100}px`;
    console.log(event.clientY,event.clientX);
    $myPic8.style.zIndex = "1";
    $myPic8.style.opacity = "1";
  })


