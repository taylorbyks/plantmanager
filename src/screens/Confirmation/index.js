import React from "react"
import { useNavigation } from '@react-navigation/core'

import { Description, Button, Subtitle, Emoji } from "../../components"
import { ConfirmationContainer } from "./styles"

export const Confirmation = () => {
  const navigation = useNavigation()

  function handleNext() {
    navigation.navigate('PlantSelect')
  }

  return (
    <ConfirmationContainer>
      <Emoji>😊</Emoji>
      <Subtitle>Prontiho</Subtitle>
      <Description> Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</Description>
      <Button medium text="Começar" onPress={handleNext} />
    </ConfirmationContainer>
  )
}
