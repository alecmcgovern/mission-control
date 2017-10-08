import initialState from './initialState';
import {ADD_ITEM, CHANGE_ITEM_STATE} from '../actions/actionTypes';

export default function itemState(state = initialState.itemState, action) {
	switch(action.type) {
		case ADD_ITEM:
			console.log("ADD_ITEM " + action.item);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						itemLocation: 1,
					});
				}

				return item;
			});
		case CHANGE_ITEM_STATE:
			console.log("CHANGE_ITEM_STATE" + action.item.itemState);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						itemState: (item.itemState + 1) % 2,
					});
				}

				return item;
			});
		default:
			return state;
	}
}


/* Item locations:  0 = original position in gameView
				 1 = inventory
				 2 = placed somewhere in gameview

	Item states: 0 = immobile
				 1 = rotating
*/