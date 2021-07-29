
import { Route } from 'react-router';
import './App.scss';
import { Menu } from './components/main/Menu';
import EasyContainer from './components/main/EasyContainer';
import Win from './components/main/Win';


function App() {
  return (
    <div className="App">
        <Route path={["/", "/menu"]} exact render={() => <Menu />} />
        <Route path="/easy" render={()=> <EasyContainer />} />
        <Route path="/win" render={()=> <Win />} />
    </div>
  );
}

export default App;
