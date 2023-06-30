import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

import './styles.css';

import RegionView from './components/RegionView';


function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <RegionView />
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
