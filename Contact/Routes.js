const router = require("express").Router()


const contact = require("./Controller")

router.post("/contact/add",contact.addContact)

router.get("/contact/getAllContacts",contact.getAllContacts)

router.delete("/contact/deleteContact/:id",contact.deleteContact)

router.put("/contact/updateContact/:id",contact.updateContact)

router.get("/contact/getOneContact/:id",contact.getOneContact)


module.exports = router;