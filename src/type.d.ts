interface Book {
  kind: string;
  id: string;
  authors: Array;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: Array;
  readingModes: object;
  pageCount: Number;
  printType: string;
  categories: Array;
  searchInfo: {
    textSnippet: string;
  };
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: Array;
    publisher: string;
    publishedDate: Date;

    averageRating: Number;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };

  infoLink: string;
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: Number;
    };
    buyLink: string;
    offers: [
      {
        finskyOfferType: Number;
        listPrice: {
          amountInMicros: Number;
          currencyCode: string;
        };
        retailPrice: {
          amountInMicros: Number;
          currencyCode: string;
        };
      }
    ];
  };
}

interface BookType {
  type: string;
}

type BookState = {
  Books: Book[];
  BookDetail: Book;
};

type BookDetail = {
  Book: Book;
};

type BookAction = {
  type: string;
};

type BookAsyncSuccess = {
  type: string;
  data: Array;
};

type getBookAction = {
  type: string;
  payload: string;
};

type DispatchType = (args: BookAction) => BookAction;
type getDispatchType = (args: getBookAction) => getBookAction;
type APISuccessType = (args: BookAsyncSuccess) => BookAsyncSuccess;
