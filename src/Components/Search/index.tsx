import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import vector from "../../Assets/uni.png";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { getBooks } from "../../store/actionCreators";
const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const dispatch: Dispatch<any> = useDispatch();

  const fetchBooks = () => {
    dispatch(getBooks(query));
    // setQuery("");
  };

  return (
    <div className="flex md:flex-row p-2 sm:flex flex-col items-center justify-around bg-gradient-to-r from-cyan-500 to-blue-500 w-10/12  rounded-3xl container mx-auto">
      <div className="flex flex-col justify-between my-8">
        <div className="text-white p-4 md:text-4xl text-[#2e3468] text-left sm:text text-2xl font-sans font-black">
          Comfortable reading books only on our service <br />
        </div>
        <div className="text-white text-left p-4 text-xl font-bold ">
          We have a large number of free books <br />
          that you can download and read without internet
        </div>
        <div className="md:flex  items-center grid grid-rows-2 grid-flow-col gap-4">
          <label className="p-4 relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-5 flex items-center pl-2">
              <FontAwesomeIcon color="#4f46e5" icon={faSearch} size={"1x"} />
            </span>
            <input
              className="placeholder:font-bold placeholder:text-gray-400 block w-80 h-12 p-5 rounded-3xl bg-white  border border-gray-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchBooks()}
            />
            {query.length > 0 && (
              <span
                onClick={() => fetchBooks()}
                className="cursor-pointer absolute inset-y-0 right-8 flex items-center pl-2"
              >
                <FontAwesomeIcon
                  color="#4f46e5"
                  icon={faArrowRight}
                  size={"1x"}
                />
              </span>
            )}
          </label>
        </div>
      </div>

      <img
        style={{ width: "32rem" }}
        className="hidden md:block sm:w-48 "
        src={vector}
      />
    </div>
  );
};
export default Search;
