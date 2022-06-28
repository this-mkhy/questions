import React, { createContext, useContext, useState, useEffect } from 'react';
import { categoriesData } from "../api/categoriesData";

const ResultContext = createContext();

// ContextProvider
export const ResultContextProvider = ({ children }) => {
    const [playerName, setPlayerName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [numberOfCategories, setNumberOfCategories] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);

    const [time, setTime] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState({ correct: 0, incorrect: 0, skipped: 0 });

    useEffect(() => {
      const fetchcategoriesData = async () => {
        const { data } = await categoriesData();
        setCategories(data.trivia_categories);
      };
      fetchcategoriesData();
    }, [difficulty]);
  
    const handleChangePlayerName = (ev) => {
      setPlayerName(ev.target.value);
    };

    const handleChangeDifficulty = (value) => {
      setDifficulty(value);
    };

    const handleChangeCategory = (category) => {
      setCategory(category);
    };
  
    const handleChangeCategoryNumbers = (number) => {
      setNumberOfCategories(number);
    };
  
    const handleChangeNumberOfQuestions = (number) => {
      setNumberOfQuestions(number);
    };

    const handleChangeTime = (time) => {
      setTime((prev) => [...prev, time]);
    };
    
    const handleChangeScore = (score) => {
      setScore(score);
    };
  
    const handleChangeAnswers = (data) => {
      setAnswers(data);
    };
  
    const handleChangeCategories = (data) => {
      setCategories(data);
    };
  
    const questionTime = (start) => {
      const end = new Date();
      return (end - start) / 1000;
    };

    const shuffleQuestion = (arr) => {
      let currentIdx = arr.length;
      let randomIndex;
    
      while (currentIdx !== 0) {
        randomIndex = Math.floor(Math.random() * currentIdx);
        currentIdx--;
    
        [arr[currentIdx], arr[randomIndex]] = [
          arr[randomIndex],
          arr[currentIdx],
        ];
      }
    
      return arr;
    };

  // send states and function through the context to anywhere in the react app
  return (
    <ResultContext.Provider value={{ playerName, setPlayerName, difficulty, setDifficulty, category, setCategory, categories, setCategories, numberOfCategories, 
        setNumberOfCategories, handleChangeDifficulty, handleChangeCategory, handleChangePlayerName, handleChangeCategoryNumbers,
        time, numberOfQuestions, answers, score, handleChangeNumberOfQuestions, handleChangeTime, handleChangeScore, handleChangeAnswers, handleChangeCategories,
        questionTime, shuffleQuestion }}>
      
      {children}
    </ResultContext.Provider>
  );
};

// this function to make it easy use the values from the context
export const useResultContext = () => useContext(ResultContext);