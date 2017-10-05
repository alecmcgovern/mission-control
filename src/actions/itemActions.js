import * as types from './actionTypes';

export function addItem(itemUrl) {
	return {type: types.ADD_ITEM, item: { itemUrl: itemUrl }};
}