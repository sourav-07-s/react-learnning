import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import { App } from './App'
 import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import  About  from './components/About/About'


const router = createBrowserRouter([

{
  path : '/',
  element : <App/>,
  children : [
    {
      path : "",
      element : <Home/>
    },
    {
      path : "about",
      element : <About/>
    },
    
  ]
}

])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={(router)}/>
 
  </StrictMode>,
)
