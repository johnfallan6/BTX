import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { links } from "../Data/links";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div
      name="navbar"
      className="navBar max-w-[1280px] mx-auto flex justify-between items-center p-4 h-30 fixed-top"
    >
      {/* left-side nav  */}
      <div className="flex items-center justify-start">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer hover:scale-110 hover:text-blue-600"
        >
          <AiOutlineMenu size={30} className=" cursor-pointer" />
        </div>

        {/* center nav-bar header */}

        <h1 className="nav-header text-xl sm:text-2xl lg:text-3xl px-2 font-medium mr-20 items-center">
          <span className="font-bold text-5xl ml-20 items-center">BTX</span>{" "}
          <span className="hidden lg:flex items-center ml-20">
            Custom Cornhole Boards
          </span>
        </h1>
      </div>
      {/* search bar */}
      <div className="bg-gray-200 flex rounded-full items-center p-2 w-[100px] sm:w-[150px] lg:w-[300px] ">
        <AiOutlineSearch size={30} className="" />
        <input
          type="text"
          placeholder="Search BTX"
          className="bg-transparent focus:outline-none"
        />
      </div>
      {/* Login In Button */}
      <button className="hidden md:flex items-center justify-center bg-gray-200 rounded-full p-3 cursor-pointer hover:scale-105 hover:border-2 hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 duration-300">
        <BiLogIn size={20} /> Login
      </button>
      {/* cart button */}
      <button className="hidden md:flex items-center justify-center bg-gray-200 rounded-full p-3 cursor-pointer hover:scale-105 hover:border-2 hover:bg-gray-100 hover:border-blue-600 hover:text-blue-600 duration-300">
        <BsFillCartFill size={20} /> Cart
      </button>
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 l-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          BTX <span>Menu</span>
        </h2>
        {/* menu links */}
        <nav>
          <ul className="p-4">
            {links.map(({ id, link, child }) => (
              <li
                key={id}
                className="flex py-4 hover:scale-105 hover:text-blue-600"
              >
                {child}
                <Link to={link} smooth duration={400}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
