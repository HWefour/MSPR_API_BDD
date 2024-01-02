const knex = require("../Config/knex");

async function getAllPublication(){
    return knex("publier").select("*");
}

async function getPublicationById(id){
    return knex("publier").where("idAnnonce" , id);
}

module.exports = {
    getAllPublication ,
    getPublicationById
}