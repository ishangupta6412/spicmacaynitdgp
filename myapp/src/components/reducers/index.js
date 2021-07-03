import { combineReducers } from 'redux';
import member from './member_reducer';
import record from './record_reducers';
const rootReducer = combineReducers({
   member,
   record
});

export default rootReducer;