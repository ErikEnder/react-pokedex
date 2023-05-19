import KantoDisplay from './components/Kanto'
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import JohtoDisplay from './components/Johto';

console.log("In App")
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <KantoDisplay />
        <JohtoDisplay />
      </RecoilRoot>
    </Suspense>
  )
}

export default App;
