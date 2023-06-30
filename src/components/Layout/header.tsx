import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 xl:px-20 md:px-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="lg:text-7xl text-2xl font-semibold whitespace-nowrap dark:text-white">
            진경옥몰
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4  bg-[#D3D3D3]">
            <div className="flex flex-row  text-center">
              <Link
                to="/login"
                className="w-1/2 h-14 hover:text-white hover:bg-gray-700 "
              >
                <button className="mt-3">로그인</button>
              </Link>
              <Link
                to="/signup"
                className="w-1/2 h-14 hover:text-white hover:bg-gray-700 "
              >
                <button className="mt-3">회원가입</button>
              </Link>
            </div>
            <div>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-white "
                >
                  구매하기
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-white"
                >
                  정기배송신청하기
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-white"
                >
                  이달의원료
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-700 hover:text-white"
                >
                  EVENT
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
