import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import posts from './postsReduces';

const rootReducers = combineReducers({ form, posts });

export default rootReducers;
