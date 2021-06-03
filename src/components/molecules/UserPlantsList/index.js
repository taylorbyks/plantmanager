import React from 'react'
import { FlatList } from 'react-native'
import { PlantCardMedium } from '../PlantCard'
import { UserPlantsListContainer } from './styles'

export const UserPlantsList = ({ data, handleRemove }) => {
  return (
    <UserPlantsListContainer>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PlantCardMedium data={item} onRemove={() => handleRemove(item)} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      />
    </UserPlantsListContainer>
  )
}
