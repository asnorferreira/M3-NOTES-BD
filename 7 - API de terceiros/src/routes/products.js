import express from 'express';
import controller from '../controller/index.js';
import middleware from '../middleware/index.js';

const router = express();

router.get('/', controller.getListProducts)
router.post('/', middleware.validateProducts, controller.postProducts);

export default router;