import {combineReducers} from 'redux';
import uiState from './uiStateReducer';
import itemState from './itemReducer';
import consoleState from './consoleReducer';


const rootReducer = combineReducers({
	uiState,
	itemState,
	consoleState
});

export default rootReducer;