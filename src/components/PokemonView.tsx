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

import { useRecoilState } from "recoil";
import { PokemonDefinition } from "types";
import { Typography } from "@mui/material";

export default function PokemonView(pokemonId: number) {

}