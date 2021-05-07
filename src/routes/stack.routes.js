import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome, Logon, Confirmation, PlantSelect } from "../screens";

import { theme } from "../styles/themes"

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
   <stackRoutes.Navigator headerMode='none' screenOptions={{ cardStyle: {backgroundColor: theme.colors.white}  }}>
      <stackRoutes.Screen name="Welcome" component={Welcome}/>
      <stackRoutes.Screen name="Logon" component={Logon}/>
      <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
      <stackRoutes.Screen name="PlantSelect" component={PlantSelect}/>
   </stackRoutes.Navigator>
)

export default AppRoutes;