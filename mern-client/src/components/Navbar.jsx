import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlogger, FaBars, FaPhoenixFramework } from "react-icons/fa";
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Sell Your Book", path: "/admin/dashboard" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 ${
        isSticky ? "bg-blue-300" : "bg-transparent"
      }`}
    >
      <nav className="py-4 lg:px-24 px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlogger className="inline-block" /> Books
          </Link>
          <ul className="md:flex md:space-x-12 hidden items-center justify-center flex-1">
            {navItems.map(({ title, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button aria-label="Toggle menu" onClick={toggleMenu}>
              <FaBars className="w-5 hover:text-blue-700" />
            </button>
            {user ? user.email : ""}
          </div>
        </div>

        <div className="md:hidden flex justify-end">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaPhoenixFramework className="h-5 w-5 text-black" />
            ) : (
              <FaBars className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } flex flex-col items-center`}
        >
          {navItems.map(({ title, path }) => (
            <Link
              to={path}
              key={path}
              className="block text-white uppercase cursor-pointer"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
