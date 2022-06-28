import styled from "styled-components";

export const QuestionsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
    flex-wrap: wrap;
`;

export const BtnContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    row-gap: 10px;
    column-gap: 120px; 
    margin-top: 60px;
`;

export const Button = styled.button`
    background: #B6B6B6;
    height: 60px;
    width: 200px;
    border: 1px solid #000000;
    border-radius: 5px;
    margin: 30px;
    text-transform: uppercase;
    cursor: pointer;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: row;
`
