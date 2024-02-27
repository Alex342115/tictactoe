import React from "react";
import "./style.scss";
import Board from "./components/board";
import { calculateWinner } from "./winner.js";

function App() {
  const [square, setSquare] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(false);

  const winner = calculateWinner(square);
  const nxtPlayer = xIsNext ? "X" : "O";
  const statusMsg = winner
    ? `Winner is ${winner}`
    : `Next Player is ${nxtPlayer}`;

  const handleSqureClick = (i) => {
    if (square[i] || winner) {
      return;
    }

    setSquare((currentSquare) => {
      return currentSquare.map((value, index) => {
        if (index === i) {
          return xIsNext ? "X" : "O";
        }
        return value;
      });
    });
    setXIsNext((currentXIsNext) => !currentXIsNext);
  };
  return (
    <div className="app">
      <h2>{statusMsg}</h2>
      <h2>Player </h2>
      <Board square={square} handleSqureClick={handleSqureClick} />
    </div>
  );
}

export default App;
