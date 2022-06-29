import styled from "styled-components";

export const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const PlayerName = styled.h2`
    font-size: 2rem;  
    font-weight: bold;
    position: absolute;
    top: 10px;
    left: 15px; 
`;

export const ChartContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto; 
    justify-content: center;
    grid-auto-flow: row;
    align-content: center;
    grid-gap: 3px;
    margin-top: 5rem;
`;

export const Chart = styled.div`
    border: 1px solid #000000;
    border-radius: 4px;
    width: 600px;
    background-color: #E8E8E8;
    margin: 10px;
`;

export const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Time = styled.p`
    font-size: 3rem;
`;

export const TimeSeconds = styled.p`
    font-size: 1.5rem;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    background: #B6B6B6;
    height: 60px;
    width: 200px;
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 20px;
    text-transform: uppercase;
    cursor: pointer;
`;