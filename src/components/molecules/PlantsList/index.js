import React from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { colors } from '../../../styles/colors'
import { PlantCard } from '../../atoms/PlantCard'
import { PlantsListContainer } from './styles'

export const PlantsList = ({ data, onEndReached, loading }) => {
  return (
    <PlantsListContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => <PlantCard data={item} medium />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
        ListFooterComponent={loading ? <ActivityIndicator color={colors.green} /> : <></>}
      />
    </PlantsListContainer>
  )
}
