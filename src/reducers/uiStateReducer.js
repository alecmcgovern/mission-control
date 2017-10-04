import initialState from './initialState';
import {OPEN_MENU, CLOSE_MENU, SET_PANEL} from '../actions/actionTypes';

export default function uiState(state = initialState.uiState, action) {

	switch(action.type) {
		case OPEN_MENU:
			console.log('OPEN_MENU Action');
			return {
				menuOpen: true,
				panelIndex: 0
			};
		case CLOSE_MENU:
			console.log('CLOSE_MENU Action');
			return {
				menuOpen: false,
				panelIndex: 0
			};
		case SET_PANEL:
			console.log('SET_PANEL to ' + action.panelIndex);
			return {
				menuOpen: true,
				panelIndex: action.panelIndex
			};
		default:
			return state;
	}
}