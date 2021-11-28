const CONTACT = require("./Model")


module.exports = {
    addContact : async (req,res) => {
        try{
            const
            fullname = req.body.fullname,
            email = req.body.email,
            message = req.body.message;
    
            const contact = await new CONTACT({
                fullname,
                email,
                message
            })
            await contact.save();
            res.json(contact)
        }
        catch (err){
            console.log(err);
        }
    },
    getAllContacts : async (req,res) =>{
        try{
            const contact = await CONTACT.find();
            res.json(contact)
        }
        catch (err){
            console.log(err)
        }
    },
    deleteContact : async (req,res) =>{
        try{
            const contact = await CONTACT.findByIdAndDelete(req.params.id);
            res.json(contact)
        }
        catch (err){
            console.log(err)
        }
    },
    updateContact : async (req,res) =>{
        try{
            const contact = await CONTACT.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(contact);
        }
        catch (err){
            console.log(err);
        }
    },

    getOneContact : async (req,res) =>{
        try{
            const contact = await CONTACT.findById(req.params.id);
            res.json(contact);
        }
        catch (err){
            console.log(err);
        }
    }
}