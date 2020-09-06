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
} from '../constants';
import api from '../api';

export const fetchBooks = () => dispatch => {
  dispatch({
    type: FETCH_ALL_BOOKS_REQUEST
  });
  api.fetchBooks().then((resp) => {
    dispatch({
      type: FETCH_ALL_BOOKS_SUCCESS,
      payload: resp
    });
  }).catch((err) => {
    dispatch({
      type: FETCH_ALL_BOOKS_ERROR
    });
  });
};

export const addBook = payload => dispatch => {
  dispatch({
    type: ADD_BOOK_REQUEST
  });
  api.addBook(payload).then((resp) => {
    dispatch({
      type: ADD_BOOK_SUCCESS,
      payload: resp
    });
  }).catch((err) => {
    dispatch({
      type: ADD_BOOK_ERROR
    });
  });
};


export const editBook = payload => dispatch => {
  dispatch({
    type: EDIT_BOOK_REQUEST
  });
  api.editBook(payload).then((resp) => {
    dispatch({
      type: EDIT_BOOK_SUCCESS,
      payload: resp
    });
  }).catch((err) => {
    dispatch({
      type: EDIT_BOOK_ERROR
    });
  });
};

export const clearInlineMessages = () => ({
  type: CLEAR_INLINE_MESSAGE
})