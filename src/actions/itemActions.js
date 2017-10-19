import * as types from './actionTypes';

export function changeItemLocation(itemName, itemLocation) {
	return {type: types.CHANGE_ITEM_LOCATION, item: { itemName: itemName, itemLocation: itemLocation }};
}

export function changeItemState(itemName, itemState) {
	return {type: types.CHANGE_ITEM_STATE, item: { itemName: itemName, itemState: itemState }};
}

export function toggleSelect(item) {
	return {type: types.TOGGLE_SELECT, item: item};
}