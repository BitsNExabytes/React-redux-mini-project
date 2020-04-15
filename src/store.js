// import resouces from redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//allows us to use async callbacks within our actions
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

//middleware that ill be used will be stored in an array
const middleware = [thunk];

//create the store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
