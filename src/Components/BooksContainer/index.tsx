import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import Book from "./Card";
import { shallowEqual, useSelector } from "react-redux";

const BooksContainer: React.FC = () => {
  const Books: readonly Book[] = useSelector(
    (state: BookState) => state.Books,
    shallowEqual
  );
  useEffect(() => {
    document.getElementById("book-container")?.scrollIntoView();
  }, [Books]);
  return (
    <div
      id="book-container"
      className="overflow-y-auto flex sm:flex flex-col	md:grid grid-rows-4 grid-flow-col gap-4 sm:grid grid-rows-4  gap-4 w-screen p-10 items-center justify-center"
    >
      {Books.map((book) => (
        <Book
          id={book.id}
          title={book.volumeInfo.title}
          thumbnail={book.volumeInfo.imageLinks.thumbnail}
        />
      ))}
    </div>
  );
};
export default BooksContainer;
