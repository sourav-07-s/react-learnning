import { useDispatch, useSelector } from "react-redux";

import { removeTodo } from "../TODOS/todoSlice";

export const Todos = () => {

  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();


  
  return (
  <>
  <div className="text-2xl font-bold text-gray-800 mb-4">
    Todos
  </div>

  <ul className="space-y-3">
    {todos.map((todo: any) => (
      <li
        key={todo.id}
        className="flex items-center justify-between
                   bg-gray-100 border border-gray-200
                   rounded-lg px-4 py-3
                   shadow-sm"
      >
        <span className="text-gray-800 font-medium">
          {todo.text}
        </span>

        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="ml-4 bg-red-500 hover:bg-red-600
                     text-white font-bold
                     w-8 h-8 rounded-full
                     flex items-center justify-center
                     transition duration-200"
        >
          X
        </button>
      </li>
    ))}
  </ul>
</>
  )

}
