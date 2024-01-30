import pool from "../../configs/conection.js";

export const getListProducts = async (req, res) => {
  try {
    const sql =
      "select * from produtos";

    const listQuery = await pool.query(sql);

    const products = listQuery.rows;

    return res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao listar produtos: ", error);
    res.status(500).json({ message: error.message });
  }
};


