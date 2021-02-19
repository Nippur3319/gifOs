let arrayFavoritos = [];

function agregarFavoritos(i,id,username,title,url) {
    
    let idIcon= "icon-fav-"+i;
    console.log(idIcon)
    let iconFav = document.getElementById(idIcon)


       // si esta desactivado, lo agrega al array, agrega el array al localstorage y cambia la clase para que se cambie el fondo
       if (iconFav.className === "icon-fav-desactivado") {

        let favorito = {
            id : id,
            username : username,
            title : title,
            url : url
        }
        arrayFavoritos.push(favorito);
        localStorage.setItem("favoritoLocalStorage", JSON.stringify(arrayFavoritos));	
        iconFav.className ='icon-fav-activo';

       } else {
           // si ya estaba activado, lo desactiva y lo quita del array
        iconFav.className = "icon-fav-desactivado"
       }
    
 
	
		
	//iconFav.className = 'icon-fav desactivado'




}