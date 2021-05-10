import React from "react";
import { ItemButton } from "../../atoms/ItemButton"
import { FlatList } from "react-native";

export const EnvironmentsList = (data) => {
  return (
    <FlatList 
      data={[ data ]}
      renderItem={({ item }) => (
        <ItemButton name="Teste"/>
        )}
      horizontal
      showsVerticalScrollIndicator={false}
    /> 
  )
}
