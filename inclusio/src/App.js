import './App.scss';
import Main from './pages/Main';
import Button from './comps/Button'
import CircleButton from './comps/CircleButton'
import StatusTag from './comps/StatusTag'
import CategoryBar from './comps/CategoryBar';
import Profile from './comps/Profile'
import SearchBar from './comps/SearchBar'

function App() { 
  return (
    <div className="App">


     <CategoryBar></CategoryBar>

     <SearchBar />
     <Profile/>
     <Profile/>
     <Profile/>
     <Profile/>
     <Profile/>
     <Profile/>

      <Main></Main>


    </div>
  );
}

export default App;
