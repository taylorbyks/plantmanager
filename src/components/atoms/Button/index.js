import React from 'react'
import { ButtonText, TextDataTimePicker } from '../Text'
import { ButtonContainer, ButtonDataTimePickerContainer } from './styles'

export const Button = ({ text, medium, onPress }) => {
  return (
    <ButtonContainer medium={medium} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  )
}

export const ButtonDataTimePicker = ({ text, onPress }) => {
  return (
    <ButtonDataTimePickerContainer onPress={onPress}>
      <TextDataTimePicker>{text}</TextDataTimePicker>
    </ButtonDataTimePickerContainer>
  )
}
