import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HeaderContainer, UserImage } from './styles'

import { Title, TitleRegular } from '../../atoms/Text'

import user from '../../../assets/user.jpg'
import { View } from 'react-native'

export const Header = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    async function name(type) {
      await AsyncStorage.getItem('@plantmanager:user')
    }
  }, [userName])

  return (
    <HeaderContainer>
      <View>
        <TitleRegular>Olá,</TitleRegular>
        <Title>Taylor</Title>
      </View>
      <UserImage source={user} />
    </HeaderContainer>
  )
}
