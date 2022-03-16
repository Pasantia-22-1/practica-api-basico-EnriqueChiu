const gethome = (req, res) =>{
    res.json({message: "Soy la ruta home"});
};

const getprofile = (req, res) =>{
    res.json({message: "Soy la ruta profile"});
};

const getcontact = (req, res) =>{
    res.json({message: "Soy la ruta contact"});
};

const getsingin = (req, res) =>{
    res.json({message: "Soy la ruta singin"});
};

const getsingup = (req, res) =>{
    res.json({message: "Soy la ruta singup"});
};

module.exports = {gethome, getprofile, getcontact, getsingin, getsingup}