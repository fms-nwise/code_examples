import {Request, Response} from 'express';
import BaseController = require('./base.controller');

class CoreController extends BaseController {
	list(req: Request, res: Response) {
		if (process.env.NODE_ENV === 'testing') {
			res.render('ng-unit-tests');
		} else {
			res.render('index');
		}
	}
}

export = CoreController;
