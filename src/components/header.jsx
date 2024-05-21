import React from "react";
import { ReactComponent as RefreshIcon } from "../assets/Icons/refresh.svg";
import { Link } from "react-router-dom";

const Header = ({ onRefresh }) => {
  const iconSize = "1rem";
  return (
    <header className="fixed top-0 left-0 w-full p-4  z-10 flex justify-between bg-white items-center">
      <h1 className="ml-6">
        <Link to="/">YamukelwaTech.Blog</Link> 
      </h1>
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
