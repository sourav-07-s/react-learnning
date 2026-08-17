import useTheme from "./context/Theme";

function Card() {
  const { ThemeMode } = useTheme();

  return (
    <div
      className={`w-87.5 rounded-xl p-7 shadow-xl transition-colors duration-300 ${
        ThemeMode === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-black"
      }`}
    >
      
      <div className="mb-6 overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
          alt="Apple Watch"
          className="h-47.5 w-full object-cover"
        />
      </div>

      
      <h2 className="text-center text-xl font-bold leading-7">
        Apple Watch Series 7 GPS, Aluminium
        Case, Starlight Sport
      </h2>

     
      <div className="mt-4 flex items-center gap-2">
        <div className="flex text-yellow-400">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-400">★</span>
        </div>

        <span className="rounded bg-blue-200 px-2 py-1 text-sm font-semibold text-blue-800">
          4.0
        </span>
      </div>

      
      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-3xl font-bold">
          $599
        </h3>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;