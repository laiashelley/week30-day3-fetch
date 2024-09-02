document.getElementById("botonGato").addEventListener("click", () => {

    const catApi = `https://api.thecatapi.com/v1/images/search?api_key=live_UqY2BXVOYxXp7GTKDObnuhHliFwhizO7K7AxVGSVOjjWD2A3FrwPKq8Dby8tca06`;

    fetch(catApi)
        .then((response) => response.json())
        .then((data) => {

            const imageURL = data[0].url;

            const imagenGato = document.getElementById("imagenGato");
            imagenGato.innerHTML = `<img src="${imageURL}" alt="RandomCat">`;

        })

    .catch((err) => console.log(err));

});

document.getElementById("botonRaza").addEventListener("click", () => {

    const catApi = `https://api.thecatapi.com/v1/breeds/search?qapi_key=live_UqY2BXVOYxXp7GTKDObnuhHliFwhizO7K7AxVGSVOjjWD2A3FrwPKq8Dby8tca06has_breeds=1`;

    fetch(catApi)
        .then((response) => response.json())
        .then((data) => {

            const razaURL = data[0].name;

            const razaDelGato = document.getElementById("razaGato");
            razaDelGato.innerHTML = razaURL.toUpperCase();
        
        })

    .catch((err) => console.log(err));

});