import './App.scss';
import Main from './pages/Main';
import Edit from './pages/EditMember';
import Add from './pages/AddMember';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() { 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/AddMember" exact component={Add}/>
        <Route path="/EditMember" exact component={Edit}/>
      </Switch>
    </Router>
  );
}

export default App;
