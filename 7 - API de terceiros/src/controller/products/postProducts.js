import pool from "../../configs/conection.js";

export const postProducts = async (req, res) => {
  const { nome, descricao, valor } = req.body;

  try {
    const sql =
      "insert into produtos (nome, descricao, valor) values ($1, $2, $3) returning *";
    const params = [nome, descricao, valor];

    const postQuery = await pool.query(sql, params);

    const products = postQuery.rows[0];

    return res.status(201).json(products);
  } catch (error) {
    console.error("Erro ao cadastrar produtos: ", error);
    res.status(500).json({ message: error.message });
  }
};


