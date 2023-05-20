import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { kantoAtom } from "../state/region-state";
import { sortPokemon } from "src/helpers/helpers";
import { Region } from "types";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function KantoDisplay() {
  const [kanto, setKanto] = useRecoilState<Region | undefined>(kantoAtom);
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/generation/1/"
        );
        setKanto(response.data);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchRegion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const DisplayPokemon = () =>
    sortPokemon(kanto).map((species, index) => {
      return (
        <div key={index}>
          <a href={species.url}>{species.pokeName}</a>
        </div>
      );
    });

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>Kanto Pokedex</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {DisplayPokemon()}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
