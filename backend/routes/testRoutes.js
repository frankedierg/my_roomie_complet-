const express = require('express');
const router = express.Router();
const { getTest } = require('../controllers/testController');

// Ruta GET de prueba
router.get('/', getTest);

module.exports = router;