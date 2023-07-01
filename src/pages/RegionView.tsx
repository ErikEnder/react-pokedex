import { Box, Container, Grid, Typography, Divider } from "@mui/material";
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
    <>
      <div className='header' />
      <Container sx={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', paddingTop: '40px', paddingBottom: '10px'}}>
        <Typography sx={{margin: 'auto'}}>Welcome to my barebones Pokedex App</Typography>
        <Typography sx={{margin: 'auto'}}>This app is powered by <a href='https://pokeapi.co/'>https://pokeapi.co/</a>, of which I am in no way affiliated with outside of this personal project</Typography><br />
        <Typography sx={{margin: 'auto'}}>The purpose of this app was to build upon my React skills as well as get more comfortable with API usage and MaterialUI (MUI)</Typography>
        <Typography sx={{margin: 'auto'}}>As such, it was entirely a solo endeavor and a great educational experience for myself</Typography><br />
        <Typography sx={{margin: 'auto'}}>I hope you enjoy your stay, however long that may be!</Typography><br />
      </Container>
      <Divider />
      <Box sx={{ flexGrow: 1,
        justifyContent: 'space-evenly',
        display: 'inline-flex',
        alignContent: 'center',
        width: '100%',
        paddingTop: '30px'}}>
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
      <div className='footer' />
    </>
  )
}