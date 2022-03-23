import { useState } from 'react'

export const useInititalState = () => {
  const [token,setToken]=useState('')

  const [dataSeries,setDataSeries]=useState([])

  return{
      token,setToken,dataSeries,setDataSeries
  }
}
