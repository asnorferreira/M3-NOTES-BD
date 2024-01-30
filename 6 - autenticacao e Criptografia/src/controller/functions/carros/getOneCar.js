import pool from "../../../conection.js";

const getOneCar = async (req, res) => {
  const carId = req.params.id;

  try {
    const query = "select * from carros where id = $1";
    const params = [carId];

    const carQuery = await pool.query(query, params);

    const listCar = carQuery.rows[0];

    if (!listCar) {
      return res.status(404).json({ message: "ID não encontrado" });
    }

    return res.status(200).json(listCar);
  } catch (error) {
    console.error("Erro ao obter carro: ", error);
    res.status(500).json({ message: error.message });
  }
};

export default getOneCar;
