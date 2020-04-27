const btnMenu = document.getElementById("btn_menu");
btnMenu.addEventListener("click", mostrarMenu);
let vista = false;

function mostrarMenu(){
    let menu = document.getElementById("boxMenu");
    if (!vista){
        menu.classList.add("mostrar");
        menu.classList.remove("hide");
        vista = true;
    } else{
        menu.classList.remove("mostrar");
        menu.classList.add("hide");
        vista = false;
    }
}