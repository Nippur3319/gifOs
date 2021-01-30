let apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let trendingDinamicContainer = document.getElementById("trending-dinamic-container");

let trendingTermsTxt = document.getElementById("trending_terms_txt");



// Muestra los términos de búsqueda tendencia
const getTrendingTerms = async () => {
    let url = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;
    const respTt = await fetch(url);
    const trendingTerms = await respTt.json();
    console.log('los trending terms son: ' + trendingTerms.data[0]);
    
    addToDomTrendingTerms(trendingTerms);
    
};

// Los agrego al DOM con una iteración
function addToDomTrendingTerms(trendingTerms) {
    for (let i = 0; i < 5; i++) {
        
        let trendingTerm = trendingTerms.data[i]
        
        trendingTermsTxt.innerHTML += trendingTerm + " - ";
    }
}


// Muestra los GIF tendencia del momento con el endpoint de Giphy
const getGiphyTrendings = async () => {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5&rating=g`;
    const resp = await fetch(url);
    const giphyTrendings = await resp.json();
    console.log(giphyTrendings);
    
    addToDom(giphyTrendings);
    
};


// Los agrego al DOM con una iteración
function addToDom (giphyResults) {
    

    for (let i = 0; i < giphyResults.data.length; i++) {
        //tratando de recortar el titulo hasta GIF
        
        let titulo = giphyResults.data[i].title
        
        //trendingTermsTxt.innerHTML += cortarTitulo(titulo) + " - "
        
        let gif = document.createElement("img");
        gif.className = "trending-gif-img"
        gif.src = giphyResults.data[i].images.fixed_width.url
        trendingDinamicContainer.appendChild(gif);
    
    }

}

// extraigo el título del gif hasta la encontrar la cadena "GIF"
function cortarTitulo (titulo) {
    let indiceHastaGet = titulo.search("GIF")
    let tituloCortado =  titulo.slice(0,indiceHastaGet)
    return tituloCortado
}


// Se llama a getGiphyTrendings() al cargar la pagina
window.onload = () => {
    getGiphyTrendings();
    getTrendingTerms();
  
  }