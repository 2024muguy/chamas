import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import rootReducer from './reducers'; // Import the combined root reducer

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Define and export ReduxProvider
export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
