import { Application } from 'express';
import { ProductModel } from './product.model';
import { Product } from '../../models/product/product.interface';

export class ProductController {
	service: ProductModel;
	constructor(app: Application) {
		this.service = new ProductModel(app);
		return this;
	}

	async insertProduct(req: Request, res: any) {
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
}
