const {getAllUsers , createUser , deleteUser , getUserById , updateUser} = require("../Models/Users");

exports.getAllUsers = async(req , res)=> {
    try{
        const user = await getAllUsers();
        res.status(200).json({user})
    } catch(err){
        res.status(500).json({message : err.message})
    }
};

exports.getUserById = async (req , res)=>{
    const id = req.params.id;
    try{
        const user = await getUserById(id);
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
};

exports.createUser = async (req , res)=>{
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser)
    } catch(err){
        res.status(500).json({message : err.message})
    }
};

exports.updateUser = async (req , res) => {
    const id = req.params.id;
    try {
        const user= await updateUser(id, req.body);
        res.status(200).json(user)
    } catch(err){
        res.status(500).json({message : err.message})
    }
};



exports.deleteUser = async (req , res )=>{
    const id = req.params.id ;
    try{
        const user = await deleteUser(id);
        res.status(200).json({message : "the account has been deleted successfully !"})
    } catch(err) {
        res.status(500).json({message : err.message})
    }
};










