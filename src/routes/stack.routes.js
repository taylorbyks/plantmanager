import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome, Logon, Confirmation, PlantSelect, PlantSave, UserPlants } from '../screens'

import { theme } from '../styles/themes'
import AuthRoutes from './tab.routes'

const stackRoutes = createStackNavigator()

const AppRoutes = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: theme.colors.white } }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="Logon" component={Logon} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="UserPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
)

export default AppRoutes
