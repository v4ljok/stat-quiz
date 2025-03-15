import { useState } from "react";
import Confetti from "react-confetti"; // 🎉 Import confetti
import styles from "./Quiz.module.scss";

const questions = [
  {
    question: "Mis on Eesti pealinn?",
    options: ["Tallinn", "Tartu", "Narva"],
    correct: "Tallinn",
  },
  {
    question: "Milline meri ümbritseb Eestit?",
    options: ["Atlandi ookean", "Läänemeri", "Vahemeri"],
    correct: "Läänemeri",
  },
  {
    question: "Mis on Eesti rahvuslind?",
    options: ["Harakas", "Suitsupääsuke", "Kotkas"],
    correct: "Suitsupääsuke",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={styles.quiz}>
      {/* 🎉 Show confetti only when all answers are correct */}
      {finished && score === questions.length && <Confetti />}

      {finished ? (
        <div className={styles.result}>
          <h2>Tulemus</h2>
          <p>Sa said {score} / {questions.length} õigesti!</p>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;