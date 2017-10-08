import * as types from './actionTypes';

export function addItem(itemName, itemLocation) {
	return {type: types.ADD_ITEM, item: { itemName: itemName, itemLocation: itemLocation }};
}

export function changeItemState(itemName, itemState) {
	return {type: types.CHANGE_ITEM_STATE, item: { itemName: itemName, itemState: itemState }};
}