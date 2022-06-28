import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { TimerContainer } from './CircleTimerElements'

const CircleTimer = ({ difficulty, handleSubmitAnswer }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (difficulty === "hard"){
      setDuration(30);
    }else if(difficulty === "medium") {
      setDuration(60);
    }else if (difficulty === "easy") {
      setDuration(90);
    }
  }, [difficulty]);

  return (
    <TimerContainer>
      <CountdownCircleTimer
        isPlaying
        size={130}
        duration={duration}
        colors={["#b6b6b6"]}
        strokeLinecap="butt"
        strokeWidth={65}
        rotation="clockwise"
        initialRemainingTime={0}
        onComplete={() => {
          handleSubmitAnswer();
          return { shouldRepeat: true, delay: 0 };
        }}
      >
        
      </CountdownCircleTimer>
    </TimerContainer>
  );
};

export default CircleTimer;