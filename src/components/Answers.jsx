import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelectAnswer }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        let classes = '';
        if (selectedAnswer === answer) {
          classes = answerState === 'answered' ? 'selected' : answerState;
        }

        return (
          <li className="answer" key={answer}>
            <button
              className={classes}
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { Answers };
