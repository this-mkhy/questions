import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { questionsData } from "../../api/questionsData";

import CircleTimer from "../circleTimer/CircleTimer";
import MCQ from "./MCQ";
import TFQ from "./TFQ";
import Loading from "./Loading";

import { QuestionsContainer, BtnContainer, Button } from './QuestionsElements'
import { useResultContext } from '../../contexts/ResultContextProvider';

export default function Question() {
    const { category, difficulty, categories, handleChangeTime, 
        score, handleChangeScore, answers, handleChangeAnswers, numberOfQuestions, numberOfCategories, 
        handleChangeCategories,handleChangeNumberOfQuestions, questionTime } = useResultContext();

    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(false);
    const [start, setStart] = useState("");
    const [answer, setAnswer] = useState("");

    const fetchQuestionsData = useCallback(async () => {
        const { data } = await questionsData({ category, difficulty });
        setQuestions(data.results);
    }, [category, difficulty]);

    useEffect(() => {
        fetchQuestionsData();
    }, [fetchQuestionsData]);

    useEffect(() => {
        setCurrentQuestion(questions[0]);
        setStart(new Date());
    }, [questions]);

    useEffect(() => {
        handleChangeCategories(categories.filter((item) => item.id !== category.id));
    }, []);

    const handleSubmitAnswer = () => {
        handleChangeTime(questionTime(start));
        setStart(new Date());

        if (answer && answer === currentQuestion.correct_answer) {
            handleChangeScore({ ...score, correct: score.correct + 1 });
            handleChangeAnswers({
                ...answers,
                [currentQuestion.category]: {
                correct: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].correct + 1
                    : 1,
                incorrect: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].incorrect
                    : 0,
                skipped: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].skipped
                    : 0,
                },
            });
        } else if (answer && answer !== currentQuestion.correct_answer) {
            handleChangeScore({ ...score, incorrect: score.incorrect + 1 });
            handleChangeAnswers({
                ...answers,
                [currentQuestion.category]: {
                correct: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].correct
                    : 0,
                incorrect: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].incorrect + 1
                    : 1,
                skipped: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].skipped
                    : 0,
                },
            });
        } else if (!answer) {
            handleChangeScore({ ...score, skipped: score.skipped + 1 });
            handleChangeAnswers({
                ...answers,
                [currentQuestion.category]: {
                correct: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].correct
                    : 0,
                incorrect: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].incorrect
                    : 0,
                skipped: answers[currentQuestion.category]
                    ? answers[currentQuestion.category].skipped + 1
                    : 1,
                },
            });
        }

        if (numberOfQuestions < 2) {
            setCurrentQuestion(questions[numberOfQuestions + 1]);
            handleChangeNumberOfQuestions(numberOfQuestions + 1);
        } else if (numberOfCategories < 2) {
            navigate("/categories");
            handleChangeNumberOfQuestions(0);
        } else {
            navigate("/score");
            handleChangeNumberOfQuestions(0);
        }

        fetchQuestionsData();
        handleChangeAnswer("");
    };

    const handleChangeAnswer = (answer) => {
        setAnswer(answer);
    };

    if (!category || !difficulty) return navigate("/");

    if (!currentQuestion) 
        return (
            <Loading type="spinningBubbles" color="#B6B6B6"/>
        )
        
    return (
        <>
            <CircleTimer difficulty={difficulty} handleSubmitAnswer={handleSubmitAnswer} />
            <QuestionsContainer>
                {currentQuestion.type === "multiple" && (
                    <MCQ
                        answer={answer}
                        question={currentQuestion}
                        handleChangeAnswer={handleChangeAnswer}
                    />
                )}
                {currentQuestion.type === "boolean" && (
                    <TFQ
                        answer={answer}
                        question={currentQuestion}
                        handleChangeAnswer={handleChangeAnswer}
                    />
                )}
                <BtnContainer>
                    <Button onClick={handleSubmitAnswer}>Skip</Button>
                    <Button onClick={handleSubmitAnswer}>Next</Button>
                </BtnContainer>
            </QuestionsContainer>
      </>
    )
}
