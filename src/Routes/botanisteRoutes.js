const express = require("express");
const botanisteControllers = require("../Controllers/BotanisteControllers");
const routers = express.Router();

routers.get("/", botanisteControllers.getAllBotaniste);
routers.get("/:id", botanisteControllers.getBotanisteById);
routers.get("/bota/", botanisteControllers.getBotanisteComplet);
routers.get("/bota/:id", botanisteControllers.getBotanisteCompletById);
routers.post("/", botanisteControllers.createBotaniste);
routers.patch("/:id", botanisteControllers.updateBotaniste);
routers.delete("/:id", botanisteControllers.deleteBotaniste);

module.exports = routers;
