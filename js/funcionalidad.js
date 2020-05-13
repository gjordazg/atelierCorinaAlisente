//Funcion Slice de la barra de menu
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

//Funcion modal para la galeria de imagenes
let imagenes = document.querySelectorAll('.img-galeria');
let modal = document.querySelector('#modal');
let img = document.querySelector('#img-modal');
let boton = document.querySelector('#modal-btn');

for(let i = 0; i < imagenes.length; i++){
imagenes[i].addEventListener('click', function(e){
modal.classList.toggle("modal-open");
let src = e.target.src;
img.setAttribute("src", src);
});
}

boton.addEventListener('click', function(){
modal.classList.toggle("modal-open"); // La palabra clave toggle funciona como un interruptors
});