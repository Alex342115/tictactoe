import React from "react";
import "./style.scss";
import Board from "./components/board";
import StatusMsg from "./components/statusMsg.jsx";
import { calculateWinner } from "./winner.js";

function App() {
  const [square, setSquare] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(false);

  const winner = calculateWinner(square);

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
      {/* <h2>Player </h2> */}
      <StatusMsg winner={winner} xIsNext={xIsNext} square={square} />
      <Board square={square} handleSqureClick={handleSqureClick} />
    </div>
  );
}

export default App;
