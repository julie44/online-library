import React, {useState} from 'react';
import CloseIcon from '../images/close-icon.png';

const AddBookForm = ({initialValue = {}, submitHandler, callback, heading, ctaText}) => {
  const [title, setTitle] = useState(initialValue.title || '');
  const [author, setAuthor] = useState(initialValue.author || '');
  const [pages, setPages] = useState(initialValue.pages || '');
  const [language, setLanguage] = useState(initialValue.language || '');
  const [description, setDescription] = useState(initialValue.description || '');
  
  const formSubmit = () => {
    submitHandler({title, author, pages, language, description});
    if(callback){
      callback();
    }
  }
  return (
    <div className="addBookForm">
      <p className="addBookTitle">{heading}</p>
      <span className="closeIcon" onClick={callback}>
        <img src={CloseIcon} alt="close"  />
      </span>
      <form>
        <label>
          <p className="append_bottom15">Title</p>
          <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          <p className="append_bottom15">Author</p>
          <input name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          <p className="append_bottom15">Pages</p>
          <input name="pages" value={pages} onChange={(e) => setPages(e.target.value)} />
        </label>
        <label>
          <p className="append_bottom15">Language</p>
          <input name="language" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </label>
        <label>
          <p className="append_bottom15">Description</p>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="button" className="primaryCta" onClick={formSubmit}>{ctaText}</button>
      </form>
    </div>
    
  )
}

export default AddBookForm;