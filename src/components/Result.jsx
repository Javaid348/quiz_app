import React from "react";

const Result = ({ score, totalQuestions, tryAgain }) => {
  return (
    <div className="result-card">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} out of {totalQuestions}
      </p>
      <button onClick={tryAgain}>Try Again</button>
    </div>
  );
};

export default Result;
