/**
 * This Component will be the viewer for a selected Pokemon
 * 
 * 
 * Features:
 *  2. Display Pokemon base stats
 *  5. Display which games it appears in (if possible, unsure atm)
 */

import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { pokeAtom } from "src/state/pokemon-state";
import { useRecoilState } from "recoil";
import { PokemonDefinition } from "types";
import { Typography, Container, Box } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

import { capitalizeFirstLetter } from "src/helpers/helpers";

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

  const DisplayTypes = () =>
    pokemon?.types?.map((typing,index) => {
      return (
        <span key={index}>
          <Typography component="span" sx={{paddingLeft: '7px'}}><span> Type {index + 1}: {capitalizeFirstLetter(typing.type.name)}</span></Typography>
        </span>
      )
    })

    const DisplayAbilities = () =>
      pokemon?.abilities?.map((ability,index) => {
        return (
          <div key={index}>
            <Typography>
              <span>
                { ability.is_hidden ? `Hidden Ability: ${capitalizeFirstLetter(ability.ability.name)}` // Ternary Operator prints Hidden Ability if true, Ability 1/2/3 etc. if false
                : `Ability ${index + 1}: ${capitalizeFirstLetter(ability.ability.name)}` }
              </span>
            </Typography>
          </div>
        )
      })

      const DisplayStats = () =>
      pokemon?.stats?.map((stat,index) => {
        return (
          <div key={index}>
            <Typography>
              <span>{stat?.stat?.name}: </span>
              <span>{stat.base_stat}</span>
            </Typography>
          </div>
        )
      })
    

  console.log(pokemon)

  return (
    <>
      <Link to="/">Return to Pokedex</Link>
      <Container>
        <br /><br />
        <Typography>Current Pokemon is: {capitalizeFirstLetter(state.name)}</Typography>
        <Container sx={{width: 'fit-content'}}>
          <Container sx={{border: '1px solid black'}}>
            <Container>
              <Typography>Standard Sprites</Typography>
            </Container>
            <img src={pokemon?.sprites?.front_default} alt="Frontal Sprite" />
            <img src={pokemon?.sprites?.back_default} alt="Back Sprite" />
          </Container>
          <Container sx={{border: '1px solid black'}}>
            <Container>
              <Typography>Shiny Sprites</Typography>
            </Container>
            <img src={pokemon?.sprites?.front_shiny} alt="Frontal Shiny Sprite" />
            <img src={pokemon?.sprites?.back_shiny} alt="Back Shiny Sprite" />
          </Container>
          {DisplayTypes()}
          {DisplayAbilities()}
          {DisplayStats()}
        </Container>
      </Container>
    </>
  )
}

export default PokemonView