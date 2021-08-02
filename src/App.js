
import { Route } from 'react-router';
import './App.scss';
import { Menu } from './components/main/Menu';
import EasyContainer from './components/main/EasyContainer';
import Win from './components/main/Win';
import GameOver from './components/main/GameOver';


function App() {
  return (
    <div className="App">
        <Route path={["/", "/menu"]} exact render={() => <Menu />} />
        <Route path="/easy" render={()=> <EasyContainer />} />
        <Route path="/win" render={()=> <Win />} />
        <Route path="/gameOver" render={()=> <GameOver />} />
    </div>
  );
}

export default App;
