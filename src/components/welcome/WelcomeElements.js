import styled from "styled-components";

export const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2rem;
    column-gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem;
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    row-gap: 2rem;
    column-gap: 2rem;
    flex-wrap: wrap;
    width: 600px;
    height: 450px; 
    background: #d9d9d9; 
    border-radius: 1rem;
    align-items: center;
`

export const Input= styled.input`
  background: #f2f2f2;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 500px;
  height: 100px;
  padding: 2rem;  
  font-size: 2rem; 
  box-sizing: border-box;
` 

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-top: 40px;
` 

export const FormBtn= styled.button`
  width: 100px;
  height: 100px;
  background: #b6b6b6;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
` 

export const FormPlayBtn= styled.button`
    width: 180px;
    height: 50px;
    background: #b6b6b6;
    border: 1px solid #000000;
    border-radius: 4px;
    margin-top: 10px;
    text-transform: uppercase;
    cursor: pointer; 
` 
 
export const LevelsContainer= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  column-gap: 40px;
  row-gap: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2rem;
` 
export const Level= styled.p`
  &::first-letter {
    background: #b6b6b6;
    border: 1px solid #000000;
  }
` 
  