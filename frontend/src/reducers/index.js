import { combineReducers } from 'redux';
import missionReducer from './missionReducers'; 
import groupsReducer from './groupsReducer';   
import authReducer from './authReducer';
import partnersReducer from './partnersReducer';
import { chamaListReducer } from './chamaReducers';

// Combine all reducers into a rootReducer
const rootReducer = combineReducers({
  mission: missionReducer,  
  groups: groupsReducer,   
  auth: authReducer, 
  partners: partnersReducer,
  chamaList: chamaListReducer,
});

export default rootReducer;
