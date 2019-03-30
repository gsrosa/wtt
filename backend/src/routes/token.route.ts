import { Application } from 'express';

class TokenRoute {
	app: Application;
	constructor(app: Application) {
		this.app = app;
		this.midleware();
	}

	midleware() {
		this.app.use('/*', (req, res, next) => {
			if (req.header['x-access-token'] === undefined)
				res.send('access denied');

			next();
		});
	}
}

export = app => new TokenRoute(app);
