import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/favicon.ico" className="h-8" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap ">
            Bookstore
          </span>
        </Link>

        <div className="relative flex-row mx-6 text-lg font-semibold px-4 py-4 bg-white w-auto items-center">
          <NavLink
            // className={`${(isActive) => {
            // isActive && "text-blue-400";
            // }}  text-gray-700 transition-colors duration-300 transform hover:text-blue-500 mx-4 my-0`}
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-gray-700"
            }
            // activeClassName={"text-blue-400"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className=" text-gray-700 transition-colors duration-300 transform hover:text-blue-500 mx-4 my-0"
            to={"/"}
          >
            About
          </NavLink>

          <NavLink
            className="text-gray-700 transition-colors duration-300 transform hover:text-blue-500 mx-4 my-0"
            to={"/favorites"}
          >
            Favorites
            <ThumbUpOutlinedIcon className="mx-1 max-h-4" />
            {/* <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span> */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
