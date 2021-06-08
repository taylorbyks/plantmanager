import React, { useEffect, useState } from 'react'

import { Header, Text, TextBold, EnvironmentsList, PlantsList, LoadAnimation } from '../../components'
import localdata from '../../services/localdata'
import { PlantSelectContainer } from './styles'

export const PlantSelect = () => {
  const [environments, setEnvironments] = useState([])

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [loadingPage, setLoadingPage] = useState(false)

  async function fetchEnvironment() {
    // const { data } = await api.get('plants_environments?_sort=title&_order=asc')
    const data = localdata.plants_environments

    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },
      ...data,
    ])
  }

  async function fetchPlants() {
    // const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
    const data = localdata.plants

    if (!data) {
      return setLoading(true)
    }

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data])
      setFilteredPlants((oldValue) => [...oldValue, ...data])
    } else {
      setPlants(data)
      setFilteredPlants(data)
    }

    setLoading(false)
    setLoadingPage(false)
  }

  function handleFetchMore(distance) {
    if (distance < 1) {
      return
    }

    setLoadingPage(true)
    setPage((oldValue) => oldValue + 1)
    fetchPlants()
  }

  useEffect(() => {
    fetchEnvironment()
    fetchPlants()
  }, [page])

  if (loading) {
    return <LoadAnimation />
  }

  return (
    <PlantSelectContainer>
      <Header text="Olá,"/>
      <TextBold>Em qual ambiente</TextBold>
      <Text>você quer colocar sua planta?</Text>
      <EnvironmentsList data={environments} setFilter={setFilteredPlants} dataToFilter={plants} />
      <PlantsList
        data={filteredPlants}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        loading={loadingPage}
      />
    </PlantSelectContainer>
  )
}
