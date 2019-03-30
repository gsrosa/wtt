import { Application } from 'express';
import * as mongoose from 'mongoose';

class Mongodb {
	app: Application;

	constructor(app: Application) {
		this.app = app;
		this.app.set('connection', this.connect());
	}

	async connect() {
		return new Promise((resolve, reject) => {
			const url = 'mongodb://localhost:27017/wtt';
			mongoose.connect(url, { useNewUrlParser: true }, err =>
				reject(err)
			);

			console.log('connect successful');

			resolve(mongoose);
		});
	}
}

export = (app: Application) => new Mongodb(app);
