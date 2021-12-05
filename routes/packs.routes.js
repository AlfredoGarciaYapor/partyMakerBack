var express = require('express');
var router = express.Router();

const {getPacks, createNewPack, updatePack, removePack} = require('../controllers/packs.controller');

router.post("/packageList", getPacks);//Ya esta funcionando
router.post("/newPackage", createNewPack);// ya jala
router.post("/updatePack", updatePack);//ya jala
router.post("/deletePack", removePack);//ya jala


module.exports = router;