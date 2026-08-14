function Home() {
  return (

    <>
    <div className="mx-auto w-full max-w-7xl ">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">

        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to our website
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          This is the home page of our React Router application.
          Explore our website and learn more about what we offer.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/about"
            className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Learn More
          </a>

          <a
            href="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
    </>
  );
}

export default Home;