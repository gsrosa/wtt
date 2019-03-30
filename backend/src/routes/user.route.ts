import { Application } from 'express';
import { UserController } from '../modules/user/user.controller';
class UserRoute {
	app: Application;
	controller: UserController;

	constructor(app: Application) {
		this.app = app;
		this.controller = new UserController(app);
		this.initRoute();
	}

	private initRoute() {
		this.app.route('/user/:id').put(this.controller.updateUser);
	}
}

export = (app: Application) => new UserRoute(app);
