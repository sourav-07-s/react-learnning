import { useState } from "react";
import { useTodo } from "../context/TOdoContext";

interface TodoItemProps {
  todo: {
    id: number;
    todo: string;
    completed: boolean;
  };
}

function TodoItem({ todo }: TodoItemProps) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, todoMsg);
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 shadow-sm ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="h-5 w-5 cursor-pointer"
      />

      {/* Todo Input */}
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`w-full rounded-lg border px-3 py-1 outline-none ${
          isTodoEditable
            ? "border-black/20 bg-white"
            : "border-transparent bg-transparent"
        } ${
          todo.completed ? "text-gray-500 line-through" : "text-black"
        }`}
      />

      {/* Edit / Save */}
      <button
        type="button"
        onClick={() => {
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable(true);
          }
        }}
        className="rounded-lg bg-blue-500 px-3 py-1 text-sm font-medium text-white"
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;