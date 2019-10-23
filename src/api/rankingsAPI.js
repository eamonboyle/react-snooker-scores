class rankingsAPI {
	static getRankingsThisSeason() {
		return fetch('https://raw.githubusercontent.com/eamonboyle/SnookerData/master/2019-season-players.json')
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	}
}

export default rankingsAPI;