import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles/themes'
import AppLoading from 'expo-app-loading'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { Routes, AuthRoutes } from './src/routes'
import * as Notifications from 'expo-notifications'
import { loadUser } from './src/services/storage'

export default function App() {
  const [FontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold })
  const [user, setUser] = useState()

  async function getUser() {
    try {
      const data = await loadUser()
      setUser(data)
    } catch (error) {}
  }

  async function notifications() {
    const data = await Notifications.getAllScheduledNotificationsAsync()
    console.log('NOTIFICACOES')
    console.log(data)
  }

  useEffect(() => {
    notifications()
    getUser()
  }, [])

  if (!FontsLoaded) {
    return <AppLoading />
  }

  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <AuthRoutes />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  )
}
