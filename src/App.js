import React, {useState, useEffect, Fragment} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchBooks, addBook } from './actions';
import useModal from './hooks/useModal'

import BookItem from './components/BookItem';
import AddBookForm from './components/AddBookForm';
import SearchIcon from './images/search-icon.png';

const App = () => {
  const [searchVal, setSearchVal] = useState('');
  const { show: showModal, RenderModal, hide } = useModal();
  const books = useSelector(state => state.bookList.books);
  const dispatch = useDispatch();
  const addBookDispatched = param => dispatch(addBook(param));

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookList = searchVal === '' ? books : books.filter(book => {
    return (
      book.title.toLowerCase().includes(searchVal) || 
      book.author.toLowerCase().includes(searchVal) || 
      book.language.toLowerCase().includes(searchVal)
    )
  });
  
  return (
    <div>
      {/* add loader later till books avl */}
      {(!searchVal && bookList.length === 0) ?
        <p className="loadText">Fetching data. Please Wait...</p>
        :
        <Fragment>
          <div className="searchSection">
            <p className="make_relative">
              <input type="text" placeholder="Search by Title, Author or Language" className="searchInput" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
              <img src={SearchIcon} className="searchIcon" />
            </p>
            <button className="secondaryCta" onClick={showModal}>Add New Book</button>
          </div>
          <div className="bookListWrapper">
            {bookList.length > 0 && (
              <div className="bookItem bookListHeader">
              <p className="idCol">ID</p>
              <p className="titleCol">Title</p>
              <p className="authorCol">Author</p>
              <p className="langCol">Language</p>
              <p className="editCol">Edit</p>
            </div>
            )}
            {bookList.length > 0 ? bookList.map(book => <BookItem {...book} key={book.title} />) : "Not Found"}
          </div>
          <RenderModal>
            <AddBookForm 
              heading="Add New Book" 
              submitHandler={addBookDispatched}
              callback={hide}
              ctaText="Submit"
            />
          </RenderModal>
        </Fragment>
      }
    </div>
  )
}

export default App;