import {createStore, compose } from 'redux';
import { syncHistroyWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments'
import posts from './data/posts'

//create an object for the default data
const defaultState = {
    posts: posts,
    comments: comments
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistroyWithStore(browserHistory, store);

export default store;   