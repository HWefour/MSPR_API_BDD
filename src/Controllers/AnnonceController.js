const  {createAnnonce , deleteAnnonce , getAnnonceById , getAllAnnonce , updateAnnonce } = require("../Models/Annonce");

exports.createAnnonce= async (req ,res) =>{
    try {
        const annonce = await createAnnonce(req.body);
        res.status(200).json(annonce);
    } catch(err) {
        res.status(400).json({message : err.message})
    }
};

exports.deleteAnnonce = async (req , res)=>{
    const id = req.params.id;
    try {
        const annonce = await deleteAnnonce(id);
        res.status(200).json(annonce);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
};

exports.getAllAnnonce = async (req , res ) =>{
    try {
    const annonce = await getAllAnnonce();
    res.status(200).json(annonce);
    }catch(err) {
        res.status(400).json({message : err.message})
    }
};

exports.getAnnonceById = async (req , res)=>{
    const id = req.params.id;
    try{
        const annonce= await getAnnonceById(id);
        res.status(200).json(annonce);
    } catch(err) {
        res.status(400).json({message:err.message})
    }
};

exports.updateAnnonce = async(req , res)=>{
    const id = req.params.id ; 
    try{
        const annonce = await updateAnnonce(id , req.body);
        res.status(200).json(annonce);
        } catch (err) {
            res.status(400).json({message : err.message})
        }
};
