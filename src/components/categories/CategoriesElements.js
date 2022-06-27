import styled from "styled-components";

export const CategoryContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const CategoryHeader = styled.h2`
    font-size: 4rem;  
    font-weight: 2;
    text-align: center; 
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto; 
  grid-gap: 2px;
  justify-content: center;
`;

export const Item = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;  
    height: 150px;
    width: 300px;  
    font-size: 25px;
    background-color: #B6B6B6;
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 10px;
    padding-top: 5px;
    cursor: pointer;
`;

export const StartButton = styled.button`
    background: #B6B6B6;
    height: 60px;
    width: 200px;
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 30px;
    text-transform: uppercase;
    cursor: pointer;
`;
