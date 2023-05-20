import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import KantoDisplay from './components/Kanto'
import JohtoDisplay from './components/Johto';
import HoennDisplay from './components/Hoenn';
import SinnohDisplay from './components/Sinnoh';
import UnovaDisplay from './components/Unova';
import KalosDisplay from './components/Kalos';
import AlolaDisplay from './components/Alola';
import GalarDisplay from './components/Galar';
import PaldeaDisplay from './components/Paldea';


function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <Box sx={{ flexGrow: 1, justifyContent: 'space-evenly', display: 'inline-flex', alignContent: 'center', width: '100%' }}>
          {/* <Grid
            container
            spacing={2}
            direction="row"
            > */}
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
          {/* </Grid> */}
        </Box>
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
