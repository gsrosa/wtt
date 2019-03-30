import { Application } from 'express';

class UserModel {
	app: Application;
	constructor(app: Application) {
		this.app = app;
		this.initialize();
	}

	initialize() {
		console.log('initialize user model');
	}
}

export default (app: Application) => new UserModel(app);
