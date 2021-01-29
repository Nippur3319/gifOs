let apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let trendingContainer = document.getElementById("trending-dinamic-container");


// Muestra por pantalla los GIF trending del momento con el endpoint de Giphy
const getGiphyTrendings = async () => {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=4&rating=g`;
    const resp = await fetch(url);
    const giphyTrendings = await resp.json();
    console.log(giphyTrendings);
    
    addToDom(giphyTrendings);
    
};

function addToDom (giphyResults) {
    

    for (let i = 0; i < giphyResults.data.length; i++) {
        
        
        let gif = document.createElement("img");
        gif.className = "trending-gif-img"
        gif.src = giphyResults.data[i].images.fixed_width.url
        trendingContainer.appendChild(gif);
        ;
    }

}

// Se llama a getGiphyTrendings() al cargar la pagina
window.onload = () => {
    getGiphyTrendings();
  
  }