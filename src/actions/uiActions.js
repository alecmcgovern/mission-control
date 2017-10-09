import * as types from './actionTypes';

export function toggleMenu() {
	return {type: types.TOGGLE_MENU};
}

export function setPanel(panelIndex) {
	return {type: types.SET_PANEL, panelIndex: panelIndex};
}

export function setCamera(camera) {
	return {type: types.SET_CAMERA, camera: camera};
}

