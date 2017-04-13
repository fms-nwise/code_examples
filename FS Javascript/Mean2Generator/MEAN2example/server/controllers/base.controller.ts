import {Request, Response} from 'express';
import Controller from './controller.interface';

class BaseController implements Controller {
	list(req: Request, res: Response) {
		throw new Error('Not implemented');
	}
	create(req: Request, res: Response) {
		throw new Error('Not implemented');
	}
	read(req: Request, res: Response) {
		throw new Error('Not implemented');
	}
	update(req: Request, res: Response) {
		throw new Error('Not implemented');
	}
	delete(req: Request, res: Response) {
		throw new Error('Not implemented');
	}
}

export = BaseController;
