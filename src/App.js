import Regions from './components/Regions'
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

console.log("In App")
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <Regions />
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
