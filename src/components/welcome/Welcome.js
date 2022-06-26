import React from 'react' 
import {WelcomeContainer, FormContainer, BtnContainer, 
  FormBtn, FormPlayBtn, Input, LevelsContainer, Level} from './WelcomeElements'

export default function Welcome() {
  return (
    <WelcomeContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Player Name" 
        />
        <BtnContainer>
          <FormBtn> Easy </FormBtn>
          <FormBtn> Medium </FormBtn>
          <FormBtn> Hard </FormBtn>
        </BtnContainer>
      </FormContainer>
      <FormPlayBtn>
        play
      </FormPlayBtn> 

      <LevelsContainer>
        <Level> Easy </Level>
        <Level> Medium </Level>
        <Level> Hard </Level>
      </LevelsContainer>
  </WelcomeContainer>
  )
}
