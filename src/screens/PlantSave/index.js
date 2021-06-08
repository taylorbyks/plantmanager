import React, { useState } from 'react'
import { Platform, Alert, ScrollView } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { savePlant, loadPlant } from '../../services/storage'

import { Button, Description, PlantTitle, AlertLabel, ButtonDataTimePicker, WateringTip } from '../../components'
import { PlantSaveContainer, PlantSaveContent, PlantController, PlantInfo } from './styles'
import { useNavigation, useRoute } from '@react-navigation/core'
import { format, isBefore } from 'date-fns'

export const PlantSave = () => {
  const navigation = useNavigation()
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')
  const route = useRoute()
  const { plant } = route.params

  function handleChangeTime(event, dateTime) {
    if (Platform.OS == 'android') {
      setShowDatePicker((oldState) => !oldState)
    }

    // if(dateTime && isBefore(dateTime, new Date())){
    //   setSelectedDateTime(new Date())
    //   return Alert.alert('Escolha uma hora no futuro ⏰')
    // }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState)
  }

  async function handleSave() {
    const data = await loadPlant()

    console.log(data)

    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua planta com muito cuidado',
        buttonTitle: 'Muito Obrigado',
        icon: 'hug',
        nextScreen: 'UserPlants',
      })
    } catch {
      Alert.alert('Não foi possível salvar. 😢')
    }
  }

  return (
    <PlantSaveContainer>
      <PlantSaveContent>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} height={220} width={200} />
          <PlantTitle>{plant.name}</PlantTitle>
          <Description>{plant.about}</Description>
        </PlantInfo>
        <PlantController>
          <WateringTip text={plant.water_tips} bottom/>
          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>
          {showDatePicker && (
            <DateTimePicker value={selectedDateTime} mode="time" display="spinner" onChange={handleChangeTime} />
            )}
          {Platform.OS === 'android' && (
            <ButtonDataTimePicker
              text={`Horário de lembrete: ${format(selectedDateTime, 'HH:mm')}`}
              onPress={handleOpenDateTimePickerForAndroid}
            />
          )}
          <Button text="Cadastrar Planta" onPress={handleSave} />
        </PlantController>
      </PlantSaveContent>
    </PlantSaveContainer>
  )
}
