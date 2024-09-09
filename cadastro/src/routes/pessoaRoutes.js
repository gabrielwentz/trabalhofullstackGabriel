const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');

// Rota para cadastrar uma nova pessoa
router.post('/pessoas', PessoaController.cadastrar);

module.exports = router;
