import React, { useEffect, useState } from "react";
import { QuestionContainer, QuestionHeader, AnswerContainer, Answer, AnswerIdx } from './QuestionElements'
import { useResultContext } from '../../contexts/ResultContextProvider';

const MCQ = ({ question, answer, handleChangeAnswer }) => {
  const { shuffleQuestion } = useResultContext();
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const data = shuffleQuestion([
      question.correct_answer,
      ...question.incorrect_answers,
    ]);

    setShuffledAnswers(data);
  }, [shuffleQuestion, question.correct_answer, question.incorrect_answers]);

  return ( 
    <QuestionContainer>
      <QuestionHeader>{question.question}</QuestionHeader>
      <AnswerContainer>
        {shuffledAnswers.map((item, index) => (
          <Answer
            key={item}
            style={{
              background: item === answer ? "#FFFFFF" : "",
            }}
            onClick={() => handleChangeAnswer(item)}
          >
            {item}
            <AnswerIdx>{index + 1}</AnswerIdx>
          </Answer>
        ))}
      </AnswerContainer>
    </QuestionContainer> 
  );
};

export default MCQ;