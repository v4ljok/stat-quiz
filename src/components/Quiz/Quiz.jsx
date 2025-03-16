import { useState } from "react";
import { useTranslation } from "react-i18next";
import Confetti from "react-confetti";
import styles from "./Quiz.module.scss";

function Quiz() {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = t("questions", { returnObjects: true });

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
      {finished && score === questions.length && <Confetti />}

      {finished ? (
        <div className={styles.result}>
          <h2>{t("result_title")}</h2>
          <p>{t("result_text", { score, total: questions.length })}</p>
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