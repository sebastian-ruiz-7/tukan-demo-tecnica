//Import dependencies
import React, { useState , useContext } from 'react'
//Import queries
import { fetchData } from '../queries/fetchData';
//Import Context
import { AppContext } from '../Context/AppContext';

export const useForm = () => {

    const {setToken,setLoading,setDataSeries}=useContext(AppContext)

    const [error,SetError] = useState(false)
    
    const handleSubmit=async(event,form)=>{
        event.preventDefault();
        setDataSeries(new Array())
        const formData=new FormData(form.current);

        if (formData.get('token')==='' || formData.get('series')==='') {
            SetError('Debes enviar el token y las series a graficar')
            return true
        }
        setLoading(true)
        
        const data=await fetchData(formData.get('token'),formData.get('series'));
        setDataSeries(data)
        setToken(formData.get('token'))
        SetError(false)
        setLoading(false)
    }


  return {
    handleSubmit,error
  }
}
