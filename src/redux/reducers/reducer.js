import { combineReducers } from "redux";
import postReducers from './post';

export default combineReducers({
    posts: postReducers
})