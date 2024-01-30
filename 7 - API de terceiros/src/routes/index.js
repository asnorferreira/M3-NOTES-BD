import express from 'express'
import clients from './clients.js'
import products from './products.js'

const router = express();

router.use('/cliente', clients)
router.use('/produto', products)

export default router;