import React from "react";
import { HeaderContainer, UserImage } from "./styles"

import { Title, TitleRegular } from "../../atoms/Text"

import user from '../../../assets/user.jpg'
import { View } from "react-native";

export const Header = () => {
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
