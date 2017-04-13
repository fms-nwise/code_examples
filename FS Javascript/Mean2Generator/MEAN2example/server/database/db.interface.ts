import ConnectionState = require('./connection-state.enum');

interface DB {
	connect(): any;
	status(): ConnectionState;
}

export = DB;
