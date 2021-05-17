import React from "react";
import { FlatList } from "react-native";
import { PlantCard } from "../../atoms/PlantCard"
import { PlantsListContainer } from "./styles";

export const PlantsList = ({ data }) => {
  return (
    <PlantsListContainer>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PlantCard data={item} medium/>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </PlantsListContainer>
  )
}
