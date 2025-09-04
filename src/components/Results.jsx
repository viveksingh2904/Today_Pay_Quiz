import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Results({ score, answers, restartQuiz }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const storedHighScore = parseInt(localStorage.getItem("highScore") || "0");
    if (score > storedHighScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    } else {
      setHighScore(storedHighScore);
    }
  }, [score]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-success mb-2">
        🎉 You scored {score} out of {answers.length}
      </h2>

      <h5 className="text-primary mb-4">🏆 High Score: {highScore}</h5>

      <div
        className="list-group mb-4"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {answers.map((ans, idx) => (
          <div
            key={idx}
            className={`list-group-item ${
              ans.selected === ans.correct
                ? "list-group-item-success"
                : "list-group-item-danger"
            }`}
          >
            <p dangerouslySetInnerHTML={{ __html: ans.question }} />
            <p>
              Your answer:{" "}
              <b dangerouslySetInnerHTML={{ __html: ans.selected || "Skipped" }} />
            </p>
            {ans.selected !== ans.correct && (
              <p>
                Correct: <b dangerouslySetInnerHTML={{ __html: ans.correct }} />
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={restartQuiz}
        className="btn btn-primary"
        aria-label="Restart Quiz"
      >
        🔄 Restart Quiz
      </button>
    </motion.div>
  );
}
