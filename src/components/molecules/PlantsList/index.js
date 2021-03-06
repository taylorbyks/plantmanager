import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { ActivityIndicator, FlatList } from 'react-native'
import { theme } from '../../../styles/themes'
import { PlantCardSmall } from '../PlantCard'
import { PlantsListContainer } from './styles'

export const PlantsList = ({ data, onEndReached, loading }) => {
  const navigation = useNavigation()
  
  function handlePlantSelect(plant) {
    navigation.navigate('PlantSave', { plant })
  }

  return (
    <PlantsListContainer>
      <FlatList
        data={data}
        keyExractor={(item) => String(item.key)}
        renderItem={({ item }) => <PlantCardSmall data={item} onPress={() => handlePlantSelect(item)} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
        ListFooterComponent={loading ? <ActivityIndicator color={theme.colors.green} /> : <></>}
      />
    </PlantsListContainer>
  )
}
