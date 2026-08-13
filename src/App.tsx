
import { useState } from "react"
import {InputBox} from "./components/index"
import useCurrency from "./hooks/useCurrency"


  export default function App(){

    const [amount, setamount] = useState<number>(0);
    const [from,setfrom] = useState("USD")
    const [To,setTO] = useState("INR")
    const [convertamount,setconvertamount] = useState<number>(0)

    const  Currency = useCurrency(from) 

      const options = Object.keys(Currency)

      const swap = () => {
        setTO(from)
          setfrom(To) 
        setconvertamount(amount)
        setamount(convertamount) 
      }

      const convert:any = () =>
      {

         setconvertamount(amount * Currency[To]) 
      }


   return (
    <div className="w-full min-h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat"
    style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOwnmS89evSvanrUpAVJ8m6w_C-ld1FtmbZGI9YKLUH-5OdKNqB1a_UM&s=10)`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >

            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency: string) =>
                  setfrom(currency)
                }
                onAmountChange={(amount: number) =>
                  setamount(amount)
                }
                selectCurrency={from}
              />
            </div>

            <div className="relative w-full h-0">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertamount}
                currencyOptions={options}
                onCurrencyChange={(currency: string) =>
                  setTO(currency)
                }
                selectCurrency={To}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {To.toUpperCase()}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}