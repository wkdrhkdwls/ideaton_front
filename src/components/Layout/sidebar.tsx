import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const outside = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (outside.current && !outside.current.contains(e.target as Node)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsOpen(false);
  };

  return (
    <div
      id="sidebar"
      ref={outside}
      className={`z-5 px-12 border-l-2 bg-none h-full right-0 top-0 fixed transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* <div className="absolute left-0 p-4">
        <FaTimes
          className="cursor-pointer"
          size={32}
          color="red"
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />
      </div> */}

      <ul className="text-center font-bold text-red-400 mt-20 sm:text-[8px]">
        <li className="my-8">
          <Link to="/login">로그인</Link>
        </li>
        <li className="my-8">
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
