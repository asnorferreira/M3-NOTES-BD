import pool from "../../../conection.js";

const deleteCar = async (req, res) => {
  const carId = req.params.id;
  try {
    const query = "delete from carros where id = $1 returning *";
    const params = [carId];

    const carQuery = await pool.query(query, params);
    const deleteCar = carQuery.rows[0];

    if (carQuery.rows.length === 0) {
      return res.status(404).json({ mensagem: "Carro não encontrado" });
    }

    return res.status(200).json({
      message: "Carro deletado com sucesso",
      carro: deleteCar,
    });
  } catch (error) {
    console.error('Erro ao deletar dados: ', error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export default deleteCar;
