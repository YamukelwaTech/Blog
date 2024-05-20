import React from "react";
import { ReactComponent as RefreshIcon } from "../assets/Icons/refresh.svg";

const Header = ({ onRefresh }) => {
  const iconSize = "1rem";
  return (
    <header className="fixed top-0 left-0 w-full p-4  z-10 flex justify-between items-center">
      <h1 className="ml-6">YamukelwaTech.Blog</h1>
      <button
        onClick={onRefresh}
        className="bg-yellow-800 text-white p-2 rounded-md mr-9"
      >
        <RefreshIcon width={iconSize} height={iconSize} />
      </button>
    </header>
  );
};

export default Header;
