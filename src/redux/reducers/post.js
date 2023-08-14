import { GETPOSTS, ERROR, START_LOADING, END_LOADING } from "../constants/Constant";

const postReducers = (state = { isLoading: false, posts: [], error: '' }, action) => {
    switch (action.type) {
        case GETPOSTS:
            return { ...state, posts: action.payload };
        case ERROR:
            return { ...state, error: action.payload };
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}

export default postReducers;