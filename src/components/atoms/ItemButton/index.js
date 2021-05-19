import React from 'react'
import { ItemButtonContainer } from './styles'
import { ItemButtonText } from '../Text'

export const ItemButton = ({ name, active, onPress }) => {
  return (
    <ItemButtonContainer active={active} onPress={onPress}>
      <ItemButtonText active={active}>{name}</ItemButtonText>
    </ItemButtonContainer>
  )
}
