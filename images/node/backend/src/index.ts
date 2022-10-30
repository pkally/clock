const express = require('express');
const app = express();

const path = require('path');

const pg = require('pg');
const port = 80;

app.use(express.static(path.resolve(__dirname, '../../frontend/build/')));
app.use(express.json());

const pool:any = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	port: 5432
});

const api_version:string = '/api/1.0/';
app.use(path.join(api_version, '/time/'), require('./time')(pool));

app.listen(port, () => {
	console.log(`App listening on port ${port}.`);
});
