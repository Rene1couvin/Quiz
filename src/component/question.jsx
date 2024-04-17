// Question.js
import React from 'react';

const Question = ({ question, onAnswerSelect }) => {
  const { question: questionText, options } = question;

  return (
    <div className='bg-gray-500  mx-auto'>
      <h2>{questionText}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelect(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
