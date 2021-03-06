import { Application } from 'express';
import { Product } from '../../models/product/product.interface';
import * as mongoose from 'mongoose';

export class ProductModel {
	conn: any;
	constructor(app: Application) {
		this.conn = app.get('connection');
	}

	async insertProduct(data: Product) {
		const db = await this.conn;
		const model = db.model('product');

		const product = new model(data);
		console.log(product);

		const fn = (resolve, reject) =>
			product.save((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async updateProduct({ _id, data }) {
		const db = await this.conn;
		const model = db.model('product');

		const { name, evaluation, description } = data;

		const fn = (resolve, reject) =>
			model
				.updateOne({ _id }, { $set: { name, evaluation, description } })
				.exec((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async deleteProduct({ _id }) {
		const db = await this.conn;
		const model = db.model('product');

		const fn = (resolve, reject) =>
			model
				.deleteOne({ _id })
				.exec((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async findProduct() {
		const db = await this.conn;
		const model = db.model('product');

		const fn = (resolve, reject) =>
			model.find().exec((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}

	async findProductById(_id) {
		const db = await this.conn;
		const model = db.model('product');

		const fn = (resolve, reject) =>
			model
				.findOne({ _id })
				.exec((err, doc) => (err ? reject(err) : resolve(doc)));

		return new Promise(fn);
	}
}
