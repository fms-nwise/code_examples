import {Router} from 'express';
import CoreController = require('./controllers/core.controller');

/**
 * Define routes for the express application
 */
const router = Router();
const coreController = new CoreController();

router.get('/', coreController.list);

export = router;
