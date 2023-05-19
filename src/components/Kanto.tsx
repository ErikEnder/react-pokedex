import { useEffect } from "react";
import { useRecoilState } from "recoil"
import { kantoAtom } from "../state/region-state";
import axios from "axios";
import React from "react";

// Type for Pokemon array to be used for sorting
type Pokemon = {
  pokeName: string,
  url: string,
  id: number
}

// Type for Region state
type Region = {
  abilities: [],
  id: number,
  main_region: {
    name: string,
    url: string
  },
  moves: [{}],
  name: string,
  names: [{}],
  pokemon_species: [{
    name: string,
    url: string
  }],
  types: [{}],
  version_groups: [{}]
}

function getPokemonId(url: string) {
  const id = url.split(/\//)[6];
  return Number(id)
}

export default function KantoDisplay() {
  const [kanto, setKanto] = useRecoilState<Region | undefined>(kantoAtom);
  const kantoPokes: Pokemon[] = []

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/1/"
        );
        console.log(response.data);
        setKanto(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SortPokemon = () => {
    // eslint-disable-next-line array-callback-return
    kanto?.pokemon_species?.map((species) => {
      const pokeId = getPokemonId(species.url)
      const pokemonDefined: Pokemon = {
        pokeName: species.name,
        url: species.url,
        id: pokeId
      }
      kantoPokes.push(pokemonDefined)
    })
    kantoPokes.sort((a, b) => {
      const idA = a.id
      const idB = b.id
      return idA - idB
    })
  };

  const DisplayPokemon = () =>
  kantoPokes.map((species, index) => {
    return (
      <div key={index}>
        <a href={species.url}>{species.pokeName}</a>
      </div>
    );
  });

  return (
    <>
      <p>{kanto?.main_region?.name}</p>
      {SortPokemon()}
      {DisplayPokemon()}
    </>
  );
}
