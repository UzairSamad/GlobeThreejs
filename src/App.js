import logo from './logo.svg';
import './App.css';

import SimpleGlobe from './components/simpleGlobe';
import BlackGlobe from './components/blackglobe';
import { World } from './components/worldsanimation'
import NewGlobe from './components/newglobe';
function App() {
  return (
    <div className="App">
      {/* <World /> */}
      {/* <BlackGlobe /> */}
      {/* <SimpleGlobe /> */}
      <NewGlobe />
    </div>
  );
}

export default App;
