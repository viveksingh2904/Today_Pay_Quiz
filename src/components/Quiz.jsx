import { useState, useEffect } from "react";
import Question from "./Question";

export default function Quiz({ setQuizFinished, setScore, setAnswers, timer }) {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(timer); // <-- use prop

  // Timer countdown
  useEffect(() => {
    if (loading || !questions.length) return;

    if (timeLeft === 0) {
      handleSkip(); // jab time khatam ho jaye, question skip ho jaye
      return;
    }

    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, current, loading]);

  // Reset timer on question change
  useEffect(() => {
    setTimeLeft(timer); // reset per question using user-selected timer
  }, [current, timer]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((q) => {
          const options = [...q.incorrect_answers];
          const randomIndex = Math.floor(Math.random() * 4);
          options.splice(randomIndex, 0, q.correct_answer);
          return {
            question: q.question,
            options,
            correct: q.correct_answer,
          };
        });
        setQuestions(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleNext = () => {
    if (selected === null) return;
    const isCorrect = selected === questions[current].correct;
    setScore((prev) => prev + (isCorrect ? 1 : 0));
    setAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected,
        correct: questions[current].correct,
      },
    ]);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleSkip = () => {
    setAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: null,
        correct: questions[current].correct,
      },
    ]);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      const prevAnswer = answers[current - 1];
      setSelected(prevAnswer ? prevAnswer.selected : null);
    }
  };

  if (loading) return <p className="text-center">Loading questions...</p>;
  if (!questions.length) return <p className="text-center">No questions found.</p>;

  return (
    <div>
      {/* Question number + Timer in single line */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Question {current + 1} of {questions.length}</h5>
        <h6 className="text-danger">Time Left: {timeLeft}s</h6>
      </div>

      <Question
        data={questions[current]}
        selected={selected}
        setSelected={setSelected}
      />

      <div className="progress my-4">
        <div
          className="progress-bar bg-primary"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button
          onClick={handlePrevious}
          className="btn btn-secondary"
          disabled={current === 0}
        >
          Previous
        </button>

        <div>
          <button
            onClick={handleNext}
            className="btn btn-success me-2"
            disabled={selected === null}
          >
            {current + 1 === questions.length ? "Finish Quiz" : "Next"}
          </button>

          <button
            onClick={handleSkip}
            className="btn btn-warning"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
