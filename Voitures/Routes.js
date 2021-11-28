const router = require("express").Router()


const voiture = require("./Controller")

router.post("/voiture/add",voiture.addVoiture)

router.get("/voiture/getAllVoitures",voiture.getAllVoitures)

router.delete("/voiture/deleteVoiture/:id",voiture.deleteVoiture)

router.put("/voiture/updateVoiture/:id",voiture.updateVoiture)

router.get("/voiture/getOneVoiture/:id",voiture.getOneVoiture)


module.exports = router;