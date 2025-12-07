import React from "react";

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
