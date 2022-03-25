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
    <>
      <h1 className='form-title'>BANXICO API VISUALIZER</h1>

      <form className='form-container' ref={form}>
            <label className='form__label' htmlFor="token">Token</label>
            <input className='form__input' type="text" name='token' placeholder='01f04831044...'/>
            <label className='form__label' htmlFor="series">Series</label>
            <input className='form__input' type="text" name='series' placeholder='Example: SF61745,SP68257'/>
            <button className='form__button' onClick={handleSubmit}>Fetch</button>
      </form>
    </>
  )
}
