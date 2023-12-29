const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.get("/test" , async (req ,res)=> {
    res.status(200).json({success : true})
});

app.listen(1212, ()=> {console.log("The server is running on the port 1212");})