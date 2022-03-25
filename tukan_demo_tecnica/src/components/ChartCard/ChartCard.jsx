//Import dependencies
import React, { useEffect , useState } from 'react'
//Import ChartJS
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
//Import hooks
import { useCharts } from '../../hooks/useCharts';
//Import assets
import download from '../../assets/download.png'
//Import styles
import './ChartCard.css'

export const ChartCard = ({serie}) => {

  const ref=React.useRef(null)

  const {options,data,graphType,updateGraphType,handleMoreSeries}=useCharts(serie)
  

  const downloadImage=()=>{
    const link=document.createElement('a');
    link.download=`${serie.titulo}`;
    link.href=ref.current.toBase64Image();
    link.click()
  }

    
  return (

    

    <section className='section-container'>

      <p className='section__description-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt illum tempora animi cupiditate praesentium explicabo voluptatem nam quos, laborum impedit, architecto non odit dolorum saepe pariatur dignissimos earum sapiente.</p>

      <div className='chart-container'>
        <h1 className='chart__title'>{serie.idSerie + ' - ' + serie.titulo}</h1>
        <Chart ref={ref}  type={graphType} data={data} options={options} redraw={true}/>
        

        <div className='actions-container'>

          <div onClick={downloadImage} className='action-button download-button'>
            <figure>
              <img className='download-icon' src={download} alt="Download Button" />
            </figure>

            <p className='action-text'>Descargar</p>
          </div>


          <select className='action-button select-button' onChange={event=>updateGraphType(event.target.value)} name="" id="">
                <option value="typeGraph">Tipos de gráficas</option>
                <option value="bar">Barras</option>
                <option value="line">Linea</option> 
          </select>


          <select className='action-button select-button' onChange={event=>handleMoreSeries(event.target.value)} name="" id="">
                <option value="addSeries">Añadir más series</option>
                <option value="SF61745">SF61745</option>
                <option value="SP68257">SP68257</option> 
                <option value="SF43718">SF43718</option> 
          </select>

        </div>

      
        
      </div>

    </section>

  )
}
