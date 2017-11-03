import initialState from './initialState';
import {CHANGE_ITEM_LOCATION, CHANGE_ITEM_STATE, TOGGLE_SELECT} from '../actions/actionTypes';

export default function itemState(state = initialState.itemState, action) {
	switch(action.type) {
		case CHANGE_ITEM_LOCATION:
			console.log("CHANGE_ITEM_LOCATION " + action.item);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						itemLocation: action.item.itemLocation,
					});
				}

				return item;
			});
		case CHANGE_ITEM_STATE:
			console.log("CHANGE_ITEM_STATE" + action.itemState);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						itemState: action.item.itemState,
					});
				}

				return item;
			});
		case TOGGLE_SELECT:
			console.log("TOGGLE_SELECT" + action.item.itemName);
			return state.map((item) => {
				if (item.itemName === action.item.itemName) {
					return Object.assign({}, item, {
						selected: !item.selected
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
				 1 = lens used
*/