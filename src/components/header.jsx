import React from "react";

const Header = ({ onRefresh }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white p-4 border-b border-gray-300 z-10 flex justify-between items-center">
      <h1 className="ml-6">YamukelwaTech.Blog</h1>
      <button
        onClick={onRefresh}
        className="bg-blue-500 text-white p-2 rounded mr-7"
      >
        Refresh Feed
      </button>
    </header>
  );
};

export default Header;
