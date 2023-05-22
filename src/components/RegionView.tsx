import { Box, Grid } from "@mui/material";
import React from "react";
import AlolaDisplay from "./Alola";
import GalarDisplay from "./Galar";
import HoennDisplay from "./Hoenn";
import JohtoDisplay from "./Johto";
import KalosDisplay from "./Kalos";
import KantoDisplay from "./Kanto";
import PaldeaDisplay from "./Paldea";
import SinnohDisplay from "./Sinnoh";
import UnovaDisplay from "./Unova";

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