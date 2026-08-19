import { useState } from "react";
import { useTodo } from "../context/TOdoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({
      todo: todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex shadow rounded-lg overflow-hidden mb-4"
    >
   <input
  id="todo"
  name="todo"
  type="text"
  placeholder="Write a Todo..."
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
  className="w-full rounded-l-lg border border-black/10 bg-white px-3 py-2 text-black placeholder:text-gray-500 outline-none"
/>

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;