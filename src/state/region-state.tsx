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

export const kantoAtom = atom<Region | undefined>({
  key: 'kanto-state',
  default: undefined
})

export const johtoAtom = atom<Region | undefined>({
  key: 'johto-state',
  default: undefined
})