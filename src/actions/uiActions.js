import * as types from './actionTypes';

export function toggleMenu() {
	return {type: types.TOGGLE_MENU};
}

export function setPanel(panelIndex) {
	return {type: types.SET_PANEL, panelIndex: panelIndex};
}

export function setCamera(type) {
	return {type: types.SET_CAMERA, camera: { type: type }};
}

export function setFilter(filter) {
	return {type: types.SET_FILTER, camera: { filter: filter }};
}

export function toggleTestControls() {
	return {type: types.TOGGLE_TEST_CONTROLS};
}

