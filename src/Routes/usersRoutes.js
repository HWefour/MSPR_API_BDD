const express = require("express");
const routers = express.Router();
const usersControllers = require ("../Controllers/UsersController");


routers.get("/", usersControllers.getAllUsers);
routers.get("/:id", usersControllers.getUserById);
routers.post("/", usersControllers.createUser);
routers.put("/:id", usersControllers.updateUser);
routers.delete("/:id", usersControllers.deleteUser);

module.exports = routers;