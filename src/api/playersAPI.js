class playersAPI {
	static getPlayersThisSeason() {
		// change this to the snooker api once live if https
		// return fetch('https://api.myjson.com/bins/xax7y')
		// 	.then(response => {
		// 		return response.json();
		// 	}).catch(error => {
		// 		return error;
		// 	});
		return fetch('https://raw.githubusercontent.com/eamonboyle/SnookerData/master/2019-season-players.json')
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	}
}

export default playersAPI;