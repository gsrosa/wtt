import { Application } from 'express';
import { Schema } from 'mongoose';

class ProductModel {
	app: Application;
	conn: any;

	constructor(app: Application) {
		this.app = app;
		this.conn = app.get('connection');
		this.initialize();
	}

	async initialize() {
		const productSchema = new Schema({
			name: { type: String, required: true },
			description: String,
			picture: { type: String },
			evaluation: { type: Number },
			created: { type: Date, default: new Date() },
		});

		const db = await this.conn;
		db.model('product', productSchema, 'product');
	}
}

export = (app: Application) => new ProductModel(app);
