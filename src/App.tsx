
import { ThemeProvider } from "./components/context/Theme"
import { useState , useEffect } from "react"



export const App = () => {

  const [ThemeMode,setThemeMode] = useState("light") ;

  

const lightTheme = ()=> {

  setThemeMode("light")
}

const darkTheme = ()=> {
  setThemeMode("dark")
}


// actual theme change using the Context Api


useEffect(()=>{
  document.querySelector('html')?.classList.remove("light","dark");
  document.querySelector("html")?.classList.add(ThemeMode)


},[ThemeMode]
)


  return (

  <ThemeProvider value={{ ThemeMode ,darkTheme,lightTheme}}>

    <div
    className =" flex flex-wrap min-h-screen items-center"
    >
      <div className="w-full">
         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
  
              {/* thmebtn */ }
         </div>

         <div className = "w-full max-w-sm mx-auto"
         >
          {/* card */}
         </div>

      </div>


    </div>
    </ThemeProvider>
      
   
    
  )
}
