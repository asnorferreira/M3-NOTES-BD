import express from 'express'
import clients from './clients.js'
import products from './products.js'
import sales from './sales.js'

const router = express();

router.use('/cliente', clients)
router.use('/produto', products)
router.use('/venda', sales)

export default router;