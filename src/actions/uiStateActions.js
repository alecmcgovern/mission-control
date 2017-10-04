import * as types from './actionTypes';

export function openMenu() {
	return {type: types.OPEN_MENU};
}

export function closeMenu() {
	return {type: types.CLOSE_MENU};
}

export function setPanel(panelIndex) {
	return {type: types.SET_PANEL, panelIndex: panelIndex};
}