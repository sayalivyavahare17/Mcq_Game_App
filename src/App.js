import React, { useState } from 'react';
import questions from './data/questions';
import Question from './components/Question';
import Score from './components/Score';
import Result from './components/Result';
import './styles.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="app">
      {showResult ? (
        <Result score={score} total={questions.length} restart={restartGame} />
      ) : (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSelect={handleSelect}
          />
          <Score score={score} total={currentQuestion + 1} />
        </>
      )}
    </div>
  );
};

export default App;
