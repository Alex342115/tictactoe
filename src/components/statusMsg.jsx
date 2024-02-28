import React from "react";
import { render } from "react-dom";

function StatusMsg({ winner, xIsNext, square }) {
  const noMovesLeft = square.every((squareValue) => squareValue !== null);
  const nxtPlayer = xIsNext ? "X" : "O";
  // const statusMsg = winner
  //   ? `Winner is ${winner}`
  //   : `Next Player is ${nxtPlayer}`;

  const renderStausMsg = () => {
    if (winner)
      return (
        <>
          Winner is{" "}
          <span className={winner === "x" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      );
    if (!winner && noMovesLeft) return <>Tied Game</>;
    if (!winner && !noMovesLeft)
      return (
        <>
          Next Player is{" "}
          <span className={xIsNext ? "text-green" : "text-orange"}>
            {nxtPlayer}
          </span>
        </>
      );
    return null;
  };

  return <h2 className="status-message">{renderStausMsg()}</h2>;
}
export default StatusMsg;
