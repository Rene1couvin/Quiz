// Quiz.js
import React, { useState } from 'react';
import questions from './question.json';
import Question from './question';
import './quiz.css'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const renderResultTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>{userAnswers[index]}</td>
              <td>{question.correctAnswer}</td>
              <td>{userAnswers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    
    <div className='quiz-container'>
      {currentQuestionIndex < questions.length && !showResult ? (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
      ) : (
        <div className='bg-black text-white'>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {calculateScore()} / {questions.length}</p>
          {renderResultTable()}
        </div>
      )}
      
    </div>
  );
};

export default Quiz;

