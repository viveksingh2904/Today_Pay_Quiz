import { useState } from "react";
import { motion } from "framer-motion";

export default function Welcome({ startQuiz }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [timer, setTimer] = useState(30); // default 30s

  const handleStart = () => {
    startQuiz({ difficulty, timer }); // pass timer to App
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="display-4 fw-bold text-primary mb-4">🎉 Welcome to the Today Pay Quiz!</h1>
      <b>
      <p className="lead text-secondary bold mb-4">
        Test your knowledge and see how many questions you can answer correctly.
      </p>
      </b>

      <div className="mb-3">
        <label htmlFor="difficulty" className="form-label fw-bold">
          Select Difficulty:
        </label>
        <select
          id="difficulty"
          className="form-select"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          aria-label="Select quiz difficulty"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="timer" className="form-label fw-bold">
          Time per question (seconds):
        </label>
        <input
          type="number"
          id="timer"
          className="form-control"
          min="10"
          max="120"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
          aria-label="Set timer per question"
        />
      </div>

      <button
        onClick={handleStart}
        className="btn btn-lg btn-success shadow"
        aria-label="Start Quiz"
      >
         Start Quiz
      </button>
    </motion.div>
  );
}
