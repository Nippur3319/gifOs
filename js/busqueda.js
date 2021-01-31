//const apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let contenedorSugerencias = document.getElementById("contenedor_sugerencias");
let terminoBuscado = document.getElementById("input_busqueda");
let botonLupa = document.getElementById("boton_lupa")
let lupaClickeada = false

// falta programar que cuando se presione enter se ejecute el renderizado de los gif encontrados

function cerrarSugerencias() {
    if (lupaClickeada) {
        terminoBuscado.value = ""
        contenedorSugerencias.style.display= "none"
    }
}




// Muestra las sugerencias, se ejecuta al producirse el onkeypress en HTML
const getSugerencias = async () => {
    // para que se dispare el fetch tiene que ser mayor o igual a 3 caracteres
    if (terminoBuscado.value.length >= 3) {
        let url = `https://api.giphy.com/v1/tags/related/${terminoBuscado.value}?api_key=${apiKey}`;
        const respSugerencias = await fetch(url);
        const sugerencias = await respSugerencias.json();
        // muestro el contenedor de sugerencias que estaba en display none
        contenedorSugerencias.style.display= "block"
        addToDomSugerencias(sugerencias);
    } 
};





function addToDomSugerencias(sugerencias) {
    contenedorSugerencias.innerHTML = ""
    lupaClickeada = true;
    for (let i = 0; i < sugerencias.data.length; i++) {
        // asigno en la iteración cada sugerencia del array a la variable sugerencia
        let sugerencia = sugerencias.data[i].name;
        //cambia la lupa por la equis
        botonLupa.style.background = "url(../img/close.svg) no-repeat"
        //rellena dinamicamente las sugerencias
        contenedorSugerencias.innerHTML += `
        <div>
            <div class="lupa-sugerencia">
                <img src="../img/icon-search.svg" style="height:15.8px;opacity:70%">
            </div>
            <div class="txt-sugerencia" 
            id="txt-sugerencia${i}"
            onclick="ejecutarBusqueda('${sugerencia}')">
                ${sugerencia}
            </div>
        </div>`;
        
    };
};


async function ejecutarBusqueda(termino) {
    // ya funciona bien trae el array falta llenar el dom
    terminoBuscado.value = termino;
    cerrarSugerencias();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q='${termino}'&limit=&offset=0&rating=g&lang=es`
    
    const resBusqueda = await fetch(url);
    const resultadoBusqueda = await resBusqueda.json();

    console.log(resultadoBusqueda); // para probarlo

}