import {combineReducers} from 'redux';
import uiState from './uiStateReducer';


const rootReducer = combineReducers({
	uiState
});

export default rootReducer;