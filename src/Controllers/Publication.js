const {getAllPublication , getPublicationById} = require("../Models/Publier");

exports.getAllPublication = async (req , res)=> {
    try{
        const publication = await getAllPublication();
        res.status(200).json(publication);
    } catch(err) {
        res.status(400).json({message : err.message})
    }
};

exports.getPublicationById = async (req , res)=> {
    const id = req.params.id;
    try{
        const publication = await getPublicationById(id);
        res.status(200).json(publication);
    } catch (err) {
        res.status(400).json({message : err.message})
    }
};
