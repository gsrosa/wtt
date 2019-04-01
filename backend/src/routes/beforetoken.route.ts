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
		this.app
			.route('/login')
			.post((req, res) => this.controller.login(req, res));
		this.app
			.route('/user')
			.post((req, res) => this.controller.insertUser(req, res));
	}
}

export = (app: Application) => new BeforeToken(app);
