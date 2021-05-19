import React from 'react'
import { SvgFromUri } from 'react-native-svg'
import { PlantCardText } from '../Text'
import { PlantCardContainer } from './styles'

export const PlantCard = ({ data, medium, onPress }) => {
  return (
    <PlantCardContainer medium={medium} onPress={onPress}>
      <SvgFromUri uri={data.photo} width={100} height={100} />
      <PlantCardText>{data.name}</PlantCardText>
    </PlantCardContainer>
  )
}
