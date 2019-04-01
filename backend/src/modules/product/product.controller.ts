import { Application } from 'express';
import { ProductModel } from './product.model';

export class ProductController {
	service: ProductModel;
	constructor(app: Application) {
		this.service = new ProductModel(app);
		return this;
	}

	async insertProduct(req: any, res: any) {
		try {
			const data: any = req.body;

			const result = await this.service.insertProduct(data);

			res.json(result);
		} catch (err) {
			res.status(400).json(err);
		}
	}

	async updateProduct(req: any, res: any) {
		try {
			const _id: string = req.params['id'];
			const data: any = req.body;

			const result = await this.service.updateProduct({ _id, data });
			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	async removeProduct(req: any, res: any) {
		try {
			const _id: string = req.params['id'];

			const result = await this.service.deleteProduct({ _id });
			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	async getProducts(req: any, res: any) {
		try {
			const result = await this.service.findProduct();
			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}

	async getProductById(req: any, res: any) {
		try {
			const id = req.params.id;

			const result = await this.service.findProductById(id);
			res.json(result);
		} catch (err) {
			res.status(400).send(err);
		}
	}
}
