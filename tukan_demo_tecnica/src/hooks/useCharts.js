//Import dependencies
import  { useState , useContext } from 'react'
//Import queries
import { fetchData } from '../queries/fetchData'
//Import Context
import { AppContext } from '../Context/AppContext'

export const useCharts = (serie) => {
    const [graphType,setGraphType]=useState("line")
    const [showAddSeriesButon,setShowAddSeriesButon]=useState(false)
    const {dataSeries}=useContext(AppContext)

    // const [options,setOptions] = useState({
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: serie.titulo,
    //       },
    
    //     },
    //   })
    
    const options={
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: serie.idSerie + ' - ' + serie.titulo,
          },
    
        },
      }

    const [data,setData] = useState({
        labels:serie.datos.map(date=>date.fecha),
        datasets: [
          {
            label: serie.idSerie,
            data: serie.datos.map(value=>value.dato),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      })

    // const data={
    //     labels:serie.datos.map(date=>date.fecha),
    //     datasets: [
    //       {
    //         label: serie.idSerie,
    //         data: serie.datos.map(value=>value.dato),
    //         borderColor: 'rgb(255, 99, 132)',
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
    //     ],
    //   }

    const updateGraphType=(type)=>{
        if (type==='typeGraph') {
            return true
        }else{
            setGraphType(type)
        }
    }

    const addMoreSeries=(addSerie)=>{
        const seriesArray=dataSeries.map(serie=>serie.idSerie)
        if (seriesArray.includes(addSerie)) {
            const newData={...data}
            newData.datasets.push({
              label: dataSeries[seriesArray.indexOf(addSerie)].idSerie,
              data: dataSeries[seriesArray.indexOf(addSerie)].datos.map(value=>value.dato),
              borderColor: 'rgb(25, 99, 132)',
              backgroundColor: 'rgba(25, 99, 132, 0.5)',
            })
            setData(newData)
            
        }else{
            console.log('no incluye',addSerie)
        }
    }

    const handleMoreSeries=(e)=>{
        if (e==='addSeries') {
            return true
        }else{
          addMoreSeries(e)
        }
    }

    return {
        graphType,updateGraphType,options,data,handleMoreSeries,showAddSeriesButon
    }
}


