const knex = require("../Config/knex");

async function createAnnonce(annonce){
    return knex("ANNONCE").insert(annonce);
}

async function getAllAnnonce(){
    return knex("ANNONCE").select("*");
}

async function getAnnonceById(id){
    return knex("ANNONCE").where("idAnnonce" , id);
}

async function updateAnnonce(id , annonce){
    return knex("ANNONCE").where("idAnnonce" , id).update(annonce);
}

async function deleteAnnonce(id){
    return knex("ANNONCE").where("idAnnonce" , id).del();
}

module.exports = {
    createAnnonce,
    getAllAnnonce,
    getAnnonceById,
    updateAnnonce,
    deleteAnnonce
}