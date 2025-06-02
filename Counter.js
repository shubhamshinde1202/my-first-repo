import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    let timer;
    if (isRun) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, [1000]);
    }
    return () => clearInterval(timer);
  }, [isRun]);

  const start = () => setIsRun(true);
  const stop = () => setIsRun(false);
  const reset = () => {
    setIsRun(false);
    setCount(0);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
