import './App.scss';
import Button from './comps/Button'
import CircleButton from './comps/CircleButton'
import StatusTag from './comps/StatusTag'

function App() {
  return (
    <div className="App">
     {/* Inclusio */}
     <Button></Button>
     <div className="spacer"></div>
     <CircleButton></CircleButton>
     <div className="spacer"></div>
     <StatusTag></StatusTag>
     <div className="spacer"></div>
     <StatusTag bgcolor={"red"}></StatusTag>
    </div>
  );
}

export default App;
