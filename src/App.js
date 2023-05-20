import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

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
        <KantoDisplay />
        <JohtoDisplay />
        <HoennDisplay />
        <SinnohDisplay />
        <UnovaDisplay />
        <KalosDisplay />
        <AlolaDisplay />
        <GalarDisplay />
        <PaldeaDisplay />
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
