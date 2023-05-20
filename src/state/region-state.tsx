import { atom } from "recoil";
import { Region } from "types";

export const kantoAtom = atom<Region | undefined>({
  key: "kanto-state",
  default: undefined,
});

export const johtoAtom = atom<Region | undefined>({
  key: "johto-state",
  default: undefined,
});

export const hoennAtom = atom<Region | undefined>({
  key: "hoenn-state",
  default: undefined,
});

export const sinnohAtom = atom<Region | undefined>({
  key: "sinnoh-state",
  default: undefined,
});

export const unovaAtom = atom<Region | undefined>({
  key: "unova-state",
  default: undefined,
});

export const kalosAtom = atom<Region | undefined>({
  key: "kalos-state",
  default: undefined,
});

export const alolaAtom = atom<Region | undefined>({
  key: "alola-state",
  default: undefined,
});

export const galarAtom = atom<Region | undefined>({
  key: "galar-state",
  default: undefined,
});

export const paldeaAtom = atom<Region | undefined>({
  key: "paldea-state",
  default: undefined,
});

