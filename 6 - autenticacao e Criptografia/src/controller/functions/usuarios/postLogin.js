import pool from "../../../conection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { securityPass } from "../../../passwordJwt.js";

const postLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const query = "select * from usuarios where email = $1";
    const params = [email];

    const emailQuery = await pool.query(query, params);
    if (emailQuery.rowCount < 1) {
      return res.status(404).json({ message: "Email ou senha invalida" });
    }

    const user = emailQuery.rows[0];

    const validPassword = await bcrypt.compare(senha, user.senha);

    if (!validPassword) {
      return res.status(400).json({ message: "Email ou senha invalida" });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      securityPass,
      {
        expiresIn: "8h",
      }
    );

    const { senha: _, ...usuarioLogado } = user;

    return res.status(200).json({ User: usuarioLogado, token });
  } catch (error) {
    console.error("Erro efetuar login do usuário: ", error);
    return res.status(500).json({ message: error.message });
  }
};

export default postLogin;
