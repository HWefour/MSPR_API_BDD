const routers = require("express").Router();
const annonceControllers = require("../Controllers/AnnonceController");

routers.get("/" , annonceControllers.getAllAnnonce);
routers.get("/:id" , annonceControllers.getAnnonceById);
routers.post("/" , annonceControllers.createAnnonce);
routers.patch("/:id" , annonceControllers.updateAnnonce);
routers.delete("/:id" , annonceControllers.deleteAnnonce);

module.exports = routers