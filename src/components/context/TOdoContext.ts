import { createContext,useContext } from "react";


export const ToDoContext = createContext({

    
     ToDos: [
        {
            id:1,
            todo:"todo msg" ,
            completed : false
        },
      
    ],
  addTodo: (todo: {}) => {},

  updateTodo: (
  id: number,
  todo: {
    id: number;
    todo: string;
    completed: boolean;
  }
) => {},

  deleteTodo: (id: number) => {},

  toggleComplete: (id: number) => {},

})

export const useTodo = ()=>{
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider