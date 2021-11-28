const USERS = require("./Model")


module.exports = {
    addUser : async (req,res) => {
        try{
            const 
            fullname = req.body.fullname,
            phonenumber = req.body.phonenumber,
            email = req.body.email,
            password = req.body.password;
    
            const user = await new USERS({
                fullname,
                phonenumber,
                email,
                password
            })
            await user.save();
            res.json(user)
        }
        catch (err){
            console.log(err);
        }
    },
    getAllUsers : async (req,res) =>{
        try{
            const user = await USERS.find();
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },
    deleteUser : async (req,res) =>{
        try{
            const user = await USERS.findByIdAndDelete(req.params.id);
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },
    updateUser : async (req,res) =>{
        try{
            const user = await USERS.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(user);
        }
        catch (err){
            console.log(err);
        }
    },

    getOneUser : async (req,res) =>{
        try{
            const user = await USERS.findById(req.params.id);
            res.json(user);
        }
        catch (err){
            console.log(err);
        }
    }
}