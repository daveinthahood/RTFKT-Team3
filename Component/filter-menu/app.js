const $menu = document.querySelector(".aside");
const $creators = document.querySelector(".creators")
const $categories = document.querySelector(".categories")

document.addEventListener("click",(event) =>{
    const target = event.target;

    if (target.classList.contains("button--hide")){
        $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
    }

    if(target.classList.contains("clearcategories")){
        console.log("clear")
        $categories.style.display = "none";
    } 

    if(target.classList.contains("showcategories")){
        console.log("show")
        $categories.style.display = "flex"
    }

    if(target.classList.contains("clearcreators")){
        console.log("clear")
        $creators.style.display = "none";
    } 

    if(target.classList.contains("showcreators")){
        console.log("show")
        $creators.style.display = "flex"
    }
}
)