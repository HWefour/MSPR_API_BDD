const knex = require ("../Config/knex");

async function createUser(user){
    return knex("USERS").insert(user)
};

async function getAllUsers(){
    return knex("USERS").select("*")
};

async function getUserById(id){
    return knex("USERS").where("idUsers" , id)
};

async function updateUser(id , user) {
    return knex("USERS").where("idUsers" , id).update(user)
};

async function deleteUser(id){
    return knex("USERS").where("idUsers" , id).del()
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}