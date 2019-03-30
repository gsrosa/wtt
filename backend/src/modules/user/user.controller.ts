import { UserModel } from './user.model';
import { Application } from 'express';

export class UserController {
	service: UserModel;
	constructor(app: Application) {
		this.service = new UserModel(app);
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;

			const result = await this.service.findUser({ email, password });

			res.json(result);
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
