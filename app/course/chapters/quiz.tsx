"use client";
import React, { useState } from "react";
import "@/app/course/PPRQuiz.css";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const Quize: React.FC<{questions: Question[]}> = ({ questions }) => {

  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(null)
  );

  const [submitted, setSubmitted] = useState(false);

  const correctCount = answers.reduce((count, answer, i) => {
    return answer === questions[i].correctIndex ? count + 1 : count;
  }, 0);

  const handleChange = (qIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  const progressPercent = Math.round(
    (answers.filter((a) => a !== null).length / questions.length) * 100
  );

  return (
    <>
      <h1>🧪 Partial Prerendering Quiz</h1>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }}>
          {progressPercent}%
        </div>
      </div>

      <section id="quiz-section">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="question-block">
            <h3>
              {qIndex + 1}. {q.question}
            </h3>
            {q.options.map((opt, optIndex) => {
              const isSelected = answers[qIndex] === optIndex;
              const isCorrect = optIndex === q.correctIndex;
              const showResult = submitted;

              let className = "option";
              if (showResult) {
                if (isSelected && isCorrect) className += " correct";
                else if (isSelected && !isCorrect) className += " incorrect";
                else if (!isSelected && isCorrect) className += " missed";
              }

              return (
                <label key={optIndex} className={className}>
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={isSelected}
                    onChange={() => handleChange(qIndex, optIndex)}
                    disabled={submitted}
                  />
                  {opt}
                </label>
              );
            })}
            {submitted && (
              <>
                <hr />
                <p className="result">
                  {answers[qIndex] === q.correctIndex
                    ? "✅ Верно!"
                    : "❌ Неверно"}
                </p>
              </>
            )}
          </div>
        ))}
      </section>

      {!submitted ? (
        <button className="submit-btn" onClick={handleSubmit}>
          Проверить ответы
        </button>
      ) : (
        <>
          <p className="score mb-6">
            🎯 Ваш результат: {correctCount} из {questions.length}
          </p>
          <button className="submit-btn" onClick={handleReset}>
            Пройти снова
          </button>
        </>
      )}
    </>
  );
};

export default Quize;
