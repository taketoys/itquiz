import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './App.css'; 
import questions from './questions.json'; 

const App = () => {
  const [isQuizFinished, setIsQuizFinished] = useState(false); 

  const handleFinish = () => {
    setIsQuizFinished(true);  // Завершаем тест
  };

  const handleRestart = () => {
    setIsQuizFinished(false);  // Перезапускаем викторину
  };

  return (
    <div className="App">
      {!isQuizFinished && <h1>IT викторина</h1>}  {/* Показываем заголовок только если тест не завершен */}
      {!isQuizFinished ? (
        <Quiz questions={questions} onFinish={handleFinish} />  
      ) : (
        <Result onRestart={handleRestart} />  
      )}
    </div>
  );
};

export default App;
