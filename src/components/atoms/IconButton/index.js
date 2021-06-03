import React from 'react'
import { IconButtonContainer } from './styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const IconButton = ({ iconName, onPress, danger }) => {
  return (
    <IconButtonContainer onPress={onPress} danger={danger}>
      <Icon name={iconName} color="white" size={30} />
    </IconButtonContainer>
  )
}
