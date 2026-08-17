import useTheme from "./context/Theme";

export const ThemeButton = () => {
  const { ThemeMode, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => {
    if (ThemeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 pt-8">

      <button
        type="button"
        onClick={toggleTheme}
        className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
          ThemeMode === "dark"
            ? "bg-gray-600"
            : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
            ThemeMode === "dark"
              ? "translate-x-5"
              : "translate-x-0"
          }`}
        />
      </button>

      <span
     
      >
        Toggle Theme
      </span>

    </div>
  );
};

export default ThemeButton;