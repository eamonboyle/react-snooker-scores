import rankingsAPI from '../api/rankingsAPI';
import * as types from './actionTypes';

export function loadAllRankingsThisSeason() {
	return function(dispatch) {
		return rankingsAPI.getRankingsThisSeason().then(rankings => {
			dispatch(loadRankingsSuccess(rankings));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadRankingsSuccess(rankings) {
	return {
		type: types.LOAD_RANKINGS_SUCCESS,
		rankings
	}
}