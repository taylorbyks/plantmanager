import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HeaderContainer, UserImage } from './styles'

import { Title, TitleRegular } from '../../atoms/Text'

import user from '../../../assets/user.jpg'
import { View } from 'react-native'

export const Header = ({ text, textBold }) => {
  const [userName, setUserName] = useState()

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantmanager:user')
    setUserName(user)
  }

  useEffect(() => {
    loadStorageUserName()
  }, [])

  return (
    <HeaderContainer>
      <View>
        <TitleRegular>{text}</TitleRegular>
        <Title>{textBold ? textBold : userName}</Title>
      </View>
      <UserImage source={user} />
    </HeaderContainer>
  )
}
