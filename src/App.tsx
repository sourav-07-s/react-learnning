
import { AddTodo } from "./components/Features/componentsT/AddTodo"
import { Todos } from "./components/Features/componentsT/Todos"



export const App = () => {
  return (
    <>
   <div>
    <h1  className="text-2xl font-extrabold flex justify-center mt-11">Learn about redux Tool Kit</h1>
    <AddTodo/>
    <Todos/>
 </div>
    </>

  )
}
