import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { johtoAtom } from "../state/region-state";
import { Region } from "types";
import axios from "axios";
import React from "react";
import { sortPokemon } from "src/helpers/helpers";

export default function JohtoDisplay() {
  const [johto, setJohto] = useRecoilState<Region | undefined>(johtoAtom);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/2/"
        );
        setJohto(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const DisplayPokemon = () =>
    sortPokemon(johto).map((species, index) => {
      return (
        <div key={index}>
          <a href={species.url}>{species.pokeName}</a>
        </div>
      );
    });

  return (
    <>
      <p>{johto?.main_region?.name}</p>
      {DisplayPokemon()}
    </>
  );
}
