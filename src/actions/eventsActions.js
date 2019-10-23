import eventsAPI from '../api/eventsAPI';
import * as types from './actionTypes';

export function loadAllEventsThisSeason() {
	return function(dispatch) {
		return eventsAPI.getEventsThisSeason().then(events => {
			dispatch(loadEventsSuccess(events));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadEventsSuccess(events) {
	return {
		type: types.LOAD_EVENTS_SUCCESS,
		events
	}
}