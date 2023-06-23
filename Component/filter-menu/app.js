const $menu = document.querySelector(".aside");
const $creators = document.querySelector(".creators");
const $categories = document.querySelector(".categories");
const $btnHide = document.querySelector(".button--hide");

$btnHide.addEventListener('click', () => {
    $menu.style.display = $menu.style.display === "flex" ? "none" : "flex";
})

document.addEventListener("click",(event) =>{
    const target = event.target;
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