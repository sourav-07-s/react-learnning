import { useState } from "react";

export const Button = () => {
const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
            darkMode ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <span className="font-medium text-gray-900">
        Toggle Theme
      </span>
    </div>
  );
}

export default Button;
