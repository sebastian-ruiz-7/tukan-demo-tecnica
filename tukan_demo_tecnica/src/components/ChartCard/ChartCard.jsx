//Import dependencies
import React, { useEffect , useState } from 'react'
//Import ChartJS
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
//Import hooks
import { useCharts } from '../../hooks/useCharts';
//Import styles
import './ChartCard.css'

export const ChartCard = ({serie}) => {

  const ref=React.useRef(null)

  const {options,data,graphType,updateGraphType,handleMoreSeries,showAddSeriesButon}=useCharts(serie)
  
  
  // const [updateComp,setUpdateComp]=useState(0)

  // useEffect(()=>{
  // },[options,data,graphType])

  const downloadImage=()=>{
    const link=document.createElement('a');
    link.download=`${serie.titulo}`;
    link.href=ref.current.toBase64Image();
    link.click()
  }
    
  return (
    <div className='line-chart'>
      <Chart ref={ref}  type={graphType} data={data} options={options} redraw={true}/>
      <button onClick={downloadImage}>Download</button>


      <select className='change-type-chart' onChange={event=>updateGraphType(event.target.value)} name="" id="">
            <option value="typeGraph">Tipos de gráficas</option>
            <option value="bar">Barras</option>
            <option value="line">Linea</option> 
      </select>


      <select className='add-more-series' onChange={event=>handleMoreSeries(event.target.value)} name="" id="">
            <option value="addSeries">Añadir más series</option>
            <option value="SF61745">SF61745</option>
            <option value="SP68257">SP68257</option> 
            <option value="SF43718">SF43718</option> 
      </select>
    
      
    </div>
  )
}
