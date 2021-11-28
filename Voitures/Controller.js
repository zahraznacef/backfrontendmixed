const VOITURES = require("./Model")


module.exports = {
    addVoiture : async (req,res) => {
        try{
            const
            image = req.body.image,
            title = req.body.title,
            description = req.body.description,
            prix = req.body.prix


            const commande = await new VOITURES({
                description,
                title,
                image,
                prix
            })
            await commande.save();
            res.json(commande)
        }
        catch (err){
            console.log(err);
        }
    },
    getAllVoitures : async (req,res) =>{
        try{
            const commande = await VOITURES.find();
            res.json(commande)
        }
        catch (err){
            console.log(err)
        }
    },
    deleteVoiture : async (req,res) =>{
        try{
            const commande = await VOITURES.findByIdAndDelete(req.params.id);
            res.json(commande)
        }
        catch (err){
            console.log(err)
        }
    },
    updateVoiture : async (req,res) =>{
        try{
            const commande = await VOITURES.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json(commande);
        }
        catch (err){
            console.log(err);
        }
    },

    getOneVoiture : async (req,res) =>{
        try{
            const commande = await VOITURES.findById(req.params.id);
            res.json(commande);
        }
        catch (err){
            console.log(err);
        }
    }
}