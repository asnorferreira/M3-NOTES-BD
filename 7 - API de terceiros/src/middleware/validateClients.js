const validateClients = async (req, res, next) => {
    const { nome, email, telefone } = req.body;

    if(!nome || !email || !telefone){
        return res.status(400).json({ error: 'All fields are required' });
    }

    next();
};

export default validateClients;