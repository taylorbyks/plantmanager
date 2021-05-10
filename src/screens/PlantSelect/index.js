import React from "react"

import { Header, Text, TextBold, EnvironmentsList } from "../../components"
import { PlantSelectContainer } from "./styles"

export const PlantSelect = () => {
  
  return (
    <PlantSelectContainer>
      <Header />
      <TextBold>Em qual ambiente</TextBold>
      <Text>você quer colocar sua planta?</Text>
      <EnvironmentsList data={1,2,3} />
    </PlantSelectContainer>
  )
}
