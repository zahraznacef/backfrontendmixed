const router = require("express").Router()


const user = require("./Controller")

router.post("/users/add",user.addUser)

router.get("/users/getAllUsers",user.getAllUsers)

router.delete("/users/deleteUser/:id",user.deleteUser)

router.put("/users/updateUser/:id",user.updateUser)

router.get("/users/getOneUser/:id",user.getOneUser)


module.exports = router;