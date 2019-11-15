const express = require('express');
const router = express.Router();

const address_controller = require('../controllers/address_controller');

router.post('/create', address_controller.address_create);


module.exports = router;