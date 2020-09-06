import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import root from './reducers';
// import middlewares from './middlewares';

const configureStore = () => {

  const middlewaresArr = [thunk];

  // if (process.env.NODE_ENV !== 'production') {
  //   middlewaresArr.push(createLogger);
  // }
  // middlewaresArr.push(middlewares.omnitureMiddleware);
  // middlewaresArr.push(middlewares.pdtMiddleware);

  const store = createStore(root, applyMiddleware(...middlewaresArr));

  return store;
}

export default configureStore;
