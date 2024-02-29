// import React from "react";
import "../style.scss";

export default function Square({ value, onClick, isWinningSqaure }) {
  // console.log(value);
  const valueColor = value === "X" ? "text-green" : "text-orange";
  const winningColor = isWinningSqaure ? "winning" : "";
  return (
    <button
      type="button"
      className={`square ${valueColor} ${winningColor}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
