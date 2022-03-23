//API Address
const API_address='https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/'

export const fetchData=async(token,series)=>{
    //console.log(`${API_address}${series}?token=${token}`)
    const url=`${API_address}${series}?token=${token}`
    
    console.log(token)
    console.log(series)

    let data=await fetch(url,{
        headers:{
            Authorization:token
        }
    })

    if (data.status===200) {
        data=await data.json()
        return data.bmx.series
    }

    
}