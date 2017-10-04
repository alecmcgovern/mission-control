import initialState from './initialState';
import {OPEN_MENU, CLOSE_MENU, SET_PANEL} from '../actions/actionTypes';

export default function uiState(state = initialState.uiState, action) {
	let newState = state;

	switch(action.type) {
		case OPEN_MENU:
			console.log('OPEN_MENU Action');
			newState.menuOpen = true;
			return {
				menuOpen: true,
				panelIndex: 0
			};
		case CLOSE_MENU:
			console.log('CLOSE_MENU Action');
			newState.menuOpen = false;
			return {
				menuOpen: false,
				panelIndex: 0
			};
		case SET_PANEL:
			console.log('SET_PANEL to ' + action.panelIndex);
			newState.panelIndex = action.panelIndex;
			return {
				menuOpen: true,
				panelIndex: action.panelIndex
			};
		default:
			return state;
	}
}