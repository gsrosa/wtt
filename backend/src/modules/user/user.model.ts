import { Application } from 'express';
import { User } from '../../models/user/user.interface';

export class UserModel {
	conn: any;
	constructor(app: Application) {
		this.conn = app.get('connection');
	}

	async insertUser(data: User) {
		const db = await this.conn;
		const model = db.model('user');

		const user = new model(data);

		const fn = (resolve, reject) =>
			user.save((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async updateUser({ _id, data }) {
		const db = await this.conn;
		const model = db.model('user');

		const fn = (resolve, reject) =>
			model
				.updateOne({ _id }, { data })
				.exec((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async findUser({ email, password }) {
		const db = await this.conn;
		const model = db.model('user');

		const fn = (resolve, reject) =>
			model.findOne({ email, password }).exec((err, doc) => {
				if (err) return reject(err);
				else if (doc === undefined) return reject(doc);
				resolve(doc);
			});

		return new Promise(fn);
	}
}
