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

// prima immagine 
$span.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/creator.gif";   
    }
})

$span.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})

$span.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
  })


// Seconda Immagine 
$span1.addEventListener("mousemove", (event) => {
    const target = event.target;
    if(target.classList.contains("pic1")){
        const id = target.dataset.id;
        $myPic.src="https://cdn.rtfkt.com/assets/whoarewe/RTFKT.png";   
    }
})
$span1.addEventListener("mouseleave", (event) => {
    const target = event.target;
    if(target.classList.contains("pic1")){
        const id = target.dataset.id;
        $myPic.src="";   
    }
})

$span1.addEventListener('mousemove', (event) => {
    const cursor = document.querySelector('#picHover');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    cursor.style.zIndex = "1";
    cursor.style.opacity = "1";
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

