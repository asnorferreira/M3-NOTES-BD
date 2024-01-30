const validateProducts = async (req, res, next) => {
  const { nome, valor } = req.body;

  if ((!nome || !valor)) {
    return res.status(400).json({ error: "All fields are required" });
  }

  next();
};

export default validateProducts;