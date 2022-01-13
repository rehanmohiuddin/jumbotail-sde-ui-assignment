import axios from "axios";
import {
  GET_BOOK_DETAILS,
  GET_BOOKS_SUCCESS,
  SEARCH_BOOK,
} from "./actionTypes";

export const getBooks = (query: string) => {
  return getBooksAsync(query);
};

export const getBooksDetail = (id: string) => {
  return getBooksDetails(id);
};
export const searchBooks = (keyword: string) => {
  return (dispatch: APISuccessType) => {
    dispatch({ type: SEARCH_BOOK, data: keyword });
  };
};
export const getBooksDetails = (id: string) => {
  return (dispatch: APISuccessType) => {
    dispatch({ type: GET_BOOK_DETAILS, data: id });
  };
};

export const getBooksAsync = (q: string) => {
  console.log("QUERY", q);
  return async (dispatch: APISuccessType) => {
    const resp = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}`
    );
    console.log("RESP", resp.data);
    if (resp.status === 200)
      dispatch({ type: GET_BOOKS_SUCCESS, data: resp.data.items });
  };
};
