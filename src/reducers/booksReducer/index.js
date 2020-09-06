/* eslint-disable indent */
import {
  FETCH_ALL_BOOKS_REQUEST,
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_ALL_BOOKS_ERROR,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_ERROR,
  EDIT_BOOK_REQUEST,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_ERROR
} from '../../constants';
const initialState = {
  isDataPresent:false,
  dataFetching:false,
  dateFetchingError: false,
  books: []
}

const BookListing = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_REQUEST: {
      console.log('FETCH_ALL_BOOKS_REQUEST fired');
      return {
        ...state,
        dataFetching: true,
        dateFetchingError: false,
        isDataPresent: false,
      }
    }
    case FETCH_ALL_BOOKS_SUCCESS: {
      console.log('FETCH_ALL_BOOKS_SUCCESS fired');
      return {
        ...state,
        dataFetching: false,
        isDataPresent: true,
        dateFetchingError: false,
        books: action.payload
      }
    }
    case FETCH_ALL_BOOKS_ERROR: {
      console.log('FETCH_ALL_BOOKS_ERROR fired');
      return {
        ...state,
        dateFetchingError: true,
        dataFetching: false,
        isDataPresent: false
      }
    }
    case ADD_BOOK_SUCCESS: {
      console.log('ADD_BOOK_SUCCESS fired', action.payload);
      return {
        ...state,
        books: [...state.books, {...action.payload}]
      }
    }
    case EDIT_BOOK_SUCCESS: {
      console.log('EDIT_BOOK_SUCCESS fired', action.payload);
      const booksList = state.books.slice();
      const bookToBeUpdatedIndex = booksList.findIndex(book => book.id === action.payload.id);
      return {
        ...state,
        books: [...state.books.slice(0, bookToBeUpdatedIndex), {...action.payload}, ...state.books.slice(bookToBeUpdatedIndex + 1)]
      }
    }
    default:
      return state;
  }
}

export default BookListing;
