import initialState from './initialState';
import {TOGGLE_MENU, SET_PANEL, SET_CAMERA, SET_FILTER, TOGGLE_TEST_CONTROLS, ROTATE_X, ROTATE_Y, ROTATE_Z, TOGGLE_FREEZE, ZOOM, AUTOROTATE, TOGGLE_ROTATION} from '../actions/actionTypes';

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
			console.log('SET_CAMERA to ' + action.camera.type);
			return Object.assign({}, state, {
				camera: {
					type: action.camera.type,
					filter: state.camera.filter
				}
			});
		case SET_FILTER:
			console.log('SET_FILTER to ' + action.camera.filter);
			return Object.assign({}, state, {
				camera: {
					type: state.camera.type,
					filter: action.camera.filter
				}
			});


		case TOGGLE_FREEZE:
			console.log('TOGGLE_FREEZE ' + !state.frozen);
			return Object.assign({}, state, {
				frozen: !state.frozen
			});
		case ROTATE_X:
			console.log('ROTATE_X ' + action.degrees);
			return Object.assign({}, state, {
				rotation: {
					x: action.degrees,
					y: state.rotation.y,
					z: state.rotation.z
				}
			});
		case ROTATE_Y:
			console.log('ROTATE_Y ' + action.degrees);
			return Object.assign({}, state, {
				rotation: {
					x: state.rotation.x,
					y: action.degrees,
					z: state.rotation.z
				}
			});
		case ROTATE_Z:
			console.log('ROTATE_Z ' + action.degrees);
			return Object.assign({}, state, {
				rotation: {
					x: state.rotation.x,
					y: state.rotation.y,
					z: action.degrees
				}	
			});

		case ZOOM:
			console.log('ZOOM' + action.zoom);
			return Object.assign({}, state, {
				zoom : action.zoom
			});

		case AUTOROTATE:
			return Object.assign({}, state, {
				autorotate: action.degrees
			});

		case TOGGLE_TEST_CONTROLS:
			console.log('TOGGLE_TEST_CONTROLS');
			return Object.assign({}, state, {
				testControls: !state.testControls
			});

		case TOGGLE_ROTATION:
			console.log('TOGGLE_ROTATION');
			return Object.assign({}, state, {
				spaceStationRotating: !state.spaceStationRotating
			});

		default:
			return state;
	}
}