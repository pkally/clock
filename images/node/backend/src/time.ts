module.exports = (pool:any) => {
	const express = require('express');
	const router = express.Router();

	router.get('/current', (req:any, res:any) => {
		res.status(200).json({
			unix_epoch: [Math.round(Date.now())] // retrieves current unix_epoch in milliseconds
		});

	});

	router.get('/timezones', (req:any, res:any) => {
		// retrieve all timezones for coordination
		pool.query('SELECT name, abbrev, utc_offset FROM TimeZone;', (error:any, result:any) => {
			if (error) {
				console.error(`Could not retrieve time zones. ${error}`);
				res.status(404).end();
				return;

			}

			res.status(200).json({
				data: result.rows
			});

		});

	});

	return router;
}
