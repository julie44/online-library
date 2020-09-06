const fetchBooks = () => {
  // return fetch('http://demo8086586.mockable.io/book-list')
  return fetch('http://localhost:3004/books')
    .then(response => response.json())
    .then(resp => {
        // handle the response
        return resp;
    })
    .catch(error => {
        // handle the error
    });
}

const addBook = payload => {
  return fetch('http://localhost:3004/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(resp => {
        // handle the response
        return resp;
    })
    .catch(error => {
        // handle the error
    });
}


const editBook = payload => {
  return fetch(`http://localhost:3004/books/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(resp => {
        // handle the response
        return resp;
    })
    .catch(error => {
        // handle the error
    });
}

export default {
  fetchBooks,
  addBook,
  editBook
}