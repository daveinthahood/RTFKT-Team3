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
const $myPic8 = document.getElementById('picHover'); 

// prima immagine 
$span.addEventListener("mousemove", (event) => {
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
    $myPic.style.top =`${event.clientX/100}px` ;
    $myPic.style.left = `${event.clientY/100}px`;
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
    $myPic1.style.top =`${event.clientX/100}px` ;
    $myPic1.style.left = `${event.clientY/100}px`;
    console.log(event.clientY,event.clientX);
    $myPic1.style.zIndex = "1";
    $myPic1.style.opacity = "1";
  })


// Terza Immagine
$span2.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic2")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/game-engine.png";   
    }
})
$span2.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic2")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span2.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })




// Quarta Immagine
$span3.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic3")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/clonex-nft.png";   
    }
})
$span3.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic3")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span3.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })




// Quinta Immagine 
$span4.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic4")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/blockchain.png";   
    }
})
$span4.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic4")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span4.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })


// Sesta Immagine
$span5.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic5")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/augmented-reality.png";   
    }
})
$span5.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic5")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span5.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })



// SEttima Immagine
$span6.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic6")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/manufacturing.png";   
    }
})
$span6.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic6")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span6.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })



// Ottava Immagine
$span7.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic7")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/sneakers.png";   
    }
})
$span7.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic7")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span7.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })




// Nona Immagine 
$span8.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic8")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/digital-artefacts.png";   
    }
})
$span8.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic8")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})
$span8.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })

