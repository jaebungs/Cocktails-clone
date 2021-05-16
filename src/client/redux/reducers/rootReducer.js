import { combineReducers } from 'redux';
import cocktailsReducer from './cocktailsReducer';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  account: accountReducer,
});

export default rootReducer;
