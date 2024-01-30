const getProfile = async(req, res) => {
    return res.json(req.usuario);
};

export default getProfile;