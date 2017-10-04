import initialState from './initialState';
import {TOGGLE_MENU, SET_PANEL} from '../actions/actionTypes';

export default function uiState(state = initialState.uiState, action) {

	switch(action.type) {
		case TOGGLE_MENU:
			console.log('TOGGLE_MENU Action');
			return Object.assign({}, state, {
				menuOpen: !state.menuOpen
			});
		case SET_PANEL:
			console.log('SET_PANEL to ' + action.panelIndex);
			return Object.assign({}, state, {
				panelIndex: action.panelIndex
			});
		default:
			return state;
	}
}