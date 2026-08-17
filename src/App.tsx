
import { ThemeProvider } from "./components/context/Theme"
import { useState , useEffect } from "react"
import ThemeButton from "./components/button";
import Card from "./components/card";


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
        className={`flex min-h-screen w-full flex-wrap items-center transition-colors duration-300 ${
          ThemeMode === "dark"
            ? "bg-gray-900"
            : "bg-white"
        }`}
      >
      <div className="w-full">
         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
  
              {<ThemeButton/> }
         </div>

         <div className = "w-full max-w-sm mx-auto"
         >
          {<Card/>}
         </div>

      </div>


    </div>
    </ThemeProvider>
      
   
    
  )
}
