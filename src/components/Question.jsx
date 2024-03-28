import { useState } from 'react';
import { QuestionTimer } from './QuestionTimer';
import { Answers } from './Answers';
import { QUESTIONS } from '../question';

const Question = ({ index, onTimeOut, onSelectAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: '',
  });

  let timer = 12000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== '') {
    timer = 2000;
  }

  const { text, answers } = QUESTIONS[index];

  const handleSelectAnswer = answer => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: '',
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== '') {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <>
      <div id="question">
        <QuestionTimer
          onTimeOut={!answer.selectedAnswer && onTimeOut}
          target={timer}
          mode={answerState}
          key={timer}
        />
        <h2>{text}</h2>
        <Answers
          answers={answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>
    </>
  );
};

export { Question };
