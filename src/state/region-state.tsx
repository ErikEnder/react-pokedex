import { atom } from "recoil";

type Region = {
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  name: string;
  pokemon_species: [
    {
      name: string;
      url: string;
    }
  ];
};

export const kantoAtom = atom<Region | undefined>({
  key: "kanto-state",
  default: undefined,
});

export const johtoAtom = atom<Region | undefined>({
  key: "johto-state",
  default: undefined,
});
