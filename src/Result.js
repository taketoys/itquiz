import React from 'react';

const Result = ({ onRestart }) => {
  return (
    <div className="result-container">
      <h2>Тест завершен</h2>
      <p>Спасибо, что потратили своё время! Вы можете пройти тест ещё раз.</p>
      <button onClick={onRestart}>Начать заново</button>
    </div>
  );
};

export default Result;
