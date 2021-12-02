var express = require('express');
const companies = require('../controllers/companies.controller');
var router = express.Router();

router.get("/companiesInfoList", companies.getCompanies);
router.post("/CompanyInfo", companies.getCompanyInfo);
router.post("/Login", companies.getCompany);
router.get("/SignUp", companies.signUpCompany);
router.get("/updateInfo", companies.updateCompany);
router.get("/deleteCompany", companies.removeCompany);


module.exports = router;