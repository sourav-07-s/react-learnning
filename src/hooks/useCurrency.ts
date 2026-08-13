
 import { useEffect,useState } from "react"

 function useCurrency(currency:string){

   const[Data,setData] = useState({})

     useEffect(()=> {

        fetch (`https://v6.exchangerate-api.com/v6/f77379925d00ff4cf24aa184/latest/${currency}`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))

        console.log(Data)
     },[currency])

    return Data 
 }

 export default useCurrency ;