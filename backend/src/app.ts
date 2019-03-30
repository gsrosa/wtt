import * as express from 'express';
import * as parser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';
const consign = require('consign');

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

		consign({ extensions: ['.ts'], cwd: 'src' })
			.include('config')
			.then('models')
			.then('routes')
			.into(this.app);

		['config', 'models', 'routes'].map((d: string) => {
			Object.keys(this.app[d]).map(k => {
				this.app[d][k].default(this.app);
			});
		});
	}
}

export default new Express().app;
