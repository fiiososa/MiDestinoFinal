const bcrypt = require('bcryptjs');
const db = require('../db/connection');

// REGISTRO DE USUARIO
exports.registrarUsuario = async (req, res) => {
  const { nombre, cedula, telefono, correo, contraseña } = req.body;
  const hash = await bcrypt.hash(contraseña, 10);

  const sql = `INSERT INTO usuarios (nombre, cedula, telefono, correo, contraseña) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [nombre, cedula, telefono, correo, hash], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error al registrar el usuario');
    }
    res.send('Usuario registrado correctamente');
  });
};

// LOGIN DE USUARIO
exports.loginUsuario = (req, res) => {
  const { correo, contraseña } = req.body;
  const sql = `SELECT * FROM usuarios WHERE correo = ?`;

  db.get(sql, [correo], async (err, usuario) => {
    if (err) return res.status(500).send('Error en el servidor');
    if (!usuario) return res.status(401).send('Correo no registrado');

    const valido = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!valido) return res.status(401).send('Contraseña incorrecta');

    // Devuelve el usuario para guardarlo en localStorage
    res.send({ mensaje: 'Inicio de sesión exitoso', usuario });
  });
};

// GUARDAR PERFIL
exports.guardarPerfil = (req, res) => {
  const { usuario_id, oficios, horario, area, tarifa } = req.body;
  const oficiosTexto = Array.isArray(oficios) ? oficios.join(', ') : oficios;

  const sql = `INSERT INTO perfiles (usuario_id, oficios, horario, area, tarifa) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [usuario_id, oficiosTexto, horario, area, tarifa || null], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error al guardar el perfil');
    }
    res.send('Perfil guardado correctamente');
  });
};
