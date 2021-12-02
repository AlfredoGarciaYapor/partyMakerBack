var express = require('express');
var router = express.Router();
var {getMeetingsCompany, getMeetingsUser, createMeeting, updateMeeting, deleteMeeting} = require('../controllers/meetings.controller');

router.post("/CompanyInfo", getMeetingsCompany);
router.post("/userInfo", getMeetingsUser);
router.post("/newMeeting", createMeeting);
router.post("/updateMeeting", updateMeeting);
router.post("/cancelMeeting", deleteMeeting);

module.exports = router;