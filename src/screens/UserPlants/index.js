import React, { useState, useEffect } from 'react'
import { loadPlant, removePlant } from '../../services/storage'

import { PlantTitle, Header, WateringTip, UserPlantsList, LoadAnimation } from '../../components'
import { UserPlantsContainer } from './styles'
import { formatDistance } from 'date-fns'
import { Alert } from 'react-native'

export const UserPlants = () => {
  const [userPlants, setUserPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState()

  function handleRemove(plant) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(plant)

            setUserPlants((oldData) => oldData.filter((item) => item.id !== plant.id))
          } catch (error) {
            Alert.alert('Não foi possível remover')
          }
        },
      },
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date().getTime())

      setNextWatered(`Não edqueça de reagar a ${plantsStoraged[0].name} à ${nextTime} horas.`)

      setUserPlants(plantsStoraged)
      setLoading(false)
    }

    loadStorageData()
  }, userPlants)

  if (loading) {
    return <LoadAnimation />
  }

  return (
    <UserPlantsContainer>
      <Header text="Minhas" textBold="Plantas" />
      <WateringTip text={nextWatered} />
      <PlantTitle>Próximas regadas</PlantTitle>
      <UserPlantsList data={userPlants} handleRemove={handleRemove} />
    </UserPlantsContainer>
  )
}
