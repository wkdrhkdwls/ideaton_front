import { useState } from "react";
import { Link } from "react-router-dom";
import { reactIcons } from "@assets/icons/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 xl:px-20 md:px-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
            진경옥몰
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200   dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {reactIcons.menu}
        </button>
        <div
          className={`w-full ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4  bg-gray-800 lg:flex-row xl:flex-row lg:text-2xl xl:text-2xl lg:justify-between xl:justify-between lg:bg-gray-800 xl:bg-gray-800 lg:text-white xl:text-white">
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 rounded   dark:hover:bg-gray-400 hover:text-white "
              >
                로그인
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 pl-3 pr-4 rounded dark:hover:bg-gray-400 hover:text-white "
              >
                회원가입
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4 rounded dark:hover:bg-gray-400 hover:text-white "
              >
                구매하기
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-400 hover:text-white"
              >
                정기배송신청하기
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-400 hover:text-white"
              >
                이달의원료
              </Link>
            </li>

            <li>
              <Link
                to="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100  dark:hover:bg-gray-400 hover:text-white"
              >
                EVENT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
