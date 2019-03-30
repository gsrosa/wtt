import { Application, Request, Response } from 'express';
import { ProductController } from '../modules/product/product.controller';

class ProductRoute {
	app: Application;
	controller: ProductController;

	constructor(app: Application) {
		this.app = app;
		this.controller = new ProductController(app);
		this.initRoute();
	}

	private initRoute() {
		this.app
			.route('/product')
			.post(this.controller.insertProduct)
			.get(this.controller.getProducts);

		this.app
			.route('/product/:id')
			.put(this.controller.updateProduct)
			.delete(this.controller.removeProduct)
			.get(this.controller.getProductById);
	}
}

export = (app: Application) => new ProductRoute(app);
