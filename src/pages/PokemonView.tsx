/**
 * This Component will be the viewer for a selected Pokemon
 * 
 * TODO:
 * 1. Grab Pokemon from individual Region component and router.push it
 * 2. Figure out how to view it on new page
 * 3. Store Pokemon info in a Recoil atom
 * 
 * Features:
 *  1. Display Pokemon picture
 *  2. Display Pokemon base stats
 *  3. Display Pokemon evos (if any)
 *  4. Display Pokemon typings/abilities
 *  5. Display which games it appears in (if possible, unsure atm)
 */

import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { pokeAtom } from "src/state/pokemon-state";
import { useRecoilState } from "recoil";
import { PokemonDefinition } from "types";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const PokemonView = props => {
  const { state } = useLocation() // Information passed from individual region component regarding clicked Pokemon
  const [pokemon, setPokemon] = useRecoilState<PokemonDefinition | undefined>(pokeAtom);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${state.name.toLowerCase()}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(pokemon)

  return (
    <>
      <p>Current Pokemon is: {pokemon?.species?.name}</p>
    </>
  )
}

export default PokemonView