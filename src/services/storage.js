import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notification from 'expo-notifications'
import { format } from 'date-fns'

export async function savePlant(plant) {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const now = new Date()

    const { times, repeat_every } = plant.frequency

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times)
      nextTime.setDate(now.getDate() + interval)
    } else {
      nextTime.setDate(nextTime.getDate())
    }

    const seconds = Math.abs(Math.ceil((now.getTime() - nextTime.getTime()) / 1000))

    const notificationId = await Notification.scheduleNotificationAsync({
      content: {
        title: 'Eiii, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notification.AndroidNotificationPriority.HIGH,
        data: {
          plant,
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    })

    console.log("NOTI", notificationId)

    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlants = data ? JSON.parse(data) : {}

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    }

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({
        ...newPlant,
        ...oldPlants,
      })
    )
  } catch (error) {
    throw new Error(error)
  }
}

export async function loadPlant() {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const plants = data ? JSON.parse(data) : {}

    const plantsSorted = Object.keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm'),
        }
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 100 -
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        )
      )

    return plantsSorted
  } catch (error) {
    throw new Error(error)
  }
}

export async function removePlant(id) {
  const data = await AsyncStorage.getItem('@plantmanager:plants')
  const plants = data ? JSON.parse(data) : {}

  await Notification.cancelAllScheduledNotificationsAsync(plants[id].notificationId)

  delete plants[id]

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants))
}

export async function saveUser(name) {
  await AsyncStorage.setItem('@plantmanager:user', name)
}

export async function loadUser() {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:user')

    return data
  } catch (error) {
    throw new Error(error)
  }
}
