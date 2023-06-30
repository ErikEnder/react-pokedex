import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles.css';

import RegionView from './pages/RegionView';
import PokemonView from './pages/PokemonView';



function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<RegionView />} />
              <Route path="pokemonview" element={<PokemonView />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
