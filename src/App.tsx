import React from 'react'
import UserContextProvider from './components/context/UseContextProvider'
import { Login } from './components/Login'
import Profile from './components/Profile'




export const App = () => {


  return (
    <UserContextProvider>
    <h1>hello i am Context </h1>
     <Login/>
     <Profile/>
      
    </UserContextProvider>
    
  )
}
