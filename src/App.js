
import { Route } from 'react-router';
import './App.scss';
import { Menu } from './components/main/Menu';
import EasyContainer from './components/main/EasyContainer';
import Win from './components/main/Win';
import GameOver from './components/main/GameOver';
import MediumContainer from './components/main/MediumContainer';
import HardContainer from './components/main/HardContainer';

function App() {
  return (
    <div className="App">
        <Route path={["/", "/menu"]} exact render={() => <Menu />} />
        <Route path="/easy" render={()=> <EasyContainer />} />
        <Route path="/win" render={()=> <Win />} />
        <Route path="/gameOver" render={()=> <GameOver />} />
        <Route path="/medium" render={()=> <MediumContainer />} />
        <Route path="/hard" render={()=> <HardContainer />} />
    </div>
  );
}

export default App;
