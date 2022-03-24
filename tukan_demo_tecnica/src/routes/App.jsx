//Import dependencies
import React from 'react'
import { useInititalState } from '../hooks/useInititalState'
//Import Context
import { AppContext } from '../Context/AppContext'
//Import containers
import { FormContainer } from '../containers/FormContainer/FormContainer'
import { ChartsContainers } from '../containers/ChartsContainers/ChartsContainers'
//Import components
import { Header } from '../components/Header/Header'
//Import styles
import './App.css'

function App() {
  
  const initialState=useInititalState()

  return (
    <AppContext.Provider value={initialState}>
      
      <Header />

      <main>

        <h1>BANXICO API VISUALIZER</h1>

        <FormContainer />

        <ChartsContainers />

      </main>
    </AppContext.Provider>

  )
}

export default App
