import playersAPI from '../api/playersAPI';
import * as types from './actionTypes';

export function loadAllPlayersThisSeason() {
	return function(dispatch) {
		return playersAPI.getPlayersThisSeason().then(players => {
			dispatch(loadPlayersSuccess(players));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadPlayersSuccess(players) {
	return {
		type: types.LOAD_PLAYERS_SUCCESS,
		players
	}
}