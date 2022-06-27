import React, { useRef } from "react";
import {WelcomeContainer, FormContainer, BtnContainer, 
  FormBtn, FormPlayBtn, Input, LevelsContainer, Level} from './WelcomeElements'
import { useNavigate } from "react-router-dom";

import { useResultContext } from '../../contexts/ResultContextProvider';

function Welcome() {
  const { playerName, difficulty, handleChangePlayerName, handleChangeDifficulty } = useResultContext();

  const navigate = useNavigate();
  const inputRef = useRef();
  const currRef = useRef();

  const handlePlayGame = () => {
    navigate("/categories");
  };

  return (
    <WelcomeContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Player Name" 
          ref={inputRef}
          onChange={handleChangePlayerName}
        />
        <BtnContainer>
          <FormBtn 
            onClick={() => handleChangeDifficulty("easy")}
            style={{
              background: difficulty === "easy" ? "#ffffff" : "",
            }}> Easy </FormBtn>
          <FormBtn
            onClick={() => handleChangeDifficulty("medium")}
            style={{
              background: difficulty === "medium" ? "#ffffff" : "",
            }}> Medium </FormBtn>
          <FormBtn 
            onClick={() => handleChangeDifficulty("hard")}
            style={{
              background: difficulty === "hard" ? "#ffffff" : "",
            }}> Hard </FormBtn>
        </BtnContainer>
      </FormContainer>
      <FormPlayBtn         
        disabled={!difficulty || !playerName}
        onClick={handlePlayGame}>
        play
      </FormPlayBtn> 

      <LevelsContainer>
        <Level ref={currRef}> Easy </Level>
        <Level ref={currRef}> Medium </Level>
        <Level ref={currRef}> Hard </Level>
      </LevelsContainer>
  </WelcomeContainer>
  )
}
export default Welcome