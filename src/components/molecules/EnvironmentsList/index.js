import React, { useState } from 'react'
import { View } from 'react-native'
import { ItemButton } from '../../atoms/ItemButton'
import { EnvironmentsListContainer } from './styles'

export const EnvironmentsList = ({ data, setFilter, dataToFilter }) => {
  const [environmentsSelected, setEnvironmentsSelected] = useState('all')

  function handleEnvironmentSelected(environment) {
    setEnvironmentsSelected(environment)

    if (environment == 'all') {
      return setFilter(dataToFilter)
    }

    const filtered = dataToFilter.filter((plant) => plant.environments.includes(environment))

    setFilter(filtered)
  }

  return (
    <View>
      <EnvironmentsListContainer
        data={data}
        keyExractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <ItemButton
            name={item.title}
            active={item.key === environmentsSelected}
            onPress={() => handleEnvironmentSelected(item.key)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
