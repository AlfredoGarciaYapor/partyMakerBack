var express = require('express');
var router = express.Router();

const {getPacks, createNewPack, updatePack, removePack} = require('../controllers/packs.controller');

router.post("/packageList", getPacks);
router.post("/newPackage", createNewPack);
router.post("/updatePack", updatePack);
router.post("/deletePack", removePack);


module.exports = router;