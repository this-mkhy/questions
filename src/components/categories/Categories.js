import React from 'react'
import { useNavigate } from "react-router-dom";
import { CategoryContainer, GridContainer, Item, CategoryHeader, StartButton} from './CategoriesElements'
import { useResultContext } from '../../contexts/ResultContextProvider';

const Categories = () => {
    const { category, categories, numberOfCategories, handleChangeCategory, handleChangeCategoryNumbers } = useResultContext();
    console.log(categories)
    
    const navigate = useNavigate();
  
    const handleStartGame = () => {
      handleChangeCategoryNumbers(numberOfCategories + 1);
      navigate(`/questions`);
    };
    
  return (
    <CategoryContainer>
        <CategoryHeader>Questions Category</CategoryHeader>
        <GridContainer>
            {[{ id: 0, name: "Random" }, ...categories].map((item) => (
                <Item 
                    onClick={() => handleChangeCategory(item)}
                    style={{
                        background: category.id === item.id ? "#FFFFFF" : "",
                      }}>
                    {item.name}
                </Item> 
            ))}
        </GridContainer>
        <GridContainer> 
            <StartButton onClick={handleStartGame} disabled={!category}>
                start
            </StartButton>
        </GridContainer>  
    </CategoryContainer>

  )
}
export default Categories