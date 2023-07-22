function startScript() {
    // On récuperer le button shiny dans le DOM
    const shinyButtons = document.querySelectorAll(".shiny_button");

    // Fonction pour le boutton shiny => quand je clique dessus l'image change
    shinyButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const imgElement = document.querySelectorAll(".pokemon_img_front")[index];
        const imgSrc1 = pokemonsData[index].sprites.regular;
        const imgSrc2 = pokemonsData[index].sprites.shiny;
  
        if (imgElement.src === imgSrc1) {
          imgElement.src = imgSrc2;
          button.textContent = "Normal";
        } else {
          imgElement.src = imgSrc1;
          button.textContent = "Shiny";
        }
      });
    });

    // On récupère les div pokemon_div
    const pokemonDivs = document.querySelectorAll(".pokemon_div"); 

    // Fonction pour créer la div
    function createInfoDiv(pokemon) {
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("pokemon_info");
  
      const types = pokemon.types.map((type) => type.name).join(", ");
      const talents = pokemon.talents.map((talent) => talent.name).join(", ");
  
        infoDiv.innerHTML = `<p>Nom: ${pokemon.name.fr}</p>
                            <p>Type: ${types}</p>
                            <p>Talents: ${talents}</p>
                            <p>Hauteur: ${pokemon.height}</p>
                            <p>Poids: ${pokemon.weight}</p>
                            <p>Stats:</p>
                            <ul>
                            <li>HP: ${pokemon.stats.hp}</li>
                            <li>Attaque: ${pokemon.stats.atk}</li>
                            <li>Défense: ${pokemon.stats.def}</li>
                            <li>Attaque Spéciale: ${pokemon.stats.spe_atk}</li>
                            <li>Défense Spéciale: ${pokemon.stats.spe_def}</li>
                            <li>Vitesse: ${pokemon.stats.vit}</li>
                            </ul>
                            <button class="photo_button">Photo</button>`;
                           console.log(infoDiv);
      return infoDiv;
    }
    
    pokemonDivs.forEach((pokemonDiv, index) => {
        let isFlipped = false;
    
        const infoButton = pokemonDiv.querySelector(".info_button");
        infoButton.addEventListener("click", () => {
            if (!isFlipped) {
            // Vérifier si l'élément d'information supplémentaire est déjà présent
            let infoDiv = pokemonDiv.querySelector(".pokemon_info");
            
            if (!infoDiv) {
                // Créer l'élément d'information supplémentaire et l'ajouter au Pokémon correspondant
                const pokemon = pokemonsData[index];
                 infoDiv = createInfoDiv(pokemon);
                setTimeout(() => {
                    pokemonDiv.appendChild(infoDiv);
                }, 500); // Vous pouvez ajuster le délai selon vos préférences
            }
            pokemonDiv.classList.add("flipped");
            isFlipped = true;
            } else {
            // Supprimer l'élément d'information supplémentaire et rétablir la carte à son état normal
                const infoDiv = pokemonDiv.querySelector(".pokemon_info");
                if (infoDiv) {
                    pokemonDiv.removeChild(infoDiv);
                }
                pokemonDiv.classList.remove("flipped");
                isFlipped = false;
            }
        });
    });
  }
  
  startScript();