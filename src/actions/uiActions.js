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

export function toggleFreeze() {
	return {type: types.TOGGLE_FREEZE};
}

export function setRotateX(degrees) {
	return {type: types.ROTATE_X, degrees: degrees};
}

export function setRotateY(degrees) {
	return {type: types.ROTATE_Y, degrees: degrees};
}

export function setRotateZ(degrees) {
	return {type: types.ROTATE_Z, degrees: degrees};
}

export function zoom(zoom) {
	return {type: types.ZOOM, zoom: zoom};
}

export function autorotate(degrees) {
	return {type: types.AUTOROTATE, degrees: degrees};
}

export function toggleRotation() {
	return {type: types.TOGGLE_ROTATION};
}
