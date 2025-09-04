import { useState } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [started, setStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedTimer, setSelectedTimer] = useState(30); // default 30s

  const restartQuiz = () => {
    setStarted(false);
    setQuizFinished(false);
    setScore(0);
    setAnswers([]);
  };

  const startQuiz = ({ timer }) => {
    setSelectedTimer(timer); // save user-selected timer
    setStarted(true);
  };

  return (
    <div className="container my-4">
      {!started ? (
        <Welcome startQuiz={startQuiz} />
      ) : !quizFinished ? (
        <Quiz
          setQuizFinished={setQuizFinished}
          setScore={setScore}
          setAnswers={setAnswers}
          timer={selectedTimer} // pass timer to Quiz
        />
      ) : (
        <Results score={score} answers={answers} restartQuiz={restartQuiz} />
      )}
    </div>
  );
}

export default App;