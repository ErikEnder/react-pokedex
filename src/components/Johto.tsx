import { useEffect } from "react";
import { useRecoilState } from "recoil"
import { johtoAtom } from "../state/region-state";
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

export default function JohtoDisplay() {
  const [johto, setJohto] = useRecoilState<Region | undefined>(johtoAtom);
  const johtoPokes: Pokemon[] = []

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/2/"
        );
        console.log(response.data);
        setJohto(response.data);
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
    johto?.pokemon_species?.map((species) => {
      const pokeId = getPokemonId(species.url)
      const pokemonDefined: Pokemon = {
        pokeName: species.name,
        url: species.url,
        id: pokeId
      }
      johtoPokes.push(pokemonDefined)
    })
    johtoPokes.sort((a, b) => {
      const idA = a.id
      const idB = b.id
      return idA - idB
    })
  };

  const DisplayPokemon = () =>
  johtoPokes.map((species, index) => {
    return (
      <div key={index}>
        <a href={species.url}>{species.pokeName}</a>
      </div>
    );
  });

  return (
    <>
      <p>{johto?.main_region?.name}</p>
      {SortPokemon()}
      {DisplayPokemon()}
    </>
  );
}
