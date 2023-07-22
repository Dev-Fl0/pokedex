function startScript() {

  const shinyButtons = document.querySelectorAll(".shiny_button");
  const infoButtons = document.querySelectorAll(".info_button");

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

  infoButtons.forEach((button, index) => {
    let isFlipped = false;
    button.addEventListener("click", () => {
      const cardpokemon = document.querySelectorAll(".pokemon_card")[index];
      const pokemonDiv = document.querySelectorAll(".pokemon_div")[index];

      if (!isFlipped) {
        let infoDiv = pokemonDiv.querySelector(".pokemon_info");

        if (!infoDiv) {
          cardpokemon.classList.add("flipped");
          const pokemonInfos = document.createElement("div");
          pokemonInfos.classList.add("pokemon_info");

          const pokemon = pokemonsData[index];
          infoDiv = createInfoDiv(pokemon);
          pokemonInfos.appendChild(infoDiv);
          pokemonDiv.appendChild(pokemonInfos);
          isFlipped = true;
        } else {
          const infoDiv = pokemonDiv.querySelector(".pokemon_info");
          if (infoDiv) {
            pokemonDiv.removeChild(infoDiv);
          }
          pokemonDiv.classList.add("card-flipped-back"); // Ajoute la classe pour afficher la carte à l'envers
          isFlipped = false;
        }
      }
    });
  });

  function createInfoDiv(pokemon) {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("pokemon_info");

    const types = pokemon.types.map((type) => type.name).join(", ");
    const talents = pokemon.talents.map((talent) => talent.name).join(", ");

    infoDiv.innerHTML = `<p class="stats">Nom: ${pokemon.name.fr}</p>
                        <p class="stats">Type: ${types}</p>
                        <p class="stats">Talents: ${talents}</p>
                        <p class="stats">Hauteur: ${pokemon.height}</p>
                        <p class="stats">Poids: ${pokemon.weight}</p>
                        <p class="stats">Stats:</p>
                        <ul class="stats">
                          <li>HP: ${pokemon.stats.hp}</li>
                          <li>Attaque: ${pokemon.stats.atk}</li>
                          <li>Défense: ${pokemon.stats.def}</li>
                          <li>Attaque Spéciale: ${pokemon.stats.spe_atk}</li>
                          <li>Défense Spéciale: ${pokemon.stats.spe_def}</li>
                          <li>Vitesse: ${pokemon.stats.vit}</li>
                        </ul>
                        <div class="div_buttonBack stats">
                          <button class="photo_button">Retour</button>
                        </div>`;

    return infoDiv;
  }
}

startScript();
