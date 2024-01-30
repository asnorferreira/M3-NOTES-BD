import express from 'express';
import controller from '../controller/index.js';
import middleware from '../middleware/index.js';

const router = express();

router.post('/', middleware.validateSales, controller.postSales)

export default router;