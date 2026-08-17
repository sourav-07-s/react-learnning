function Card() {
  return (
    <div className="w-[350px] rounded-xl bg-[#1f2937] p-7 shadow-xl">

      {/* Product Image */}
      <div className="mb-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
          alt="Apple Watch"
          className="h-[190px] w-full object-cover"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-center text-xl font-bold leading-7 text-white">
        Apple Watch Series 7 GPS, Aluminium
        Case, Starlight Sport
      </h2>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">

        <div className="flex text-yellow-400">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-500">★</span>
        </div>

        <span className="rounded bg-blue-200 px-2 py-1 text-sm font-semibold text-blue-800">
          4.0
        </span>

      </div>

      {/* Price + Button */}
      <div className="mt-5 flex items-center justify-between">

        <h3 className="text-3xl font-bold text-white">
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