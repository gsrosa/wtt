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
			.post((req, res) => this.controller.insertProduct(req, res))
			.get((req, res) => this.controller.getProducts(req, res));

		this.app
			.route('/product/:id')
			.put((req, res) => this.controller.updateProduct(req, res))
			.delete((req, res) => this.controller.removeProduct(req, res))
			.get((req, res) => this.controller.getProductById(req, res));
	}
}

export = (app: Application) => new ProductRoute(app);
