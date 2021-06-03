import React from 'react'
import { View, Animated } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import { PlantCardText, TimeLabelText, TimeText, IconButton } from '../../atoms'
import { PlantCardSmallContainer, PlantCardMediumContainer, PlantCardDetails } from './styles'

export const PlantCardSmall = ({ data, onPress }) => {
  return (
    <PlantCardSmallContainer onPress={onPress}>
      <SvgFromUri uri={data.photo} width={100} height={100} />
      <PlantCardText>{data.name}</PlantCardText>
    </PlantCardSmallContainer>
  )
}

export const PlantCardMedium = ({ data, onPress, onRemove }) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <IconButton iconName="trash" onPress={onRemove} danger />
          </View>
        </Animated.View>
      )}
    >
      <PlantCardMediumContainer onPress={onPress}>
        <SvgFromUri uri={data.photo} width={80} height={80} />
        <PlantCardText>{data.name}</PlantCardText>
        <PlantCardDetails>
          <TimeLabelText>Regar</TimeLabelText>
          <TimeText>{data.hour}</TimeText>
        </PlantCardDetails>
      </PlantCardMediumContainer>
    </Swipeable>
  )
}
