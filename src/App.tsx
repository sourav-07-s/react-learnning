
import { useState } from "react"
import {InputBox} from "./components/index"
import useCurrency from "./hooks/useCurrency"


  export default function App(){

    const [amount, setamount] = useState<number>(0);
    const [from,setform] = useState("usd")
    const [To,setTO] = useState("inr")
    const [convertamount,setconvertamount] = useState<number>(0)

    const  Currency = useCurrency(from) 

      const options = Object.keys(Currency)

      const swap = () => {
        setTO(from)
          setform(To) 
        setconvertamount(amount)
        setamount(convertamount) 
      }

      setconvertamount(amount * Currency[To]) 
    return (
  
        
    )
  }