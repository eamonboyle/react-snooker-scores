class eventsAPI {
	static getEventsThisSeason() {
		// change this to the snooker api once live if https
		// return fetch('https://api.myjson.com/bins/shwtq')
		// 	.then(response => {
		// 		return response.json();
		// 	}).catch(error => {
		// 		return error;
		// 	});
		return fetch('https://raw.githubusercontent.com/eamonboyle/SnookerData/master/2019-season-events.json')
			.then(response => {
				return response.json();
			}).catch(error => {
				return error;
			});
	}
}

export default eventsAPI;