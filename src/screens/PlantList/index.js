import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { loadPlant } from '../../services/storage'

import { PlantTitle, Text, Header, WateringTip, UserPlantsList } from '../../components'
import { PlantListContainer } from './styles'
import { formatDistance } from 'date-fns'

export const PlantList = () => {
  const [userPlants, setUserPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState()

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime()
      )

      setNextWatered(`Não edqueça de reagar a ${plantsStoraged[0].name} à ${nextTime} horas.`)

      setUserPlants(plantsStoraged)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  return (
    <PlantListContainer>
      <Header text="Minhas" textBold="Plantas" />
      <WateringTip text={nextWatered} />
      <PlantTitle>Próximas regadas</PlantTitle>
      <UserPlantsList data={userPlants} />
    </PlantListContainer>
  )
}
