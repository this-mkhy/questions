import styled from "styled-components";

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionHeader = styled.h3` 
    display: flex;
    font-size: 30px; 
`;

export const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto; 
    justify-content: center;
    grid-auto-flow: row;
    align-content: center;
    grid-gap: 3px;
`;

export const Answer = styled.div`
    display: grid;
    justify-content: center;
    align-content: center; 
    background: #b6b6b6;;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 450px;
    height: 100px;
    margin: 8px;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #FFFFFF;
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`;

export const AnswerIdx = styled.span`
    position: absolute;
    border: 1px solid #000000;
    text-align: center;
    width: 25px;
    height: 35px;
    margin: 10px;
`;
