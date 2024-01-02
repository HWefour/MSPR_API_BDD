const routers = require("express").Router();
const botanisteControllers = require("../Controllers/BotanisteControllers");

routers.get("/", botanisteControllers.getAllBotaniste);
routers.get("/complet/bota", botanisteControllers.getBotanisteComplet);
routers.get("/complet/bota/:id", botanisteControllers.getBotanisteCompletById);
routers.get("/:id", botanisteControllers.getBotanisteById);
routers.post("/", botanisteControllers.createBotaniste);
routers.patch("/:id", botanisteControllers.updateBotaniste);
routers.delete("/:id", botanisteControllers.deleteBotaniste);



module.exports = routers;
