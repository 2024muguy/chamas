// src/redux/reducers/partnersReducer.js
const initialState = {
    data: [],
  };
  
  const partnersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PARTNERS':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default partnersReducer;
  