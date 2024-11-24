import {
    MISSION_REQUEST,
    MISSION_SUCCESS,
    MISSION_FAILURE,
  } from '../constants/misssionConstants';
  
  const initialState = {
    loading: false,
    mission: null,
    error: null,
  };
  
  const missionReducer = (state = initialState, action) => {
    switch (action.type) {
      case MISSION_REQUEST:
        return { ...state, loading: true };
      case MISSION_SUCCESS:
        return { loading: false, mission: action.payload, error: null };
      case MISSION_FAILURE:
        return { loading: false, mission: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default missionReducer;
  