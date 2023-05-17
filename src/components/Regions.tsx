import { useEffect } from "react";
import { useRecoilState } from "recoil"
import { regionAtom } from "../state/region-state";
import axios from "axios";
import React from "react";

// Type for Pokemon array to be used for sorting
type Pokemon = {
  name: string,
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

export default function Regions() {
  console.log("In Regions")
  const [region, setRegion] = useRecoilState<Region | undefined>(regionAtom);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/1/"
        );
        console.log(response.data);
        setRegion(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** TODO 
   * map Pokemon to Array [{name: name, url: url, id: id}]
   * Parse ID from Pokemon URL and assign to Pokemon
   * Sort by ID, then display properly
   * 
   */
  // const SortPokemon = () =>
  //   region?.pokemon_species?.map((species, index) => {
      
  //   });

  const DisplayPokemon = () =>
  region?.pokemon_species?.map((species, index) => {
    return (
      <div key={index}>
        <a href={species.url}>{species.name}</a>
      </div>
    );
  });

  return (
    <>
      <p>{region?.main_region?.name}</p>
      {DisplayPokemon()}
    </>
  );
}
