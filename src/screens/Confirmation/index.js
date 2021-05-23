import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Description, Button, Subtitle, Emoji } from '../../components'
import { ConfirmationContainer } from './styles'

export const Confirmation = () => {
  const navigation = useNavigation()
  const routes = useRoute()

  const {
    title, subTitle, buttonTitle, icon, nextScreen
  } = routes.params

  function handleNext() {
    navigation.navigate(nextScreen)
  }

  const emojis = {
    hug: '🤗',
    smile: '😊'
  }

  return (
    <ConfirmationContainer>
      <Emoji>{emojis[icon]}</Emoji>
      <Subtitle>{title}</Subtitle>
      <Description>{subTitle}</Description>
      <Button medium text={buttonTitle} onPress={handleNext} />
    </ConfirmationContainer>
  )
}
