import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Contact from './components/Contactus/Contact'

import { App } from './App'
import Home from './components/Home/Home'
import  About  from './components/About/About'
import Github from './components/Github/Github'
import { GithubInfoLoader } from './components/Github/Github'


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
    {
      loader:GithubInfoLoader ,

      path:"github",
      element : <Github/>
    },
      {
      path : "contact",
      element : <Contact/>
    },
    
  ]
}

])




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={(router)}/>
 
  </StrictMode>,
)
