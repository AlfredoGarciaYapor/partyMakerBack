var express = require('express');
var router = express.Router();
var {getMeetingsCompany, getMeetingsUser, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meetings.controller');

router.post("/CompanyInfo", getMeetingsCompany);//funcionando
router.post("/userInfo", getMeetingsUser);//funcionando
router.post("/newMeeting", createMeeting);//funcionando
router.post("/updateMeeting", updateMeeting);//funcionando
router.post("/cancelMeeting", deleteMeeting);//funcionando

module.exports = router;