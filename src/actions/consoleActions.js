import * as types from './actionTypes';

export function goForward() {
	return {type: types.COMPLETE_TASK};
}

export function goBack() {
	return {type: types.GO_BACK};
}