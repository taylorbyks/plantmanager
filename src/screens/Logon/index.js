import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { saveUser } from '../../services/storage'

import { Subtitle, Button, Emoji, Input } from '../../components'
import { LogonContainer } from './styles'
import { Alert } from 'react-native'

export const Logon = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState()
  const navigation = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value) {
    setIsFilled(!!value)
    setName(value)
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert('Me diz como posso chamar você! 😥')
    }

    try {
      await saveUser(name)

      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      })
    } catch {
      return Alert.alert('Não foi possível salvar o seu nome! 😥')
    }
  }

  return (
    <LogonContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Emoji> {isFilled ? '😁' : '😀'} </Emoji>

      <Subtitle>
        Como podemos{'\n'}
        chamar você?
      </Subtitle>

      <Input
        placeholder="Digite seu Nome"
        selected={isFocused || isFilled}
        value={setName}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onChangeText={handleInputChange}
      />

      <Button medium text="Confirmar" onPress={handleSubmit} />
    </LogonContainer>
  )
}
