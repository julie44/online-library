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
  EDIT_BOOK_ERROR,
  CLEAR_INLINE_MESSAGE
} from '../../constants';
const initialState = {
  isDataPresent:false,
  dataFetching:false,
  dateFetchingError: false,
  books: [],
  inlineErrorMsg: '',
  inlineSuccessMsg: ''
}

const BookListing = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS_REQUEST: {
      return {
        ...state,
        dataFetching: true,
        dateFetchingError: false,
        isDataPresent: false,
      }
    }
    case FETCH_ALL_BOOKS_SUCCESS: {
      return {
        ...state,
        dataFetching: false,
        isDataPresent: true,
        dateFetchingError: false,
        books: action.payload
      }
    }
    case FETCH_ALL_BOOKS_ERROR: {
      return {
        ...state,
        dateFetchingError: true,
        dataFetching: false,
        isDataPresent: false
      }
    }
    case ADD_BOOK_SUCCESS: {
      return {
        ...state,
        books: [...state.books, {...action.payload}],
        inlineSuccessMsg: "Book added successfully!!!"
      }
    }
    case ADD_BOOK_ERROR:{
      return {
        ...state,
        inlineErrorMsg: "Unable to add new book. Please try again later"
      }
    }
    case EDIT_BOOK_SUCCESS: {
      const booksList = state.books.slice();
      const bookToBeUpdatedIndex = booksList.findIndex(book => book.id === action.payload.id);
      return {
        ...state,
        books: [...state.books.slice(0, bookToBeUpdatedIndex), {...action.payload}, ...state.books.slice(bookToBeUpdatedIndex + 1)],
        inlineSuccessMsg: "Book updated successfully!!!"
      }
    }
    case EDIT_BOOK_ERROR: {
      return {
        ...state,
        inlineErrorMsg: "Unable to edit the book. Please try again later"
      }
    }
    case CLEAR_INLINE_MESSAGE: {
      return {
        ...state,
        inlineErrorMsg: '',
        inlineSuccessMsg: ''
      }
    }
    default:
      return state;
  }
}

export default BookListing;
