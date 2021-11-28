const COMMANDE = require("./Model")


module.exports = {
    addCommande : async (req,res) => {
        try{
            const
            imagevoiture = req.body.imagevoiture,
            nomvoiture = req.body.nomvoiture,
            firstname = req.body.firstname,
            lastname = req.body.lastname,
            email = req.body.email,
            phonenumber = req.body.phonenumber,
            prixvoiture = req.body.prixvoiture


            const commande = await new COMMANDE({
                firstname,
                lastname,
                email,
                phonenumber,
                nomvoiture,
                imagevoiture,
                prixvoiture
            })
            await commande.save();
            res.json(commande)
        }
        catch (err){
            console.log(err);
        }
    },
    getAllCommandes : async (req,res) =>{
        try{
            const commande = await COMMANDE.find();
            res.json(commande)
        }
        catch (err){
            console.log(err)
        }
    },
    deleteCommande : async (req,res) =>{
        try{
            const commande = await COMMANDE.findByIdAndDelete(req.params.id);
            res.json(commande)
        }
        catch (err){
            console.log(err)
        }
    },
    updateCommande : async (req,res) =>{
        try{
            const commande = await COMMANDE.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(commande);
        }
        catch (err){
            console.log(err);
        }
    },

    getOneCommande : async (req,res) =>{
        try{
            const commande = await COMMANDE.findById(req.params.id);
            res.json(commande);
        }
        catch (err){
            console.log(err);
        }
    }
}


