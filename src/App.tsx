import React, { useState } from 'react'

import {TodoProvider} from "./components/context/INdex"





export const App = () => {


 const [todos, setTodos] = useState<any[]>([]);
  
  const addTodo = (todo: any)=>{
    setTodos ((prev)=>[{id:Date.now(),...todo},...prev])
  } 
  const updateTodo = (id:any,todo: any)=>{
    setTodos ((prev)=>prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo)) )
  }
  const toogleComplete = ()=>{}
  const deleteTodo =()=> {}



  return (

<TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
  
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          
          <h1 className="text-2xl font-bold text-center mb-8">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            {/* <TodoForm /> */}
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/* Loop and add TodoItem here */}
          </div>

        </div>
      </div>
      </TodoProvider>
  )
}
