import React, {useState, Fragment} from 'react';
import {useDispatch} from 'react-redux';

import {editBook} from '../actions';
import useModal from '../hooks/useModal';
import AddBookForm from './AddBookForm';
import EditIcon from '../images/edit-icon.jpg';

const BookItem = ({id, author, title, pages, language, description}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { show: showModal, RenderModal, hide } = useModal();
  const dispatch = useDispatch();
  const editBookDispatched = param => dispatch(editBook({...param, id}));
  return (
    <Fragment>
      <div className="bookItem">
        <div className="flexOne">
          <div className="bookItemSection" onClick={() => setCollapsed(!collapsed)}>
            <p className="idCol">{id}</p>
            <p className="titleCol">{title}</p>
            <p className="authorCol">{author}</p>
            <p className="langCol">{language}</p>
          </div>
          {collapsed &&
          <div className="padding10">
            <div className="descCol append_bottom15">
              <p className="append_bottom15 bold">About the Book: </p>
              <p className="font14">{description}</p>
            </div>
            <p className="pagesCol"><span className="bold">Total Pages:</span> <span className="font14">{pages}</span></p>
          </div>
          }
        </div>
        <a href="#" className="editCol" onClick={showModal}>
          <img src={EditIcon} className="editIcon" />
        </a>
      </div>
      <RenderModal>
        <AddBookForm 
          heading="Edit the Book" 
          submitHandler={editBookDispatched}
          callback={hide}
          ctaText="Update"
          initialValue = {{
            title,
            author,
            pages,
            language,
            description
          }}
        />
      </RenderModal>
    </Fragment>
  )
}

export default BookItem;