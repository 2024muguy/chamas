import axios from 'axios';
import {
  CHAMA_LIST_REQUEST,
  CHAMA_LIST_SUCCESS,
  CHAMA_LIST_FAIL,
} from '../constants/chamaConstants';

// Fetch Chama list
export const listChamas = () => async (dispatch) => {
  try {
    dispatch({ type: CHAMA_LIST_REQUEST });

    const { data } = await axios.get('/api/chamas');

    dispatch({
      type: CHAMA_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHAMA_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
