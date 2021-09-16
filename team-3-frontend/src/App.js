import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar/Avatar';
import Square from './components/Square/Square';

function App() {
  return (
    <div className="App">
      <Square black>
        <Avatar/>
      </Square>
    </div>
  );
}

export default App;
