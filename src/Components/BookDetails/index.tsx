import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BookImage from "./BookImage";
import Header from "../Header";
import {
  faArrowAltCircleLeft,
  faBook,
  faComment,
  faMailBulk,
  faStar,
  faThumbsUp,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { getBooks, getBooksDetail } from "../../store/actionCreators";
import { Dispatch } from "redux";

const BooksDetails: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const BookDetail: Book = useSelector(
    (state: BookState) => state.BookDetail,
    shallowEqual
  );

  const navigate = useNavigate();

  const ratings = () => {
    let _ratings = [0, 0, 0, 0, 0];
    const rating = parseInt(BookDetail.volumeInfo.averageRating.toString());
    for (let i = 0; i < rating; i++) {
      _ratings[i] = 1;
    }
    return _ratings;
  };
  return (
    <div className="relative overflow-x-auto  h-screen w-screen p-1 items-center container mx:auto ">
      <Header />
      <div
        className="absolute left-8 top-32 w-20 rounded-lg cursor-pointer  text-white p-3"
        onClick={() => navigate("/", { replace: true })}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" color="#000" />
      </div>
      {BookDetail && (
        <div className="md:flex flex-row sm:flex  w-full items-center  ">
          <BookImage image={BookDetail.volumeInfo.imageLinks.thumbnail} />
          <div className="items-center w-full ">
            <div className=" text-center md:text-left prose lg:prose-lg text-slate-500">
              <h1>{BookDetail.volumeInfo.title}</h1>
            </div>
            <div className="md:flex  grid-flow-col gap-4 items-center justify-evenly">
              <div className="md:flex grid grid-rows-2 grid-flow-col gap-4 items-center justify-around">
                <div className="flex items-center pr-4">
                  {ratings().map((rating) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      color={rating === 1 ? "#638ff1" : "#000"}
                      size="1x"
                    />
                  ))}
                </div>
                <div className="font-bold text-xl pr-4">
                  {BookDetail.volumeInfo.averageRating}
                </div>
                <div className="md:flex items-center pr-4">
                  <FontAwesomeIcon icon={faComment} color="#638ff1" />
                  <div className="text-sm font-bold ml-3">234 Reviews</div>
                </div>
                <div className="flex items-center pr-4">
                  <FontAwesomeIcon icon={faThumbsUp} color="#638ff1" />
                  <div className="text-sm font-bold ml-3">432 Likes</div>
                </div>
              </div>
              <div className=" md:flex items-center text-white ">
                <button className="bg-[#1da1f2] p-3 rounded-3xl w-36 m-2">
                  <FontAwesomeIcon icon={faTwitter} color="#fff" /> twitter
                </button>
                <button className="bg-[#4267B2] p-3 rounded-3xl w-36 m-2">
                  <FontAwesomeIcon icon={faFacebook} color="#fff" /> Facebook
                </button>
                <button className="bg-slate-500 p-3 rounded-3xl w-36 m-2">
                  <FontAwesomeIcon icon={faMailBulk} color="#fff" /> Email
                </button>
              </div>
            </div>
            <div className="font-bold subpixel-antialiased break-words text-sm  text-left items-center p-4 ">
              {BookDetail.volumeInfo.description
                .split(".")
                .splice(0, 5)
                .join(".")}
            </div>
            <div className="font-medium subpixel-antialiased break-words text-sm my-1 text-left items-center p-4 ">
              {BookDetail.volumeInfo.description
                .split(".")
                .splice(
                  5,
                  BookDetail.volumeInfo.description.split(".").length - 1
                )
                .join(".")}
            </div>
            <div className="md:flex grid grid-rows-2 grid-flow-col gap-4 items-center justify-center mr-24 ml-24">
              <div className="flex p-3 rounded-3xl items-center bg-[#fafafa] shadow-xl">
                <FontAwesomeIcon
                  size="2x"
                  className="m-2"
                  icon={faUserCircle}
                />
                <div className="flex flex-col items-center">
                  <div className="font-bold">Author</div>
                  <div className="font-medium whitespace-nowrap">
                    {BookDetail.volumeInfo.authors[0]}
                  </div>
                </div>
              </div>
              <div className="flex p-2 rounded-3xl items-center bg-[#fafafa] shadow-xl">
                <FontAwesomeIcon size="2x" className="m-2" icon={faBook} />
                <div className="flex flex-col items-center">
                  <div className="font-bold text-sm">Publisher</div>
                  <div className="font-medium p-1">
                    {BookDetail.volumeInfo.publisher}
                  </div>
                </div>
              </div>
              <div className="h-16 w-36 flex flex-col p-2 rounded-3xl items-center bg-[#fafafa] shadow-xl">
                <div className="font-bold text-sm text-center">
                  Publish Year
                </div>
                <div className="text-center font-medium p-1">
                  {BookDetail.volumeInfo.publishedDate.toString().split("-")[0]}
                </div>
              </div>
            </div>

            <div className="md:flex md:justify-between grid grid-rows-2 grid-flow-col gap-4 justify-center my-5 p-4 items-center  ">
              <div className="flex items-center">
                <button className="text-white mr-10 text-sm font-bold rounded-3xl w-24 h-10  bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300">
                  Buy Now
                </button>
                <button className="text-white mr-10 text-sm font-bold rounded-3xl w-24 h-10  bg-green-500 hover:bg-green-400 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
                  Preview
                </button>
              </div>
              <div className="flex  items-center">
                <div className="bg-gradient-to-r from-purple-500 to-red-500 rounded-xl w-24 text-white font-bold  p-2">
                  {(
                    (BookDetail.saleInfo.listPrice.amount /
                      BookDetail.saleInfo.retailPrice.amount) *
                    100
                  ).toFixed(0)}
                  % OFF
                </div>
                <div className="text-xl line-through font-medium pr-7 pl-4">
                  $ {BookDetail.saleInfo.listPrice.amount}
                </div>
                <div className="text-2xl pr-10 font-bold">
                  $ {BookDetail.saleInfo.retailPrice.amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BooksDetails;
