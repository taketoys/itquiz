import React, { useState } from 'react';
import questions from './questions.json'; // Импортируем вопросы из questions.json

const Quiz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Индекс текущего вопроса
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Выбранный ответ
  const [answerStatus, setAnswerStatus] = useState(null); // Статус правильности ответа
  const [explanation, setExplanation] = useState(''); // Объяснение правильного ответа
  const [isAnswered, setIsAnswered] = useState(false); // Флаг, что ответ был проверен

  const currentQuestion = questions[currentQuestionIndex]; // Текущий вопрос

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value); // Обрабатываем выбор ответа
  };

  const handleCheckAnswer = () => {
    // Проверка ответа
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      setExplanation(currentQuestion.explanation); // Объяснение правильного ответа
    } else {
      setAnswerStatus('incorrect');
      setExplanation('Попробуйте ещё раз'); // Сообщение при неправильном ответе
    }
    setIsAnswered(true); // Отмечаем, что ответ проверен
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      // Переход к следующему вопросу
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Сбрасываем выбранный ответ
      setAnswerStatus(null); // Сбрасываем статус
      setExplanation(''); // Очищаем объяснение
      setIsAnswered(false); // Сбрасываем флаг ответа
    } else {
      onFinish(); // Завершаем викторину, когда вопросы закончены
    }
  };

  const handleRetryQuestion = () => {
    // Сбрасываем выбор ответа и статус, чтобы попытаться снова
    setAnswerStatus(null);
    setExplanation('');
    setIsAnswered(false);
    setSelectedAnswer(null); // Сбрасываем выбранный ответ
  };

  return (
    <div className="quiz-container">
      <h2>{`Вопрос ${currentQuestionIndex + 1}: ${currentQuestion.question}`}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleAnswerChange}
              disabled={isAnswered} // Отключаем выбор после проверки ответа
              className="option-radio"
            />
            {option}
          </label>
        ))}
      </div>

      {isAnswered && answerStatus === 'correct' && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          <h3>Правильно!</h3>
          <p>{explanation}</p>
        </div>
      )}

      {isAnswered && answerStatus === 'incorrect' && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          <h3>Неправильно!</h3>
          <p>{explanation}</p>
          <button onClick={handleRetryQuestion}>Попробовать ещё раз</button> {/* Кнопка повторного ответа */}
        </div>
      )}

      {!isAnswered && (
        <button
          onClick={handleCheckAnswer}
          disabled={!selectedAnswer} // Кнопка активна только при выбранном ответе
        >
          Проверить
        </button>
      )}

      {isAnswered && answerStatus === 'correct' && (
        <button onClick={handleNextQuestion}>
          Следующий вопрос
        </button>
      )}
    </div>
  );
};

export default Quiz;
