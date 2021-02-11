let arrayFavoritos = [];

function agregarFavoritos(i,id,username,title,url) {
    
    let idIcon= "icon-fav-"+i;
    console.log(idIcon)
    let iconFav = document.getElementById(idIcon)


       // toglea la clase desactivado para cambiar el fondo
       iconFav.className ='icon-fav-activo';
    
 
    let favorito = {
        id : id,
        username : username,
        title : title,
        url : url
    }

    
    arrayFavoritos.push(favorito);
    
    




}