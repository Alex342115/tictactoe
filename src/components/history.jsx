const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            {" "}
            <button
              className={`btn-move ${currentMove === index ? "active" : ""}`}
              style={{ fontWeight: currentMove === index ? "bold" : "normal" }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? " Go to Start" : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;
