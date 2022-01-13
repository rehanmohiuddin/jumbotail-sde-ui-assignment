import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import BookHeaderLogo from "../../Assets/book-header-logo.png";
import UserAvatar from "../../Assets/user-demo.png";
import {
  faSearch,
  faSortDown,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/actionCreators";
const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch: Dispatch<any> = useDispatch();
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <nav className="flex items-center p-1 w-full justify-between font-sans ">
        <img className="w-72 h-36" src={BookHeaderLogo} />
        <FontAwesomeIcon
          className="md:hidden mr-5 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300  inline-flex items-center justify-center"
          icon={faBars}
          onClick={() => setToggle(!toggle)}
          size="2x"
        />

        <div className=" flex-1 items-center justify-evenly hidden sm:block md:flex w-full md:w-auto">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
              <FontAwesomeIcon color="#4f46e5" icon={faSearch} size={"1x"} />
            </span>
            <input
              className="cursor-pointer placeholder:font-bold placeholder:text-gray-400 block w-80 h-12 p-5 rounded-3xl bg-white  border border-gray-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
            {query.length > 0 && (
              <span
                onClick={() => dispatch(getBooks(query))}
                className="cursor-pointer absolute inset-y-0 right-3 flex items-center pl-2"
              >
                <FontAwesomeIcon
                  color="#4f46e5"
                  icon={faArrowRight}
                  size={"1x"}
                />
              </span>
            )}
          </label>
          <div className="text-[#5b5972]">News</div>
          <div className="text-[#5b5972]">Books</div>
          <div className="text-[#5b5972]">Authors</div>
          <div className="text-[#5b5972]">Categories</div>
          <div className="text-[#5b5972]">Support</div>
          <div className="vl"></div>

          <div className="flex items-center justify-between">
            <img className="h-12" src={UserAvatar} />
            <FontAwesomeIcon
              className="cursor-pointer"
              color="#4f46e5"
              icon={faSortDown}
              size={"1x"}
            />
          </div>
        </div>
      </nav>
      {toggle && (
        <div
          id="mobile-menu"
          className={
            " bg-[#f5f5f5] shadow-lg shadow-cyan-500/50 w-full h-max md:hidden sm:block w-full sm:w-auto"
          }
        >
          <div className=" flex flex-col items-center justify-center my-5 ">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                <FontAwesomeIcon color="#4f46e5" icon={faSearch} size={"1x"} />
              </span>
              <input
                className="placeholder:font-bold placeholder:text-gray-400 block w-80 h-12 p-5 rounded-3xl bg-white  border border-gray-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
              />
            </label>
            <div className="flex justify-evenly w-full items-center p-8">
              <div className="flex justify-center shadow-xl shadow-indigo-500/50 bg-indigo-500 text-white rounded-2xl text-center items-center w-36 h-14 p-1 ">
                News
              </div>
              <div className="flex shadow-xl shadow-indigo-500/50 justify-center bg-indigo-500 text-white rounded-2xl text-center items-center w-36 h-14 p-1">
                Books
              </div>
            </div>

            {/* <div className="text-[#5b5972]">Authors</div>
            <div className="text-[#5b5972]">Categories</div> */}
            <div className="flex shadow-xl shadow-indigo-500/50 justify-center bg-indigo-500 text-white rounded-2xl  text-center items-center w-36 h-14 p-1">
              Support
            </div>
            {/* <div className="vl"></div> */}
          </div>
          <div className=" bottom-4 flex flex-col	 items-center justify-center">
            <img className="h-24" src={UserAvatar} />
            <div className="font-black p-4 text-xl">Jhon Doe</div>
            {/* <FontAwesomeIcon
              className="cursor-pointer"
              color="#4f46e5"
              icon={faSortDown}
              size={"1x"}
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
