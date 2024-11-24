import {
    CHAMA_LIST_REQUEST,
    CHAMA_LIST_SUCCESS,
    CHAMA_LIST_FAIL,
  } from '../constants/chamaConstants';
  
  export const chamaListReducer = (state = { chamas: [] }, action) => {
    switch (action.type) {
      case CHAMA_LIST_REQUEST:
        return { loading: true, chamas: [] };
      case CHAMA_LIST_SUCCESS:
        return { loading: false, chamas: action.payload };
      case CHAMA_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  