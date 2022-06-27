
import { Routes, Route } from "react-router-dom";
import { useResultContext } from './contexts/ResultContextProvider';

import Welcome from "./components/welcome/Welcome";
import Categories from "./components/categories/Categories";

function App() {
  const { playerName, difficulty, category, categories,
    numberOfCategories, handleChangeDifficulty, handleChangeCategory, handleChangePlayerName, handleChangeCategoryNumbers } = useResultContext();

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

     </Routes> 
  );
}

export default App;
