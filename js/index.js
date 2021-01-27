/* DECLARACIONES */
const logoGifos = document.getElementById('logo');

const menuHamburguesa = document.getElementById('menu_hamburguesa');
let imgHamburguesa = document.getElementById('img_hamburguesa');
let srcImgHamburguesa = imgHamburguesa.getAttribute('src');


const menuDesplegado = document.getElementById('menu_desplegado');



/* MENU HAMBURGUESA
/* al presionar sobre el menu se invoca a una callback que toglea la clase invisible que oculta el elemento */
menuHamburguesa.addEventListener('click',
   () => {
        menuDesplegado.classList.toggle('invisible');
            // cambia el src de la imagen de la hamburguesa
        if (srcImgHamburguesa === './img/burger.svg') {
            // esto funciona bien, cambia el atributo src con el string
            imgHamburguesa.setAttribute('src',"./img/close.svg")
        } else {
            imgHamburguesa.setAttribute('src',"./img/burger.svg")
        }
        srcImgHamburguesa = imgHamburguesa.getAttribute('src')
    }
);

