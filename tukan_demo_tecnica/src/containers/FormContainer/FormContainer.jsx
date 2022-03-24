//Import dependencies
import React, { useRef , useContext } from 'react'
//Import queries
import { fetchData } from '../../queries/fetchData';
//Import Context
import { AppContext } from '../../Context/AppContext'
//Import styles
import './FormContainer.css'

export const FormContainer = () => {
  
  const form=useRef(null)

  const {setToken,setDataSeries}=useContext(AppContext)

    const handleSubmit=async(event)=>{
        event.preventDefault();
        setDataSeries(new Array())
        const formData=new FormData(form.current);

        const data=await fetchData(formData.get('token'),formData.get('series'));
        setDataSeries(data)
        setToken(formData.get('token'))
  }


  return (
    <form ref={form}>
          <label htmlFor="token">Token</label>
          {/* Delete the Value from the input tag, this is just for dev */}
          {/* <input type="text" name='token' placeholder='01f04831044...' value={'01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788'}/> */}
          <input type="text" name='token' placeholder='01f04831044...'/>
          <label htmlFor="series">Series</label>
          <input type="text" name='series' placeholder='Example: SF61745,SP68257'/>
          <button onClick={handleSubmit}>Fetch</button>

          
    </form>
  )
}
