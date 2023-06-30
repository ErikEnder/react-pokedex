import { Region, PokemonStorage } from "types";

// Function for parsing ID out of API URL
function getPokemonId(url: string) {
  // Splitting on the 6th instance of '/' as the URL should be nearly identical for every call
  const id = url.split(/\//)[6];
  return Number(id);
}

/**
 * Sorts Pokemon per Region by ID number
 * ID number is parsed out of API URL as they are directly correlated to in-game Pokedex ID
 * Region API does not automatically have them in order, 
 * leading to awkward display unless sorted.
 * 
 * Note: Discovered a way to use Pokedex API call directly to avoid using this,
 * but leaving it for educational purposes
 *  
*/ 
export function sortPokemon(region: Region | undefined) {
  const sortedPokes: PokemonStorage[] = [];
  // eslint-disable-next-line array-callback-return
  region?.pokemon_species?.map((species) => {
    const pokemonDefined: PokemonStorage = {
      pokeName: capitalizeFirstLetter(species.name),
      url: species.url,
      id: getPokemonId(species.url),
    };
    sortedPokes.push(pokemonDefined);
  });
  sortedPokes.sort((a, b) => {
    return a.id - b.id;
  });

  return sortedPokes;
}

// Function for capitalizing the first letter of a Pokemon's/Type's name
// Purely cosmetic
export function capitalizeFirstLetter(name: string) {
  const capitalized = name.slice(0, 1).toUpperCase() + name.slice(1)
  if ( capitalized.includes("-") ) {
    return capitalizeAfterHyphen(capitalized)
  }
  else {
    return capitalized
  }
}

// Function for capitalizing the first letter after a hyphen in a Pokemon name
// Purely cosmetic
function capitalizeAfterHyphen(name: string) {
  const preHyphenSplit = name.split("-")[0] // Getting name before hyphen
  const postHyphenSplit = name.split("-")[1] // Getting name after hyphen

  const postHyphenFull = postHyphenSplit.slice(0, 1).toUpperCase() + postHyphenSplit.slice(1)

  return preHyphenSplit + '-' + postHyphenFull
}
