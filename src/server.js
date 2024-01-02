const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoute = require("../src/Routes/usersRoutes");
const botanisteRoute = require("../src/Routes/botanisteRoutes");
const annonceRoute = require("../src/Routes/annonceRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USERS ROUTES
app.use("/users", usersRoute);
app.use("/botaniste", botanisteRoute);
app.use("/annonce" , annonceRoute);


// TESTING THE SERVER
app.get("/test", async (req, res) => {
  res.status(200).json({ success: true });
});

// LAUNCHING THE SERVER
app.listen(1212, () => {
  console.log("The server is running on the port 1212");
});

module.exports = app;
