import { useState } from "react";
import Sidebar from "./sidebar";
import { FaGripVertical } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSide = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-gray-200 bg-none  xl:px-20 md:px-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className=" text-2xl font-semibold whitespace-nowrap">
            C - REALIZE
          </span>
        </a>
        <button
          onClick={toggleSide}
          type="button"
          className="sm:hidden md:hidden inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <FaGripVertical size={24} />
        </button>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </nav>
  );
};

export default Header;
