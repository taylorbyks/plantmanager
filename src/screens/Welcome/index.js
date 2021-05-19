import React from 'react'

import watering from '../../assets/watering.png'

import { Title, Description, IconButton } from '../../components'
import { WelcomeContainer, MainImage } from './styles'

import { useNavigation } from '@react-navigation/core'

export const Welcome = () => {
  const navigation = useNavigation()

  function handleNext() {
    navigation.navigate('Logon')
  }

  return (
    <WelcomeContainer>
      <Title>
        Gerencie {'\n'}
        suas plantas de{'\n'}
        forma fácil
      </Title>

      <MainImage source={watering} />

      <Description>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Description>

      <IconButton iconName="chevron-forward-outline" onPress={handleNext} />
    </WelcomeContainer>
  )
}
