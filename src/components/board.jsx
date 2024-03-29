import "../style.scss";
import Square from "./square";

function Board({ square, handleSqureClick, winningSqaure }) {
  const renderSquare = (i) => {
    const isWinningSqaure = winningSqaure.includes(i);
    return (
      <Square
        value={square[i]}
        isWinningSqaure={isWinningSqaure}
        onClick={() => handleSqureClick(i)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
