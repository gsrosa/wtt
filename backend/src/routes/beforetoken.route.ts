import { Application } from 'express';
import { UserController } from '../modules/user/user.controller';
class BeforeToken {
	app: Application;
	controller: UserController;

	constructor(app: Application) {
		this.app = app;
		this.controller = new UserController(app);
		this.initRoute();
	}

	private initRoute() {
		this.app.route('/login').post(this.controller.login);
		this.app.route('/user').post(this.controller.insertUser);
	}
}

export = (app: Application) => new BeforeToken(app);
