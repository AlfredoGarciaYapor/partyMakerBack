const { Meeting } = require('../models/meetings.model');

async function getMeetingsCompany(req, res){
    const { companyId } = req.body;
    try{
        if (companyId) {
            const meetingList = await Meeting.find({"company": companyId})
            .populate('company', 'name email phone city state address capacity category')
            .populate('user', 'name lastName phone email city state address')
            .populate('pack', 'name description cost').select('date user company pack hour');;
        
            if(meetingList && meetingList.length>0){
                res.status(200).json({"success": true, "data": meetingList});
            }else{
                res.status(204).json({"success": true, "data": []});
            }
        } else {
            return res.status(400).json({ "message": "Error in request: missing varibles.", "data": []});
        }

    }catch(err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding appointment"});
    }
}

async function getMeetingsUser(req, res){
    const { userId } = req.body;
    try{
        if (userId) {
            const meetingList = await Meeting.find({"user": userId})
            .populate('company', 'name email phone city state address capacity category')
            .populate('user', 'name lastName phone email city state address')
            .populate('pack', 'name description cost').select('date user company pack hour');
            
            if(meetingList && meetingList.length > 0){
                res.status(200).json({"success": true, "data": meetingList});
            }else{
                res.status(204).json({"success": true, "data": []});
            }
        } else {
            return res.status(400).json({ "message": "Error in request: missing varibles."});
        }

    }catch(err) {
        console.log(err);
        return res.status(500).json({ "message": "Error finding appointment"});
    }
}

async function createMeeting(req, res) {
    const {packId, date, userId, companyId, hour} = req.body;
     
     console.log('%c⧭', 'color: #00a3cc', req.body);
    try {
        if (packId && date && userId && companyId && hour) {
            const newMeeting = await new Meeting({
                date: date,
                user: userId,
                pack: packId,
                company: companyId,
                hour: hour
            }).save();

            if (newMeeting) {
                return res.status(200).json({"success": true, "data": newMeeting});
            } else {
                return res.status(204).json({"success": true, "data": []});
            }
        } else {
            return res.status(400).json({ "message": "Bad in request: missing varibles."});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error creating the appointment"});
    }
}

async function updateMeeting(req, res){
    const {packId, date, userId,  companyId, hour, meetingId} = req.body;


    try {
        if(meetingId && packId && date && userId && companyId && hour){
            console.log('%c⧭', 'color: #e50000', req.body);
            const updatedMeeting = await Meeting.updateOne({_id: meetingId}, {
                date: date,
                user: userId,
                pack: packId,
                company: companyId,
                hour: hour
            })

            if (updatedMeeting) {
                return res.status(200).json({"success": true, "data": updatedMeeting});
            } else {
                return res.status(204).json({"success": true, "data": []});
            }
        }else{
            return res.status(400).json({ "message": "Bad in request: missing varibles."});
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "Error updating the appointment"});
    }
}

async function deleteMeeting(req, res) {
    const { meetingId,  companyId} = req.body;

    try {

        console.log('%c⧭', 'color: #00bf00', req.body);
        if (meetingId && companyId) {
            const deletedMeeting = await Meeting.deleteOne({_id: meetingId, company: companyId});

            if (deletedMeeting) {
                res.status(200).json({"success": true, "message": "Success canceling the appoinment"});
            } else {
                res.status(204).json({"success": true, "message": "The meeting doesn't exists"});
            }
        } else {
            return res.status(400).json({ "message": "Error in request: missing varibles."});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "Error deleting the appointment"});
    }
}

module.exports = {
    getMeetingsCompany,
    getMeetingsUser,
    createMeeting,
    updateMeeting,
    deleteMeeting
}