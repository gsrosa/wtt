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
			mongoose
				.connect(url, { useNewUrlParser: true })
				.then(conn => resolve(conn))
				.catch(err => reject(err));
		});
	}
}

export default (app: Application) => new Mongodb(app);
