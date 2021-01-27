/* DECLARACIONES */
const logoGifos = document.getElementById('logo');

const menuHamburguesa = document.getElementById('menu_hamburguesa');

const menuDesplegado = document.getElementById('menu_desplegado');



/* MENU HAMBURGUESA */

/* al presionar sobre el menu se invoca a una callback que toglea la clase invisible que oculta el elemento */
menuHamburguesa.addEventListener('click',
   () => {
        menuDesplegado.classList.toggle('invisible');
    }
)

