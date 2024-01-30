import pool from '../../../conection.js';

const postCar = async (req, res) => {
    const { modelo, marca, ano, cor, descricao } = req.body;
    try {
        const query = 'insert into carros(modelo, marca, ano, cor, descricao) values ($1, $2, $3, $4, $5) returning *';
        const params = [modelo, marca, ano, cor, descricao];

        const postQuery = await pool.query(query, params);
        const postCar = postQuery.rows[0];

        return res.status(201).json(postCar);
    } catch (error) {
        console.error('Erro ao cadastrar carro: ', error);
        return res.status(500).json({ message: error.message });
    }
};

export default postCar;
