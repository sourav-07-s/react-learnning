import  { useState,useEffect } from 'react'

import {TodoProvider} from "./components/context/INdex"
import TodoForm from './components/TO-Do/TodoForm';
import TodoItem from './components/TO-Do/TodoItem';







export const App = () => {


 const [todos, setTodos] = useState<any[]>([]);
  
 const addTodo = (todo: any) => {
  const newTodo = {
    id: Date.now(),
    ...todo,
  };

  

  setTodos((prev) => [newTodo, ...prev]);
}

  const updateTodo = (id:any,todo: any)=>{
    setTodos ((prev)=>prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo)) )
  }

 const toggleComplete = (id: number) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>
      prevTodo.id === id
        ? {
            ...prevTodo,
            completed: !prevTodo.completed,
          }
        : prevTodo
    )
  );
};

  const deleteTodo =(id:any)=> {

    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }



useEffect(() => {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    const todos = JSON.parse(savedTodos);

    if (todos.length > 0) {
      setTodos(todos);
    }
  }
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  return (

<TodoProvider value={{ToDos: todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
  
     <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          
          <h1 className="text-2xl font-bold text-center mb-8">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm/>
          </div>

        <div className="mt-4 flex flex-col gap-3">
  {todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
    />
  ))}
</div>

        </div>
      </div>
      </TodoProvider>
  )
}
