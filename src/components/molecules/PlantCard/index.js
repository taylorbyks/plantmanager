import React from 'react'
import { SvgFromUri } from 'react-native-svg'
import { PlantCardText, TimeLabelText, TimeText } from '../../atoms/Text'
import { PlantCardSmallContainer, PlantCardMediumContainer, PlantCardDetails } from './styles'

export const PlantCardSmall = ({ data, onPress }) => {
  return (
    <PlantCardSmallContainer onPress={onPress}>
      <SvgFromUri uri={data.photo} width={100} height={100} />
      <PlantCardText>{data.name}</PlantCardText>
    </PlantCardSmallContainer>
  )
}

export const PlantCardMedium = ({ data, onPress }) => {
  return (
    <PlantCardMediumContainer onPress={onPress}>
      <SvgFromUri uri={data.photo} width={80} height={80} />
      <PlantCardText>{data.name}</PlantCardText>
      <PlantCardDetails>
        <TimeLabelText>Regar</TimeLabelText>
        <TimeText>{data.hour}</TimeText>
      </PlantCardDetails>
    </PlantCardMediumContainer>
  )
}
