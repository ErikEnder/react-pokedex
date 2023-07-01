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
import { Typography, Container } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

import { DisplayType } from "src/helpers/displayType"
import { capitalizeFirstLetter } from "src/helpers/helpers";

export default function PokemonView() {
  const { state } = useLocation() // Information passed from individual region component regarding clicked Pokemon
  const [pokemon, setPokemon] = useRecoilState<PokemonDefinition | undefined>(pokeAtom);
  let totalStats = 0

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
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
          <span key={index}>
            <Typography component="span"><span>Type {index + 1}: <img className="type-tag" src={DisplayType(typing.type.name)} alt={typing.type.name}/></span></Typography>
          </span>
        </Container>
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
          totalStats += stat.base_stat
          return (
            <div key={index}>
              <Typography>
                <span>{capitalizeFirstLetter(stat?.stat?.name)}: </span>
                <span>{stat.base_stat}</span>
              </Typography>
            </div>
          )
        })
      
      /** Some Pokemon (namely in later generations after 3D Modeling became standard) are missing Back_Sprites.
       * Due to this, the below method will check if the current Pokemon has a back Sprite. If not, it will only
       * return the Front Sprite and center it appropriately. It is assumed that every Pokemon has at least a Front_Sprite.
       */
      function DisplaySprites() {
        if (pokemon?.sprites?.back_default === null) {
          return (
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
              <img className="sprite" src={pokemon?.sprites?.front_default} alt="Frontal Sprite" />
            </Container>
            
          )
        }
        else {
          return (
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
              <img className="sprite" src={pokemon?.sprites?.front_default} alt="Frontal Sprite" />
              <img className="sprite" src={pokemon?.sprites?.back_default} alt="Back Sprite" />
            </Container>
          )
        }
      }

      /**  Some Pokemon in the API are missing Shiny Sprites entirely, or in some cases
       only missing Back Sprites. Method checks if Back_Sprite is missing first as that is the 
       most likely to be gone in later generations, and if it is then check if any Shiny Sprites exist.
       If they do, it will return the singular Sprite. If it's missing entirely, it informs the user as such. */
      function DisplayShinySprites() {
        if (pokemon?.sprites?.back_shiny === null) {
          if (pokemon?.sprites?.front_shiny !== null) {
            return (
              <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <img className="sprite" src={pokemon?.sprites?.front_shiny} alt="Frontal Sprite" />
              </Container>
            )
          }
          else {
            return (
              <Typography>No Shiny Sprites on record</Typography>
            )
          }
        }
        else {
          return (
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
              <img className="sprite" src={pokemon?.sprites?.front_shiny} alt="Frontal Sprite" />
              <img className="sprite" src={pokemon?.sprites?.back_shiny} alt="Back Sprite" />
            </Container>
          )
        }
      }

  return (
    <>
      <div className='header' />
      <Container sx={{paddingTop: '40px'}}>
        <Container sx={{width: 'fit-content'}}>
          <Container sx={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
            <Typography sx={{margin: 'auto'}}><Link to="/">Return to Pokedex</Link></Typography><br />
            <Typography sx={{margin: 'auto'}}>{capitalizeFirstLetter(state.name)}</Typography>
          </Container>
          <Container sx={{border: '1px solid black', backgroundColor: '#f5f5f5', paddingTop: '10px'}}>
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography>Standard Sprite(s)</Typography>
            </Container>
            {DisplaySprites()}
          </Container>
          <Container sx={{border: '1px solid black', backgroundColor: '#f5f5f5', paddingTop: '10px'}}>
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography>Shiny Sprite(s)</Typography>
            </Container>
            {DisplayShinySprites()}
          </Container>
          <Container sx={{border: '1px solid black', backgroundColor: '#f5f5f5', paddingTop: '10px', paddingBottom: '10px'}}>
            {DisplayTypes()}
            {DisplayAbilities()}
            {DisplayStats()}
            <Typography>Total: {totalStats}</Typography>
          </Container>
        </Container>
      </Container>
      <div className='footer' />
    </>
    
  )
}
