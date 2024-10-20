import React from 'react';

const Question = ({ question, options, onSelect }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onSelect(option)}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
