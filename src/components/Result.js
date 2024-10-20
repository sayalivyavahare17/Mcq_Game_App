import React from 'react';

const Result = ({ score, total, restart }) => {
  return (
    <div className="result-container">
      <h2>Game Over!</h2>
      <p>Your Score: {score}/{total}</p>
      <button onClick={restart}>Restart Game</button>
    </div>
  );
};

export default Result;
