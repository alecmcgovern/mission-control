import initialState from './initialState';
import {ADD_ITEM} from '../actions/actionTypes';

export default function itemState(state = initialState.itemState, action) {
	switch(action.type) {
		case ADD_ITEM:
			console.log("ADD_ITEM " + action.item);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						itemUrl: action.item.itemUrl,
						itemName: action.item.itemName,
						itemState: 1,
						className: action.item.className				
					});
				}

				return item;
			});
		default:
			return state;
	}
}


/* Item states:  0 = original position in gameView
				 1 = inventory
				 2 = placed somewhere in gameview
*/