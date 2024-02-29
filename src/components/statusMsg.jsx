import React from "react";

function StatusMsg({ winner, gamingBoard }) {
  const {square, xIsNext} = gamingBoard;
  const noMovesLeft = gamingBoard.square.every((squareValue) => squareValue !== null);
  const nxtPlayer = gamingBoard.xIsNext ? "X" : "O";


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
          <span className={gamingBoard.xIsNext ? "text-green" : "text-orange"}>
            {nxtPlayer}
          </span>
        </>
      );
    return null;
  };

  return <h2 className="status-message">{renderStausMsg()}</h2>;
}
export default StatusMsg;
