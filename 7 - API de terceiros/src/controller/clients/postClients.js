import pool from "../../configs/conection.js";

const postClients = async (req, res) => {
  const { nome, email, telefone } = req.body;

  try {
    const sqlEmail = "select * from clientes where email = $1";
    const parmsEmail = [email];
    const emailQuery = await pool.query(sqlEmail, parmsEmail);

    if (emailQuery.rowCount > 0) {
      return res.status(400).json({ mensagem: "E-mail already exists!" });
    }

    const sql =
      "insert into clientes(nome, email, telefone) values ($1, $2, $3) returning *";
    const params = [nome, email, telefone];

    const clientQuery = await pool.query(sql, params);

    const postClient = clientQuery.rows[0];

    return res.status(201).json(postClient);
  } catch (error) {
    console.error("Erro ao cadastrar clientes: ", error);
    res.status(500).json({ message: error.message });
  }
};

export default postClients;