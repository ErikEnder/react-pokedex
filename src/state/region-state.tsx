import { atom } from "recoil"

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

export const regionAtom = atom<Region | undefined>({
  key: 'regionState',
  default: undefined
})