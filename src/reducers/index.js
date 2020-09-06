import { combineReducers } from 'redux';
import bookList from './booksReducer';

const root = combineReducers({
  bookList
});

export default root;
