const knex = require("../Config/knex");

async function getAllBotaniste() {
  return knex("BOTANISTE").select("*");
}

async function getBotanisteById(id) {
  return knex("BOTANISTE").where("idBotaniste", id);
}

async function deleteBotaniste(id) {
  return knex("BOTANISTE").where("idBotaniste", id).del();
}

async function updateBotaniste(id, botaniste) {
  return knex("BOTANISTE").where("idBotaniste", id).update(botaniste);
}

async function createBotaniste(botaniste) {
  return knex("BOTANISTE").insert(botaniste);
}

async function getBotanisteComplet() {
  return knex
    .select(
      "nomUsers",
      "prenomUsers",
      "siretBotaniste",
      "nomEntrepriseBotaniste",
      "numEntrepriseBotaniste"
    )
    .from("USERS")
    .leftJoin("BOTANISTE", function () {
      this.on("USERS.idBotaniste", "=", "BOTANISTE.idBotaniste");
    });
}

async function getBotanisteCompletById(id) {
  return knex
    .select(
      "nomUsers",
      "prenomUsers",
      "siretBotaniste",
      "nomEntrepriseBotaniste",
      "numEntrepriseBotaniste"
    )
    .from("USERS")
    .leftJoin("BOTANISTE", function () {
      this.on("USERS.idBotaniste", "=", "BOTANISTE.idBotaniste");
    })
    .where("USERS.idBotaniste", id);
}

module.exports = {
  getAllBotaniste,
  getBotanisteById,
  deleteBotaniste,
  updateBotaniste,
  createBotaniste,
  getBotanisteComplet,
  getBotanisteCompletById,
};
