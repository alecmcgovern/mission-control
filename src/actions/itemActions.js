import * as types from './actionTypes';

export function addItem(itemUrl, itemName, itemState) {
	return {type: types.ADD_ITEM, item: { itemUrl: itemUrl, itemName: itemName, itemState: itemState }};
}