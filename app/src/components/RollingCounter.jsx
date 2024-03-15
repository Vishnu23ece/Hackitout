import React, { useState, useEffect } from 'react';

const RollingCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start === end) return;

    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      const nextCount = count + increment;
      setCount(nextCount);
      if (nextCount === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [count, start, end, duration]);

  return <div>{count}</div>;
};

export default RollingCounter;


// export default Rolling
