import { UserModel } from './user.model';
import { Application } from 'express';
import { sign } from 'jsonwebtoken';

export class UserController {
	app: Application;
	service: UserModel;
	constructor(app: Application) {
		this.app = app;
		this.service = new UserModel(app);
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;

			const result = await this.service.findUser({ email, password });

			const token = sign({ email }, this.app.get('secret'));

			const { _id, name } = result;

			const dataReturn = {
				_id,
				name,
				email,
				token,
			};

			res.json(dataReturn);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	async insertUser(req, res) {
		try {
			const data = req.body;

			const result = await this.service.insertUser(data);

			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	async updateUser(req, res) {
		try {
			const _id = req.aprams.id;
			const data = req.body;

			const result = await this.service.updateUser({ _id, data });

			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}
}
