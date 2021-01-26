import './App.scss';
import Button from './comps/Button'
import CircleButton from './comps/CircleButton'
import StatusTag from './comps/StatusTag'

function App() {
  return (
    <div className="App">
     {/* Inclusio */}
     <Button></Button>
     <CircleButton></CircleButton>
     <StatusTag></StatusTag>
    </div>
  );
}

export default App;
