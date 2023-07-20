
const getPokemons = async () => {
    const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon/?limit=200";
    const response = await fetch(pokemonsUrl);
    const pokemonList = await response.json();

    pokemonList.results.forEach((pokemon) => {
        const url = pokemon.url;
        const segments = url.split("/");
        number = segments[segments.length - 2];

        const mainElement = document.getElementById("main");
        const cardElement = document.createElement("div");
        cardElement.classList.add("pokemon-card");
        mainElement.appendChild(cardElement);

        const frontElement = document.createElement("div");
        frontElement.classList.add("front");
        cardElement.appendChild(frontElement);

        const titleElement = document.createElement("h3");
        titleElement.textContent = `${pokemon.name} #${number}`;
        frontElement.appendChild(titleElement);

        const imgElement = document.createElement("img");
        imgElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
        imgElement.alt = pokemon.name;
        frontElement.appendChild(imgElement);

        const backElement = document.createElement("div");
        backElement.classList.add("back");
        cardElement.appendChild(backElement);

        const infoElement = document.createElement("p");
        infoElement.textContent = pokemon.name;
        backElement.appendChild(infoElement);

        frontElement.addEventListener("click", getPkmstats = async () => {
            const url = pokemon.url;
            const segments = url.split("/");
            number = segments[segments.length - 2];
            const pokemonStatsUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;
            const response2 = await fetch(pokemonStatsUrl);
            const pokemonStats = await response2.json();

            const backTitleElement = document.createElement("p");
            backElement.appendChild(backTitleElement);
            backTitleElement.classList.add("abilities_title");
            backTitleElement.textContent = "Abilities :";

            setTimeout(() => {
                backTitleElement.textContent = "";
            }, 3000);

            pokemonStats.abilities.forEach(element => {
                const abilitiesElement = document.createElement("p");
                abilitiesElement.classList.add("abilities");
                backElement.appendChild(abilitiesElement);
                abilitiesElement.textContent = element.ability.name;
                setTimeout(() => {
                    abilitiesElement.textContent = "";
                }, 3000);
            });
        } )



    });

    const cards = document.querySelectorAll(".pokemon-card");
    // Sans setTimeout

    //     cards.forEach((card) => {
    //         card.addEventListener("click", () => {
    //         card.classList.toggle("flipped");
    //     });
    // });

    // Avec setTimeout
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("flipped");
            // Supprimer la classe "flipped" après 5 secondes
            setTimeout(() => {
                card.classList.remove("flipped");
            }, 3000);
        });
    });



};

getPokemons();
