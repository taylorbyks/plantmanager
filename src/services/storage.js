import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function savePlant(plant) {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlants = data ? JSON.parse(data) : {}

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants', 
      JSON.stringify({
        ... newPlant,
        ... oldPlants
    }))
  } catch(error) {
    throw new Error(error)
  }
}

export async function loadPlant() {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const plants = data ? JSON.parse(data) : {}

    return plants
  } catch(error) {
    throw new Error(error)
  }
}

export async function saveUser(name) {
  await AsyncStorage.setItem('@plantmanager:user', name)
}