import mongoose = require('mongoose');
import DB = require('./db.interface');
import ConnectionState = require('./connection-state.enum');

class Mongo implements DB {
	private connectionString: string;

	constructor(conStr: string) {
		this.connectionString = conStr || 'mongodb://localhost/angularattack';
	}

	connect(): any {
		mongoose.connect(this.connectionString, (err) => {
			if (err) {
				console.log('Could not connect to Mongo!!');
				console.log(err.name);
				console.log(err.message);
			}
		});
	}

	status(): ConnectionState {
		const connections = mongoose.connections;
		if (!connections) {
			return ConnectionState.DEAD;
		} else {
			for (let i = 0; i < connections.length; i++) {
				const connection = connections[i];
				if (!connection.host ||
					!connection.port ||
					!connection.name ||
					connection._readyState === 0) {
					return ConnectionState.DEAD;
				}
			}

			return ConnectionState.ALIVE;
		}
	}
}

export = Mongo;
