import './App.css'
import DisplayRegions from './components/Regions'
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <DisplayRegions />
    </RecoilRoot>
  )
}

export default App;
