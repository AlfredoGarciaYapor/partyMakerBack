const { Company } = require('../models/companies.model');

// async function saludar(req, res){

//     console.log('Entrando a funcion saludar');
//     return res.status(200).json({"success": true, "data":[{"message": "que ondas desde el api"}]});
// }

async function getCompanyInfo(req, res){
    const {companyId} = req.body;

    try{
        if(companyId){
            const companyInfo = await Company.find({"_id": companyId}, 'name description phone city state address rating capacity category');
        
            if(companyInfo && companyInfo.length > 0){
                res.status(200).json({"success": true, "data": companyInfo});
            }else{
                res.status(204).json({"success": true, "data": []});
            }

        }else{
            return res.status(400).json({ "message": "Error in request: missing varibles.", "data": []});
        }
    }catch(err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding company", "data": []});
    }
}

async function getCompanies(req, res){

    try{
        const companyInfo = await Company.find({}, 'name description phone city state address rating capacity category');
    
        if(companyInfo && companyInfo.length > 0){
            res.status(200).json({"success": true, "data": companyInfo});
        }else{
            res.status(204).json({"success": true, "data": []});
        }
    }catch(err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding company: missing varibles.", "data": []});
    }
}

async function getCompany(req, res){
    const {email, password} = req.body;
    try {
        if(email && password){
            const companyInfo = await Company.findOne({"email": email, "password": password}, 'name description email password phone city state address rating capacity category');
            if (companyInfo == null) {
                return res.status(401).json({"message": "Información incorrecta en el inicio de sesión"});
            }else if(companyInfo && companyInfo.length > 0){
                res.status(200).json({"success": true, "data": companyInfo});
            }else{
                res.status(204).json({"success": true, "data": []});
            }
        }else{
            console.log(err);
            return res.status(500).json({ "message": "Error finding company: missing varibles.", "data": []});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding company: missing varibles.", "data": []});
    }
}

async function signUpCompany(req, res){
    const { name, email, password, city, state, address} = req.body;
    try {
        if(name && lastName && email && password){
            const newCompany = await new Company({
                "name": name,
                "description": "",
                "email": email,
                "password": password,
                "phone": "",
                "city": city,
                "state": state,
                "address": address,
                "capacity": "",
                "category": ""
            }).save();
    
            if(newCompany && newCompany.length >0){
                return res.status(200).json({"success": true, "data": newCompany});
            }else{
                return res.status(204).json({"success": true, "data": []});
            }
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error creating company.", "data": []});
    }

}

async function updateCompany(req, res){
    const {companyId, name, lastName, email, password, phone, city, state, address} = req.body;

    try {
        if(name && lastName && email && password && phone && city && state && address){
            const updatedCompany = await Company.updateOne({"_id": companyId}, {
                "name": name,
                "lastName": lastName,
                "email": email,
                "password": password,
                "phone": phone,
                "city": city,
                "state": state,
                "address": address
            })
    
            if(updatedCompany){
                return res.status(200).json({"success": true, "data": updatedCompany});
            }else{
                return res.status(204).json({"success": true, "data": []});
            }
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error updating company.", "data": []});
    }
}

async function removeCompany(req, res){
    const{adminId, companyId} = req.body;

    try {
        if(companyId && adminId==1234){
            const deletedCompany = await Company.deleteOne({"_id": companyId});

            if(deletedCompany){
                return res.status(200).json({"success": true, "data": companyId});
            }else{
                return res.status(204).json({"success": true, "data": []});
            }
        }else{
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error deleting company.", "data": []});
    }
}

module.exports = {
    getCompany,
    getCompanyInfo,
    getCompanies,
    signUpCompany,
    updateCompany,
    removeCompany
}