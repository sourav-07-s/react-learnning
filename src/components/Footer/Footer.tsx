
import { Link , NavLink } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:flex md:items-center md:justify-between">

        <span className="text-sm text-gray-400">
          © 2026 Your Website. All Rights Reserved.
        </span>

        <div className="flex mt-4 space-x-5 md:mt-0">
          <Link
            to="/"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </Link>

          <a
            href="#"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;