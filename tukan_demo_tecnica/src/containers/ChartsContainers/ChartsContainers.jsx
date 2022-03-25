//Import dependencies
import React, { useContext } from 'react'
//Import components
import { ChartCard } from '../../components/ChartCard/ChartCard'
//Import Context
import { AppContext } from '../../Context/AppContext'

export const ChartsContainers = () => {

    const {dataSeries}=useContext(AppContext)
    
  return (
    <>
        {dataSeries.length>0 && (
            dataSeries.map(chart=><ChartCard serie={chart} key={`${chart.idSerie}`} />)   
        )}
    </>
  )
}
