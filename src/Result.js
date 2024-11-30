import React from 'react';
import './App.css'; 

const Result = ({ onRestart }) => {
  // Генерация случайного семизначного числа
  const randomID = Math.floor(1000000 + Math.random() * 9000000);

  return (
    <div className="result-container">
      <h2>Тест завершен</h2>
      <p>Спасибо, что потратили своё время!</p>
        <p>Вы можете пройти тест ещё раз.</p>
      <p>Ваш ID: {randomID}</p> {/* Отображаем случайный номер ID */}
      <button onClick={onRestart}>Начать заново</button>
    </div>
  );
};

export default Result;
