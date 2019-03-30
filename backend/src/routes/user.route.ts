import { Application, Request, Response } from 'express';

class UserRoute {
	app: Application;

	constructor(app: Application) {
		this.app = app;
		this.initRoute();
	}

	private initRoute() {
		this.app
			.route('/user')
			.get((req: Request, res: Response) => res.send('ok'));
	}
}

export = (app: Application) => new UserRoute(app);
