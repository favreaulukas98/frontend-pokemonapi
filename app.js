function handleKeyPress(e){ 
    var key=e.keyCode || e.which; 
    if (key==13){ 
        retrievePokemon();
    } 
} 
const retrievePokemon = async () => {
    const name = document.getElementById('pokemon-name').value.toLowerCase().trim('');
    let rawData = {};
    const labelError =  document.getElementById('label-error');
    labelError.className = 'ocultar';
    if (name) {
        try {
            rawData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

            displayImage(rawData.data.sprites.front_default);
        } catch (error) {
            const labelError =  document.getElementById('label-error');
            labelError.innerHTML = 'Lo ingresado es incorrecto ' + error;
            labelError.className = 'mostrar';
            console.error(error)
        }
    }

}

const showStats = stats => {

}

const displayImage = url => {
    // crear nodo tipo img
    const imgElement = document.createElement('img');
    // agregar atributos
    imgElement.setAttribute('src', url);
    imgElement.setAttribute('width', '200');
    imgElement.setAttribute('height', '200');
    // obtener elemento del DOM
    const divImg= document.getElementById('img-pokemon');
    // agregar el nodo imagen a el div
    divImg.appendChild(imgElement);
}

window.onload = () => {
    document.getElementById('get-pokemons').addEventListener('click', retrievePokemon);
}
