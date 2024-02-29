import React from "react";
import "./style.scss";
import Board from "./components/board";
import StatusMsg from "./components/statusMsg.jsx";
import { calculateWinner } from "./winner.js";
import History from "./components/history.jsx";
function App() {
  const [history, setHistory] = React.useState([
    { square: Array(9).fill(null), xIsNext: false },
  ]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.square);

  const handleSqureClick = (i) => {
    if (gamingBoard.square[i] || winner) {
      return;
    }

    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== history.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextGamingState = lastGamingState.square.map((value, index) => {
        if (index === i) {
          return lastGamingState.xIsNext ? "X" : "O";
        }
        return value;
      });

      const baseState = isTraversing
        ? currentHistory.slice(0, currentMove + 1)
        : currentHistory;

      return baseState.concat({
        square: nextGamingState,
        xIsNext: !lastGamingState.xIsNext,
      });
    });
    setCurrentMove((currentMove) => currentMove + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <StatusMsg winner={winner} gamingBoard={gamingBoard} />
      <Board square={gamingBoard.square} handleSqureClick={handleSqureClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
