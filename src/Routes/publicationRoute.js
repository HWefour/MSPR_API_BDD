const routers = require("express").Router();
const publicationControllers = require("../Controllers/Publication");



routers.get("/" , publicationControllers.getAllPublication);
routers.get("/:id" , publicationControllers.getPublicationById);

module.exports = routers ; 