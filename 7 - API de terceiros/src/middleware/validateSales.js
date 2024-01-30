import pool from '../configs/conection.js';

export const validateSales = async (req, res, next) => {
    const { cliente_id, produto_id, quantidade } = req.body;

    const sqlClient = 'select * from clientes where id = $1';
    const paramsClient = [cliente_id];

    const clientQuery = await pool.query(sqlClient, paramsClient);

    if (clientQuery.rowCount < 1) {
        return res.status(404).json({ mensagem: 'Cliente não existe' })
    }

    const sqlProduct = 'select * from produtos where id = $1';
    const paramsProduct = [produto_id];

    const productQuery = await pool.query(sqlProduct, paramsProduct);

    if (productQuery.rowCount < 1) {
        return res.status(404).json({ mensagem: 'Produto não existe' })
    }

    if (quantidade < 1) {
        return res.status(400).json({ mensagem: 'A quantidade é de no minimo 1' })
    }
    next();
}