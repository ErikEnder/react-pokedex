import { Box, Grid } from "@mui/material";
import React from "react";
import AlolaDisplay from "../components/Alola";
import GalarDisplay from "../components/Galar";
import HoennDisplay from "../components/Hoenn";
import JohtoDisplay from "../components/Johto";
import KalosDisplay from "../components/Kalos";
import KantoDisplay from "../components/Kanto";
import PaldeaDisplay from "../components/Paldea";
import SinnohDisplay from "../components/Sinnoh";
import UnovaDisplay from "../components/Unova";

export default function RegionView() {

  return (
    <Box sx={{ flexGrow: 1,
      justifyContent: 'space-evenly',
      display: 'inline-flex',
      alignContent: 'center',
      width: '100%' }}>
      <Box sx={{ width: '20%'}}>
        <Grid
          container 
          spacing={2}
          direction="column"
        >
          <Grid item xs={4}>
            <KantoDisplay />
          </Grid>
          <Grid item xs={4}>
            <JohtoDisplay />
          </Grid>
          <Grid item xs={4}>
            <HoennDisplay />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '20%'}}>
        <Grid
          container 
          spacing={2}
          direction="column"
        >
          <Grid item xs={4}>
            <SinnohDisplay />
          </Grid>
          <Grid item xs={4}>
            <UnovaDisplay />
          </Grid>
          <Grid item xs={4}>
            <KalosDisplay />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '20%'}}>
        <Grid
          container 
          spacing={2}
          direction="column"
        >
          <Grid item xs={4}>
            <AlolaDisplay />
          </Grid>
          <Grid item xs={4}>
            <GalarDisplay />
          </Grid>
          <Grid item xs={4}>
            <PaldeaDisplay />
          </Grid>    
        </Grid>
      </Box>
    </Box>
  )
}