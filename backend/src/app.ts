import * as express from 'express';
import * as parser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as consign from 'consign';

class Express {
	public app: any;

	constructor() {
		this.app = express();
		this.initialize();
	}

	private initialize() {
		this.app.use(parser.urlencoded({ extended: true }));
		this.app.use(cors());
		this.app.use(morgan('dev'));

		consign({ extensions: ['.ts', '.js'] })
			.include('config')
			.then('models')
			.then('routes')
			.into(this.app);
	}
}

export default new Express().app;
