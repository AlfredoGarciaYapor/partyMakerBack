var express = require('express');
const companies = require('../controllers/companies.controller');
var router = express.Router();

router.get("/companiesInfoList", companies.getCompanies);//funciona
router.post("/CompanyInfo", companies.getCompanyInfo);//funciona
router.post("/Login", companies.getCompany);// este tambien funciona
router.post("/SignUp", companies.signUpCompany);
router.post("/updateInfo", companies.updateCompany);
router.post("/deleteCompany", companies.removeCompany);


module.exports = router;