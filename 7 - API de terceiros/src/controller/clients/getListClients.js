import pool from "../../configs/conection.js";

export const getListClients = async (req, res) => {
  try {
    const sql = "select * from clientes";
    const listQuery = await pool.query(sql);

    const clients = listQuery.rows;
    return res.status(200).json(clients);
  } catch (error) {
    console.error("Erro ao listar clientes: ", error);
    res.status(500).json({ message: error.message });
  }
};

