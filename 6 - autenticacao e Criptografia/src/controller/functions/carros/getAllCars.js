import pool from "../../../conection.js";

const getAllCars = async (req, res) => {
  try {
    const query = "select * from carros";
    const carsQuery = await pool.query(query);

    const listCars = carsQuery.rows;

    return res.status(200).json(listCars);
  } catch (error) {
    console.error("Erro ao listar carros: ", error);
    res.status(500).json({ message: error.message });
  }
};

export default getAllCars;
