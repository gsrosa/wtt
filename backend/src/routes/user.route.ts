import { Application } from 'express';

class UserRoute {
	app: Application;

	constructor(app: Application) {
		this.app = app;
		this.initRoute();
	}

	private initRoute() {
		console.log('route initialized');
	}
}

export default (app: Application) => new UserRoute(app);
