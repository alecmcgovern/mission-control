import initialState from './initialState';
import {ADD_ITEM} from '../actions/actionsTypes';

export default function itemState(state = initialState.itemState, action) {
	switch(action.type) {
		case ADD_ITEM:
			console.log(ADD_ITEM action.item);
			return [
				...state,
				{
					itemUrl: action.item.itemUrl
				}
			];
		default:
			return state;
	}
}