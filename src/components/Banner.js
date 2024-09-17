import React, { useEffect, useState } from 'react';

function Banner({ content }) {
  const [timeLeft, setTimeLeft] = useState(content.timer);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <div className="banner">
      <p>{content.description}</p>
      <p>Time left: {timeLeft}s</p>
      <a href={content.link}>Learn More</a>
    </div>
  );
}

export default Banner;
