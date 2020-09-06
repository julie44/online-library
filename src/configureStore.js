import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from './reducers';

const configureStore = () => {

  const middlewaresArr = [thunk];

  const store = createStore(root, applyMiddleware(...middlewaresArr));

  return store;
}

export default configureStore;
