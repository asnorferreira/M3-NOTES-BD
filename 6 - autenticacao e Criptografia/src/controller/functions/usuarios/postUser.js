import pool from "../../../conection.js";
import bcrypt from "bcrypt";

const postUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(senha, 10);

    const query =
      "insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *";
    const params = [nome, email, encryptedPassword];
    const userQuery = await pool.query(query, params);

    const postUser = userQuery.rows[0];

    return res.status(201).json(postUser);
  } catch (error) {
    console.error("Erro ao cadastrar usuário: ", error);
    return res.status(500).json({ message: error.message });
  }
};

export default postUser;
