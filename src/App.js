import './App.css';
import Board from './components/Board';

function App() {
  let board = Array(9).fill('X');

  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
