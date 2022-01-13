import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getBooks } from "../store/actionCreators";
import BooksContainer from "./BooksContainer";
import Header from "./Header";
import Search from "./Search";

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const fetchBooks = React.useCallback(
    () => dispatch(getBooks("business")),
    [dispatch]
  );
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="h-full w-screen bg-[#f5f5f5]">
      <Header />
      <Search />
      <BooksContainer />
    </div>
  );
};

export default App;
