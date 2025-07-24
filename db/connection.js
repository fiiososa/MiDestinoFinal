const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta donde se guardará la base de datos local
const dbPath = path.resolve(__dirname, 'plataforma_servicios.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar con SQLite:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// Crear tabla usuarios si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      cedula TEXT NOT NULL,
      telefono TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      contraseña TEXT NOT NULL
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS perfiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    oficios TEXT,
    horario TEXT,
    area TEXT,
    tarifa REAL
  )
`);
});

module.exports = db;
