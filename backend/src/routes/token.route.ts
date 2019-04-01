import { Application } from 'express';
import { verify } from 'jsonwebtoken';

class TokenRoute {
	app: Application;
	constructor(app: Application) {
		this.app = app;
		this.midleware();
	}

	midleware() {
		this.app.use('/*', (req, res, next) => {
			const token = req.headers['x-access-token'];
			if (token === undefined) return res.send('access denied');

			return verify(token, this.app.get('secret'), (err, decoded) =>
				err ? res.send('access denied') : next()
			);
		});
	}
}

export = app => new TokenRoute(app);
