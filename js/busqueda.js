//const apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let contenedorSugerencias = document.getElementById("contenedor_sugerencias");
let terminoBuscado = document.getElementById("input_busqueda");
let botonLupa = document.getElementById("boton_lupa");
let lupaClickeada = false;
let h2TerminoBuscado = document.getElementById("h2_termino_buscado");
let gifsEncontrados = document.getElementById("gifs_encontrados");
let btnVerMas = document.getElementById("btn_ver_mas");
let offset = 0;




// Muestra las sugerencias, se ejecuta al producirse el onkeypress en HTML
const getSugerencias = async () => {
    // para que se dispare el fetch tiene que ser mayor o igual a 2 caracteres
    if (terminoBuscado.value.length >= 2) {
        let url = `https://api.giphy.com/v1/tags/related/${terminoBuscado.value}?api_key=${apiKey}`;
        const respSugerencias = await fetch(url);
        const sugerencias = await respSugerencias.json();
        // muestro el contenedor de sugerencias que estaba en display none
        contenedorSugerencias.style.display= "block"
        addToDomSugerencias(sugerencias);
    } 
    
};


// Chequeo que se haya presionado enter en input_busqueda y en caso afirmativo disparo la busqueda directamente
function chkEnter(event) {
    var x = event.key;
    if (x === "Enter") {
        
        if (input_busqueda.value === "") {
            alert('ingrese un término de búsqueda') // resupuesta provisoria
        } else {
            cerrarSugerencias();
            cerrarBusquedaAnterior();
            ejecutarBusqueda(input_busqueda.value);


                /// recordar volver el offset a cero al ejecutar una nueva búsqueda

        }
        
    };
}



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
    
    console.log("término: " + termino);
    
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${termino}&limit=12&offset=${offset}&rating=g&lang=es`
    
    console.log("url: " + url);


    const resBusqueda = await fetch(url);
    const resultadoBusqueda = await resBusqueda.json();
    
    if (resultadoBusqueda.data.length === 0 ) {
        alert("su búsqueda no trajo resultados")
    }
    
    h2TerminoBuscado.innerHTML = `${termino}`
    
    console.log(resultadoBusqueda); // para control
    
    addToDomResultadoBusqueda(resultadoBusqueda);
    
}

// con el array completa dinamicamente el DOM
function addToDomResultadoBusqueda(resultadoBusqueda) {
        btnVerMas.style.display = "flex";
    
    
    //traigo los primeros 12 resultados
    for (let i = 0; i < 12; i++) {
        
/*         let cardDiv = document.createElement("div");
        cardDiv.className = "card-div"
        gifsEncontrados.appendChild(cardDiv);
        
        let gifResultadoImg = document.createElement("img");
        gifResultadoImg.className = "gif-resultado-img"
        gifResultadoImg.src = resultadoBusqueda.data[i].images.fixed_width.url;
        gifsEncontrados.appendChild(gifResultadoImg) */
        
        let cardDiv = document.createElement("div");
        gifsEncontrados.appendChild(cardDiv)
        cardDiv.innerHTML = `
        
        <div class="div-imagen">
            <div class="card-layer">
                <div class="card-icons">
                    <div class="card-icon">
                        <img id="icon-fav" src="./img/icon-fav.svg" alt="fav">
                    </div>
                    <div class="card-icon">
                        <img id="icon-download" src="./img/icon-download.svg" alt="fav">
                    </div>
                    <div class="card-icon">
                        <img id="icon-max" src="./img/icon-max-normal.svg" alt="fav">
                    </div>
                    
                </div>
                <div class="card-titles">
                    <p id="gif-user">${resultadoBusqueda.data[i].user.username}</p>
                    <p id="gif-title">${resultadoBusqueda.data[i].title}</p>
                </div>
                
            </div>
            <img class="gif-desvanecer" src="${resultadoBusqueda.data[i].images.fixed_width.url}" />
        </div>    
            
                
        
        
        `

        
    }
    
}


function cerrarSugerencias() {
    if (lupaClickeada) {
        //terminoBuscado.value = ""
        contenedorSugerencias.style.display= "none"
        botonLupa.style.background = "url(../img/icon-search.svg) no-repeat"
    }
}

function cerrarBusquedaAnterior() {
    gifsEncontrados.innerHTML = "";
}


btnVerMas.addEventListener('click', (e)=>{
    
    offset++;
    // lo mejor sería enviar el parametro a ejecutarbusqueda
    ejecutarBusqueda(terminoBuscado.value)
})