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
