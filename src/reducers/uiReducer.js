import initialState from './initialState';
import {TOGGLE_MENU, SET_PANEL, SET_CAMERA, TOGGLE_TEST_CONTROLS} from '../actions/actionTypes';

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
		case SET_CAMERA:
			console.log('SET_CAMERA to ' + action.camera);
			return Object.assign({}, state, {
				camera: action.camera
			});

		case TOGGLE_TEST_CONTROLS:
			console.log('TOGGLE_TEST_CONTROLS');
			return Object.assign({}, state, {
				testControls: !state.testControls
			})
		default:
			return state;
	}
}