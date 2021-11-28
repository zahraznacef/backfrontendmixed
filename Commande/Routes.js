const router = require("express").Router()


const commande = require("./Controller")

router.post("/commande/add",commande.addCommande)

router.get("/commande/getAllCommandes",commande.getAllCommandes)

router.delete("/commande/deleteCommande/:id",commande.deleteCommande)

router.put("/commande/updateCommande/:id",commande.updateCommande)

router.get("/commande/getOneCommande/:id",commande.getOneCommande)


module.exports = router;