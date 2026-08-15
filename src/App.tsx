import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import  About  from './components/About/About'
import Github from './components/Github/Github'
import { GithubInfoLoader } from './components/Github/Github'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
 

export const App = () => {




const router = createBrowserRouter([

{
  path : '/',
  element : <Layout/>,
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
      path:"contact",
      element:<Contact/>
    }
    
  ]
}

])

  return (

     <>
 <RouterProvider router={(router)}/>

     </>
  )
}
