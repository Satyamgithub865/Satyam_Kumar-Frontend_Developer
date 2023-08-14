import * as api from '../../services/api'
import { GETPOSTS, ERROR, START_LOADING, END_LOADING } from '../constants/Constant';

export const fetchAllData = (query) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const response = await api.fetchAllData(query);

        dispatch({ type: GETPOSTS, payload: response.data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
    }
}