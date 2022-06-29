import ReactECharts from "echarts-for-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ScoreContainer, PlayerName, TimeContainer, Button, BtnContainer } from './ScoreElements'

const Score = ({ time, score, answers, playerName, handleStartNewGame }) => {
  const navigate = useNavigate();

  const pie = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          {
            value: score.correct,
            name: "Correct",
            itemStyle: { color: "#008B00" },
          },
          {
            value: score.incorrect,
            name: "False",
            itemStyle: { color: "#FF0000" },
          },
          {
            value: score.skipped,
            name: "Skipped",
            itemStyle: { color: "#858484" },
          },
        ],
      },
    ],
  };

  const bar = {
    yAxis: {
        name: 'Y Axis',
        type: "value",
    },
    xAxis: {
        name: 'X Axis',
        type: "category",
        data: Object.keys(answers),
    },
    grid: {
        bottom: 70
    },
    series: Object.entries(answers).map((entry) => {
      return {
        name: entry[0],
        type: "bar",
        stack: "total",
        
        data: [
          { value: entry[1].correct, itemStyle: { color: "#008B00" } },
          { value: -entry[1].skipped, itemStyle: { color: "#858484" } },
          { value: -entry[1].incorrect, itemStyle: { color: "#FF0000" } },
        ],
      };
    }),
  };

  const line = {
    xAxis: {
      type: "category",
      data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: time,
        type: "line"
      },
    ],
  };

  const handleClick = () => {
    handleStartNewGame();
    navigate("/");
  };

  return (
    <ScoreContainer>
      <PlayerName>{playerName}</PlayerName>
        <TimeContainer>
          Time
          <span> 
            {Math.trunc(
                time?.reduce((prev, curr) => prev + curr)
            )} {" "}Seconds 
          </span>
        </TimeContainer> 
        <ReactECharts
          option={pie}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        /> 
        <ReactECharts
          option={bar}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        /> 
        <ReactECharts
          option={line}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        /> 
      <BtnContainer>
        <Button onClick={handleClick}>New Game</Button>

      </BtnContainer>
    </ScoreContainer>

  );
};

export default Score;