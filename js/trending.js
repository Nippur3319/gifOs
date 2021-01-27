let apiKey = "SLANiqAne2Dq6vVtpS4j9ZOSnERNk2Ly"
let container = document.getElementById("contenedor_gifos");


// Muestra por pantalla los GIF trending del momento con el endpoint de Giphy
const getGiphyTrendings = async () => {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5&rating=g`;
    const resp = await fetch(url);
    const giphyTrendings = await resp.json();
    console.log(giphyTrendings);
    
    addToDom(giphyTrendings);
    
};

function addToDom (giphyResults) {
    

    for (let i = 0; i < giphyResults.data.length; i++) {
        let subcontainer = document.createElement("div")
        subcontainer.className = "subcontainer"
        let title = document.createElement("p");
        title.textContent = giphyResults.data[i].title;
        let gif = document.createElement("img");
        gif.className = "gif-img"
        gif.src = giphyResults.data[i].images.fixed_width_small.url
        container.appendChild(subcontainer)
        subcontainer.appendChild(title);
        subcontainer.appendChild(gif);
    }

}
