//Import dependencies
import React, { useRef , useContext } from 'react'
//Import hooks
import { useForm } from '../../hooks/useForm';
//Import Context
import { AppContext } from '../../Context/AppContext';
//Import modal
import { LoadingModal } from '../LoadingModal/LoadingModal';
//Import styles
import './FormContainer.css'

export const FormContainer = () => {
  
  const form=useRef(null)

  const {loading}=useContext(AppContext)

  const {error,handleSubmit} = useForm()


  return (
    <>
    {loading && <LoadingModal />}
      <h1 className='form-title'>BANXICO API VISUALIZER</h1>

      <form className='form-container' ref={form}>
            <label className='form__label' htmlFor="token">Token</label>
            <input className='form__input' type="text" name='token' placeholder='01f04831044...'/>
            <label className='form__label' htmlFor="series">Series</label>
            <input className='form__input' type="text" name='series' placeholder='Example: SF61745,SP68257'/>
            {error && <h1 className='error-message'>{error}</h1>}
            <button className='form__button' onClick={()=>handleSubmit(event,form)}>Fetch</button>
      </form>
    </>
  )
}
