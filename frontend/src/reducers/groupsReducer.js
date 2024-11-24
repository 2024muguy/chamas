import { GET_GROUPS, JOIN_GROUP } from '../constants/groupsConstants';

const initialState = {
  groups: [],
  selectedGroup: null,
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: action.payload,
      };
    case JOIN_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
      };
    default:
      return state;
  }
};

export default groupsReducer;
