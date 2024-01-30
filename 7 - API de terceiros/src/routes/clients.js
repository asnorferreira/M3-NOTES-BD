import express from 'express';
import controller from '../controller/index.js';
import middleware from '../middleware/index.js';

const router = express();

router.get('/', controller.getListClients);
router.post('/', middleware.validateClients, controller.postClients);

export default router;