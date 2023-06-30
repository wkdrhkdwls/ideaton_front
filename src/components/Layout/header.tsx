import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-black dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
            진경옥몰
          </span>
        </Link>{" "}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
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
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {isMenuOpen ? (
          <div className="w-full xl:hidden">
            <ul className="flex flex-col font-medium mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent bg-[#D3D3D3] md:dark:bg-transparent ">
              <div className="flex flex-row  text-center">
                <Link
                  to="/login"
                  className="w-1/2 h-14 hover:text-white hover:bg-gray-700 md:hover:bg-transparent"
                >
                  <button className="mt-3">로그인</button>
                </Link>
                <Link
                  to="/signup"
                  className="w-1/2 h-14 hover:text-white hover:bg-gray-700 md:hover:bg-transparent"
                >
                  <button className="mt-3">회원가입</button>
                </Link>
              </div>
              <div>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
                  >
                    구매하기
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
                  >
                    정기배송신청하기
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent"
                  >
                    이달의원료
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    EVENT
                  </a>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <ul className="hidden md:flex md:space-x-8">
            <li>
              <a
                href="/login"
                className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                로그인
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                회원가입
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
