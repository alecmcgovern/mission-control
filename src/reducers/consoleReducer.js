import initialState from './initialState';
import {COMPLETE_TASK, GO_BACK} from '../actions/actionTypes';

export default function consoleState(state = initialState.consoleState, action) {

	switch(action.type) {
		case COMPLETE_TASK:
			console.log('COMPLETE_TASK Action');
			return Object.assign({}, state, {
				taskNumber: state.taskNumber + 1
			});
		case GO_BACK:
			console.log('GO_BACK Action');
			if (state.taskNumber === 0) {
				return Object.assign({}, state);
			} else {
				return Object.assign({}, state, {
					taskNumber: state.taskNumber - 1
				});
			}
		default:
			return state;
	}
}