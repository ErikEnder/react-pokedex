import React from "react";
import axios from "axios";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { kalosAtom } from "../state/region-state";
import { sortPokemon } from "src/helpers/helpers";
import { Region } from "types";

export default function KalosDisplay() {
  const [kalos, setKalos] = useRecoilState<Region | undefined>(kalosAtom);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/6/"
        );
        setKalos(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DisplayPokemon = () =>
    sortPokemon(kalos).map((species, index) => {
      return (
        <div key={index}>
          <a href={species.url}>{species.pokeName}</a>
        </div>
      );
    });

  return (
    <>
      <p>{kalos?.main_region?.name}</p>
      {DisplayPokemon()}
    </>
  );
}
