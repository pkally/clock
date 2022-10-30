export function syncTime() {
	const headers = {'Accept': 'application/json'};

	// will return a promise
	return fetch('http://127.0.0.1:80/api/1.0/time/current', {method: 'GET', headers: headers})
	.then((response) => {
		if (response.ok) {
			const unix_epoch = response.json().then(
				(data) => {
					return data.unix_epoch[0];
				}				
			);

			return unix_epoch;

		} else {
			console.error('Server failed to service request.');
			return null;

		}

	}, () => { 
		console.error('Failed to retrieve time from server (networking issue).')
		return null;	

	});
}

export function getTimeZones() {
	const headers = {'Accept': 'application/json'};

	// will return a promise
	return fetch('http://127.0.0.1:80/api/1.0/time/timezones', {method: 'GET', headers: headers})
	.then((response) => {
		if (response.ok) {
			const zones = response.json().then(
				(result) => {
					return result.data;
				}				
			);

			return zones;

		} else {
			console.error('Server failed to service request.');
			return null;

		}

	}, () => { 
		console.error('Failed to retrieve timezones from server (networking issue).')
		return null;	

	});
}
