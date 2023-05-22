import { atom } from "recoil";
import { PokemonDefinition } from "types";

export const pokeAtom = atom<PokemonDefinition | undefined>({
  key: "pokemon-state",
  default: undefined,
});