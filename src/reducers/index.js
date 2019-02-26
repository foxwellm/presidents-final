import { combineReducers } from 'redux';
// import { isLoading, hasErrored, presidentsFetchDataSuccess } from '../actions';
import { isLoadingReducer } from './isLoadingReducer';
import {hasErroredReducer} from './hasErroredReducer'
import {presidentsReducer} from './presidentsReducer'


const rootReducer = combineReducers({
presidents: presidentsReducer,
  isLoading: isLoadingReducer,
  error: hasErroredReducer
})

export default rootReducer;