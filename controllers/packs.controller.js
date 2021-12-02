const { Pack } = require('../models/packs.model')

async function getPacks(req, res){
    const {companyId} = req.body;

    console.log(req.body);

    try {
        const packsList = await Pack.find({'company' : companyId}).populate('company').select('name description cost')
        if ( packsList && packsList.length > 0 ) {
            res.status(200).json({"success": true, "data": packsList});
        }else{
            return res.status(204).json({"success": true, "data": []});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding packs.", "data": []});
    }
}

async function createNewPack(req, res){
    const {name, description, cost, companyId} = req.body;

    console.log(req.body);

    try {
        if(name && description && cost && companyId){
            const newPack = await new Pack({
                "name": name,
                "description": description,
                "cost": cost,
                "company": companyId
            }).save();
            if(newUser && newUser.length >0){
                return res.status(200).json({"success": true, "data": newPack});
            }else{
                return res.status(204).json({"success": true, "data": []});
            }            
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error creating pack.", "data": []});
    }
}

async function updatePack(req, res){
    const {packId, name, description, cost, companyId} = req.body;

    try {
        if(packId && name && description && cost && companyId){
            const updatedPack = await Pack.updateOne({"_id": packId},{
                "name": name,
                "description": description,
                "cost": cost,
                "company": companyId
            });

            return res.status(200).json({"success": true, "data": updatedPack});
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error updating pack.", "data": []});
    }
}

async function removePack(req, res){
    const {packId, companyId} = req.body

    try {
        if(packId && companyId){
            const deletedPack = await Pack.deleteOne({"_id": packId, "company": companyId});

            if(deletedPack){
                return res.status(200).json({"success": true, "data": packId});
            }else{
                return res.status(204).json({"success": true, "data": []});
            }
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error deleting pack."});
    }
}

module.exports = {
    getPacks,
    createNewPack,
    updatePack,
    removePack
}