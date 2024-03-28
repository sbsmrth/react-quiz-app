import quizCompleteImg from '../assets/quiz-complete.png';
import { QUESTIONS } from '../question';

const Summary = ({ userAnswers }) => {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const correctAnswersScore = Math.round(
    (correctAnswers.length * 100) / QUESTIONS.length
  );

  const skippedAnswers = userAnswers.filter(answer => answer === null);

  const skippedAnswersScore = Math.round(
    (skippedAnswers.length * 100) / QUESTIONS.length
  );

  const wrongAnswersScore = 100 - correctAnswersScore - skippedAnswersScore;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersScore}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersScore}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersScore}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = 'user-answer';
          if (!answer) {
            classes += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            classes += ' correct';
          } else {
            classes += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={classes}>{answer ?? 'No answered :('}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export { Summary };
