import { useState } from "react";
import { useTodo } from "../context/TOdoContext";

interface TodoItemProps {
  todo: {
    id: number;
    todo: string;
    completed: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const {
    updateTodo,
    deleteTodo,
    toggleComplete,
  } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, {
      ...todo,
      todo: todoMsg,
    });

    setIsTodoEditable(false);
  };

  return (
    <div className="flex w-full items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-sm">

      {/* Checkbox */}
      <input
        id={`complete-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="h-5 w-5 cursor-pointer"
      />

      {/* Todo text */}
      <input
        id={`todo-${todo.id}`}
        name={`todo-${todo.id}`}
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`w-full rounded-lg border px-2 py-1 text-black outline-none ${
          isTodoEditable
            ? "border-gray-300"
            : "border-transparent"
        } ${
          todo.completed
            ? "text-gray-400 line-through"
            : ""
        }`}
      />

      {/* Edit / Save */}
      <button
        type="button"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable(true);
          }
        }}
        className="h-8 w-8 rounded-lg bg-gray-100"
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="h-8 w-8 rounded-lg bg-gray-100"
      >
        ❌
      </button>

    </div>
  );
};

export default TodoItem;