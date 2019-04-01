import { UserModel } from './user.model';
import { Application } from 'express';
import { sign } from 'jsonwebtoken';
import { Crypto } from '../../utils/cryptograph/crypto';

export class UserController {
	app: Application;
	private service: UserModel;

	constructor(app: Application) {
		this.app = app;
		this.service = new UserModel(app);
		return this;
	}

	async login(req, res) {
		try {
			let { email, password } = req.body;
			const result = await this.service.findUser({ email });

			Crypto.compare(password, result.password);

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
			console.log(err);
			res.status(400).send(err);
		}
	}

	async insertUser(req, res) {
		try {
			const data = req.body;
			data.password = await Crypto.generateHash(data.password);

			const result = await this.service.insertUser(data);
			const { email, _id, name } = result;
			const token = sign({ email }, this.app.get('secret'));

			res.json({ email, _id, name, token });
		} catch (err) {
			console.log(err);
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
