import { Region, Pokemon } from "types";

export function getPokemonId(url: string) {
  const id = url.split(/\//)[6];
  return Number(id);
}

export function sortPokemon(region: Region | undefined) {
  const sortedPokes: Pokemon[] = [];
  // eslint-disable-next-line array-callback-return
  region?.pokemon_species?.map((species) => {
    const pokeId = getPokemonId(species.url);
    const pokemonDefined: Pokemon = {
      pokeName: species.name,
      url: species.url,
      id: pokeId,
    };
    sortedPokes.push(pokemonDefined);
  });
  sortedPokes.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    return idA - idB;
  });

  return sortedPokes;
}
