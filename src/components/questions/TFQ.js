import React from "react";
import { QuestionContainer, QuestionHeader, AnswerContainer, Answer, AnswerIdx } from './QuestionElements'

const TFQ = ({ question, answer, handleChangeAnswer }) => {
  return (
    <>
      <QuestionContainer>
        <QuestionHeader>{question.question}</QuestionHeader>
        <AnswerContainer>
          <Answer
            onClick={() => handleChangeAnswer("True")}
            style={{
              background: answer === "True" ? "#FFFFFF" : "",
            }}
          >
            <AnswerIdx>T</AnswerIdx>True
          </Answer>
          <Answer
            onClick={() => handleChangeAnswer("False")}
            style={{
              background: answer === "False" ? "#FFFFFF" : "",
            }}
          >
            <AnswerIdx>F</AnswerIdx>False
          </Answer>
        </AnswerContainer>
      </QuestionContainer>
    </>
  );
};

export default TFQ;