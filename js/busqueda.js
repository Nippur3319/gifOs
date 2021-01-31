//const apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let contenedorSugerencias = document.getElementById("contenedor_sugerencias");
let terminoBuscado = document.getElementById("input_busqueda");

// falta programar que con cada tecleado dentro del input se disparen las sugerencias y que cuando se presione enter se ejecute el renderizado de los gif encontrados




// Muestra las sugerencias
const getSugerencias = async () => {

    if (terminoBuscado.value.length >= 3) {

        let url = `https://api.giphy.com/v1/tags/related/${terminoBuscado.value}?api_key=${apiKey}`;
     
        const respSugerencias = await fetch(url);
        const sugerencias = await respSugerencias.json();
     
        contenedorSugerencias.style.display= "block"
        addToDomSugerencias(sugerencias);
    } 

 
};


    



function addToDomSugerencias(sugerencias) {
    contenedorSugerencias.innerHTML = ""
    for (let i = 0; i < sugerencias.data.length; i++) {
        
        let sugerencia = sugerencias.data[i].name;

        console.log('la sugerencia es '+ sugerencia)
        contenedorSugerencias.innerHTML += `<img src="../img/icon-search.svg" style="height:15.8px;opacity:80%">${sugerencia}<br>`;
        
    }
}