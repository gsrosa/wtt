import { Application } from 'express';
import { Schema } from 'mongoose';
class UserModel {
	app: Application;
	conn: any;

	constructor(app: Application) {
		this.app = app;
		this.conn = app.get('connection');
		this.initialize();
	}

	async initialize() {
		const UserSchema = new Schema({
			name: { type: String, required: true },
			email: { type: String, required: true },
			password: { type: String, required: true },
		});

		const db = await this.conn;
		db.model('user', UserSchema, 'user');
	}
}

export = (app: Application) => new UserModel(app);
