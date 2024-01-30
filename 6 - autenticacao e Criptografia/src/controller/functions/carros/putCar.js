import pool from "../../../conection.js";

const putCars = async (req, res) => {
  const carId = req.params.id;
  const { modelo, marca, ano, cor, descricao } = req.body;
  try {
    const query =
      "update carros set modelo = $1, marca = $2, ano = $3, cor = $4, descricao = $5 where id = $6 returning *";
    const params = [modelo, marca, ano, cor, descricao, carId];

    const carQuery = await pool.query(query, params);
    const putCar = carQuery.rows[0];

    if (carQuery.rows.length === 0) {
      return res.status(404).json({ message: "ID não encontrado" });
    }

    return res.status(200).json(putCar);
  } catch (error) {
    console.error("Erro ao atualizar dados: ", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export default putCars;
