import {combineReducers} from 'redux';
import uiState from './uiStateReducer';
import itemState from './itemReducer';


const rootReducer = combineReducers({
	uiState,
	itemState
});

export default rootReducer;