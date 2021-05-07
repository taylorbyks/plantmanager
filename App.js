import { StatusBar } from "expo-status-bar"
import React from "react";
import { ThemeProvider } from "styled-components"
import { theme } from "./src/styles/themes"
import AppLoading from "expo-app-loading"
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost"
import Routes from "./src/routes";


export default function App() {
  const [ FontsLoaded ] = useFonts({ Jost_400Regular, Jost_600SemiBold })
  
  if(!FontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  )
}
