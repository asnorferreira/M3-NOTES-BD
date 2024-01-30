import pool from "../../configs/conection.js";
import { createToken, getcharge } from "../../configs/strip.js";

export const postSales = async (req, res) => {
    const { cliente_id, produto_id, quantidade, card } = req.body;

    try {
        const sqlProduct = 'select * from produtos where id = $1';
        const paramsProduct = [produto_id];

        const productQuery = await pool.query(sqlProduct, paramsProduct);
        const product = productQuery.rows[0];

        const salesValue = product.valor * quantidade;
        const tokenCard = await createToken({ card })
        const charge = await getcharge(salesValue, tokenCard.id)

        const sql = 'insert into vendas (cliente_id, produto_id, quantidade, transacao_id) values ($1, $2, $3, $4) returning *';

        const sold = await pool.query(sql, [
            cliente_id,
            produto_id,
            quantidade,
            charge.id
        ])

        return res.status(201).json(charge)
    } catch (error) {
        if (error.response) {
            return res
                .status(400)
                .json({ message: error.response.data.error.message })
        }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
