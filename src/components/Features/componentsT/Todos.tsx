import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../TODOS/todoSlice";

export const Todos = () => {
    const todos = useSelector((state: any) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="w-full max-w-md mx-auto mt-8 px-4">
            <h2 className="text-2xl font-bold text-cyan-500 text-center mb-6">
                Todos
            </h2>

            <ul className="space-y-3">
                {todos.map((todo: any) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between
                        w-full
                        bg-gray-800
                        border border-gray-700
                        rounded-lg
                        px-4 py-3
                        shadow-md"
                    >
                        <span className="text-gray-100 font-medium wrap-break-words">
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="ml-4 shrink-0
                            bg-red-500 hover:bg-red-600
                            text-white
                            w-9 h-9
                            rounded-full
                            flex items-center justify-center
                            transition duration-200
                            cursor-pointer"
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export tods ;