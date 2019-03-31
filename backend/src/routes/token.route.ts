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
			const token = req.header['x-access-token'];
			if (token === undefined) res.send('access denied');

			verify(token, this.app.get('secret'), (err, decoded) =>
				err ? res.send('access denied') : next()
			);
		});
	}
}

export = app => new TokenRoute(app);
