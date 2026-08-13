
import { useState } from "react"
import {InputBox} from "./components/index"
import useCurrency from "./hooks/useCurrency"


  export default function App(){

    const [amout,setamount] = useState(0)
    const [from,setform] = useState("usd")
    const [To,setTO] = useState("inr")
    const [convertamount,setconvertamount] = useState("0")

    const  Currency = useCurrency(from)  

    return (
   <InputBox/>
        
    )
  }