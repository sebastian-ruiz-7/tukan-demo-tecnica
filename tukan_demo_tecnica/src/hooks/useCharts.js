//Import dependencies
import  { useState , useContext } from 'react'
//Import queries
import { fetchData } from '../queries/fetchData'
//Import Context
import { AppContext } from '../Context/AppContext'

export const useCharts = (serie) => {
    const [graphType,setGraphType]=useState("line")
    const [currentSeries,setCurrentsSeries] = useState([serie.idSerie])
    const {token,dataSeries,setDataSeries}=useContext(AppContext)

    const getRandomColor=()=>{
      const colors=['#713E5A','#63A375','#EDC79B','#D57A66','#CA6680','#D6E5E3','#CACFD6']

      const randomIndex=Math.floor(Math.random()*colors.length)

      return colors[randomIndex]
    }
    
    const options={
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            // text: serie.idSerie + ' - ' + serie.titulo,
          },
    
        },
      }

    const sortDate=(fecha)=>{
      fecha = fecha.split('/')
      const month=fecha[1]
      fecha[1]=fecha[0]
      fecha[0]=month
      fecha.join('/')
      return fecha
    }

    const randomColor=getRandomColor()

    const [data,setData] = useState({
        labels:serie.datos.map(date=>{
          const fecha=sortDate(date.fecha)
          return new Intl.DateTimeFormat('es-Mx',{month:'short',year:'numeric'}).format(new Date(fecha))}),
        datasets: [
          {
            label: serie.idSerie,
            data: serie.datos.map(value=>value.dato),  
            borderColor: randomColor,
            backgroundColor: randomColor,
          },
        ],
      })


    const updateGraphType=(type)=>{
        if (type==='typeGraph') {
            return true
        }else{
            setGraphType(type)
        }
    }

    const addMoreSeries=async(addSerie)=>{
        const seriesArray=dataSeries.map(serie=>serie.idSerie)
        if (seriesArray.includes(addSerie)) {

          if (currentSeries.includes(addSerie)) {
            return true
          }else{

            //Process to add the new Serie to the chart
            const newData={...data}
            const randomColor=getRandomColor()
            newData.datasets.push({
              label: dataSeries[seriesArray.indexOf(addSerie)].idSerie,
              data: dataSeries[seriesArray.indexOf(addSerie)].datos.map(value=>value.dato),
              borderColor: randomColor,
              backgroundColor: randomColor,
            })
            setData(newData)

            //Process to prevent add the same serie to the chart
            const newCurrentSeries=[...currentSeries]
            newCurrentSeries.push(addSerie)
            setCurrentsSeries(newCurrentSeries)
          }
            
        }else{
          //Fetching the new array    
          const newSerie=await fetchData(token,addSerie)
          const newDateSeries=[...dataSeries]
          newDateSeries.push(newSerie[0])
          setDataSeries(newDateSeries)
          
          const seriesArray=newDateSeries.map(serie=>serie.idSerie)
          
          //Adding new serie to the chart
          const newData={...data}
          const randomColor=getRandomColor()

          newData.datasets.push({
            label: newDateSeries[seriesArray.indexOf(addSerie)].idSerie,
            data: newDateSeries[seriesArray.indexOf(addSerie)].datos.map(value=>value.dato),
            borderColor: randomColor,
            backgroundColor: randomColor,
          })
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
        graphType,updateGraphType,options,data,handleMoreSeries
    }
}


