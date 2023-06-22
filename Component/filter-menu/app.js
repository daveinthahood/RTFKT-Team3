const $menu = document.querySelector(".aside");

document.addEventListener("click",(event) =>{
    const target = event.target;

    if (target.classList.contains("button--hide")){
        $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
    }

    if(target.classList.contains("clear")){
        console.log("clear")
    } 

    if(target.classList.contains("show")){
        console.log("show")
    }
}
)