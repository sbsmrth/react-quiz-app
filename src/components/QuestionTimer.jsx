import { useEffect, useState } from 'react';

const QuestionTimer = ({ target, onTimeOut, mode }) => {
  const [timer, setTimer] = useState(target);

  useEffect(() => {
    const timeOut = setTimeout(onTimeOut, target);

    return () => clearTimeout(timeOut);
  }, [target, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(
      () => setTimer(prevTimer => prevTimer - 100),
      100
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      value={timer}
      max={target}
      className={mode}
    ></progress>
  );
};

export { QuestionTimer };
