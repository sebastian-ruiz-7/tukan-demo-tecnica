import { useState } from 'react'

export const useInititalState = () => {
  const [token,setToken]=useState('')

  const [dataSeries,setDataSeries]=useState([])

  const [loading,setLoading]=useState(false)

  return{
      token,setToken,dataSeries,setDataSeries,loading,setLoading
  }
}
