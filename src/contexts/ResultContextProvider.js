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
  
    useEffect(() => {
      const fetchcategoriesData = async () => {
        const { data } = await categoriesData();
        setCategories(data.trivia_categories);
      };
      fetchcategoriesData();
    }, [difficulty]);
  
    const handleChangeDifficulty = (value) => {
      setDifficulty(value);
    };
    
    const handleChangeCategory = (category) => {
      setCategory(category);
    };
  
    const handleChangePlayerName = (ev) => {
      setPlayerName(ev.target.value);
    };
  
    const handleChangeCategoryNumbers = (number) => {
      setNumberOfCategories(number);
    };
  

  // send states and function through the context to anywhere in the react app
  return (
    <ResultContext.Provider value={{ playerName, setPlayerName, difficulty, setDifficulty, category, setCategory, categories, setCategories, numberOfCategories, 
        setNumberOfCategories, handleChangeDifficulty, handleChangeCategory, handleChangePlayerName, handleChangeCategoryNumbers }}>
      {children}
    </ResultContext.Provider>
  );
};

// this function to make it easy use the values from the context
export const useResultContext = () => useContext(ResultContext);