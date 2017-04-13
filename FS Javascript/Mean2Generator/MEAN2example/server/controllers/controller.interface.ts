import {Request, Response} from 'express';

interface Controller {
	list(req: Request, res: Response): any;
	create(req: Request, res: Response): any;
	read(req: Request, res: Response): any;
	update(req: Request, res: Response): any;
	delete(req: Request, res: Response): any;
}

export default Controller;
