import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/new-post" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> },
];

const bgColor = "bg-gray-800";
const modalColor = "bg-gray-900";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav
      className={`w-full ${bgColor} ${
        isMobile ? "py-4 px-4" : "py-2 px-8 md:px-24"
      } sticky top-0 z-50`}
    >
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        {isMobile ? (
          <div className="flex items-center gap-4 text-white cursor-pointer">
            <FaBars onClick={toggleModal} className="text-white cursor-pointer" />
          </div>
        ) : (
          <ul className="flex gap-4 md:gap-8 items-center justify-center text-center cursor-pointer">
            {navLinks.map((link, index) => (
              <li key={index} className="text-white text-sm hover:underline">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showModal && isMobile && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className={`absolute inset-0 ${modalColor} opacity-90`} />
          <FaTimes
            className="absolute top-6 right-6 text-white cursor-pointer"
            onClick={toggleModal}
            style={{ fontSize: "24px" }}
          />
          <div className="relative bg-gray-900 w-full max-w-sm mx-auto p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center justify-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className="text-white font-light text-lg cursor-pointer hover:underline"
                  onClick={toggleModal}
                >
                  <Link to={link.url}>{link.title}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
