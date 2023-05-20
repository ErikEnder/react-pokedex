import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { galarAtom } from "../state/region-state";
import { sortPokemon } from "src/helpers/helpers";
import { Region } from "types";

export default function GalarDisplay() {
  const [galar, setGalar] = useRecoilState<Region | undefined>(galarAtom);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/8/"
        );
        setGalar(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DisplayPokemon = () =>
    sortPokemon(galar).map((species, index) => {
      return (
        <div key={index}>
          <a href={species.url}>{species.pokeName}</a>
        </div>
      );
    });

  return (
    <>
      <p>{galar?.main_region?.name}</p>
      {DisplayPokemon()}
    </>
  );
}
