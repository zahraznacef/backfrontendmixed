const express = require("express");
const app = express();
const db = require("./config/db")
db();




const cors = require("cors")
app.use(cors());
app.use(express.json());


const 
    user = require("./Users/Routes"),
    voiture = require("./Voitures/Routes"),
    commande = require("./Commande/Routes"),
    contact = require("./Contact/Routes")

app.use("/app",user)
app.use("/app",voiture)
app.use("/app",commande)
app.use("/app",contact)


app.listen(4000,() =>{
    console.log("Server is currently running")
})