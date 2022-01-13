import {
  GET_BOOKS,
  GET_BOOKS_SUCCESS,
  GET_BOOK_DETAILS,
  SEARCH_BOOK,
} from "./actionTypes";

const initialState: BookState = {
  Books: [],
  BookDetail: {
    kind: "",
    id: "",
    authors: "",
    publisher: "",
    publishedDate: "",
    description: "",
    industryIdentifiers: [],
    readingModes: {},
    pageCount: 0,
    printType: "",
    categories: [],
    searchInfo: {
      textSnippet: "",
    },
    volumeInfo: {
      title: "",
      subtitle: "",
      authors: [],
      publisher: "",
      publishedDate: new Date(),
      averageRating: 0,
      description: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
    },

    infoLink: "",
    saleInfo: {
      country: "",
      saleability: "",
      isEbook: false,
      listPrice: {
        amount: 0,
        currencyCode: "",
      },
      retailPrice: {
        amount: 0,
        currencyCode: 0,
      },
      buyLink: "",
      offers: [
        {
          finskyOfferType: 0,
          listPrice: {
            amountInMicros: 0,
            currencyCode: "",
          },
          retailPrice: {
            amountInMicros: 0,
            currencyCode: "",
          },
        },
      ],
    },
  },
};
const reducer = (
  state: BookState = initialState,
  action: BookAsyncSuccess
): BookState => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        Books: [...action.data],
      };
    case GET_BOOK_DETAILS:
      const _book = state.Books.filter((book) => book.id === action.data)[0];
      return {
        ...state,
        BookDetail: _book,
      };
  }
  return state;
};

export default reducer;
