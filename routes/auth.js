const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario, guardarPerfil } = require('../controllers/authController');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
router.post('/perfil', guardarPerfil);

module.exports = router;
