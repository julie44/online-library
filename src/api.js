const fetchStatusHandler = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

const fetchBooks = () => {
  return fetch('http://localhost:3004/books')
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(resp => {
        return resp;
    })
    .catch(error => {
        throw new Error(error);
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
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(resp => {
        return resp;
    })
    .catch(error => {
        throw new Error(error);
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
    .then(fetchStatusHandler)
    .then(response => response.json())
    .then(resp => {
        return resp;
    })
    .catch(error => {
        throw new Error(error);
    });
}

export default {
  fetchBooks,
  addBook,
  editBook
}