import { useCallback, useState } from 'react';
import { Question } from './Question';
import { QUESTIONS } from '../question';
import { Summary } from './Summary';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeIndex = userAnswers.length;

  const isQuizFinished = activeIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(newAnswer => {
    setUserAnswers(prevAnswers => [...prevAnswers, newAnswer]);
  }, []);

  const handleTimeOut = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      {!isQuizFinished ? (
        <Question
          key={activeIndex}
          index={activeIndex}
          onTimeOut={handleTimeOut}
          onSelectAnswer={handleSelectAnswer}
        />
      ) : (
        <Summary userAnswers={userAnswers} />
      )}
    </div>
  );
};

export { Quiz };
