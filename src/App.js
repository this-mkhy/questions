
import { Routes, Route } from "react-router-dom";
import { useResultContext } from './contexts/ResultContextProvider';

import Welcome from "./components/welcome/Welcome";
import Categories from "./components/categories/Categories";
import Questions from "./components/questions/Questions";

function App() {
  const { playerName, difficulty, category, categories,
    numberOfCategories, handleChangeDifficulty, handleChangeCategory, handleChangePlayerName, handleChangeCategoryNumbers,
    time, numberOfQuestions, answers, score, handleChangeNumberOfQuestions, handleChangeTime, handleChangeScore, handleChangeAnswers, handleChangeCategories } = useResultContext();

  return ( 
    <Routes>
      <Route
        path="/"
        element={
          <Welcome
            playerName={playerName}
            handleChangePlayerName={handleChangePlayerName}
            difficulty={difficulty}
            handleChangeDifficulty={handleChangeDifficulty}
          />
        }
      />
      <Route
        path="/categories"
        element={
          <Categories
            category={category}
            categories={categories}
            difficulty={difficulty}
            numberOfCategories={numberOfCategories}
            handleChangeCategory={handleChangeCategory}
            handleChangeCategoryNumbers={handleChangeCategoryNumbers}
          />
        }
      /> 
        <Route
          path="/questions"
          element={
            <Questions
              category={category}
              categories={categories}
              difficulty={difficulty}
              answers={answers}
              score={score}
              time={time}
              numberOfCategories={numberOfCategories}
              handleChangeCategories={handleChangeCategories}
              numberOfQuestions={numberOfQuestions}
              handleChangeNumberOfQuestions={handleChangeNumberOfQuestions}
              handleChangeAnswers={handleChangeAnswers}
              handleChangeScore={handleChangeScore}
              handleChangeTime={handleChangeTime}
            />
          }
        />
     </Routes> 
  );
}

export default App;
