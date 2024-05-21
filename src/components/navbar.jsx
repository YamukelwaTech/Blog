import React from "react";
import { ReactComponent as RefreshIcon } from "../assets/Icons/refresh.svg";
import { Link, useLocation } from "react-router-dom";

const Header = ({ onRefresh }) => {
  const iconSize = "1rem";
  const location = useLocation();

  // Determine if the current location is the new post page
  const isNewPostPage = location.pathname === "/new-post";

  return (
    <header className="fixed top-0 left-0 w-full p-4 z-10 flex justify-between bg-white items-center">
      <h1 className="ml-6">
        {isNewPostPage ? (
          <Link to="/" className="text-blue-500">Back</Link>
        ) : (
          <Link to="/">YamukelwaTech.Blog</Link>
        )}
      </h1>
      <div className="flex items-center">
        <button
          onClick={onRefresh}
          className="bg-yellow-800 text-white p-2 rounded-md mr-4"
        >
          <RefreshIcon width={iconSize} height={iconSize} />
        </button>
        <Link to="/new-post">
          {isNewPostPage ? "Cancel" : "New Post"} {/* Change text based on page */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
