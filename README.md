# Plataforma Digital de Oferta y Demanda de Servicios

Este proyecto es una plataforma web que permite a usuarios registrarse como empleados o empleadores, iniciar sesión, y crear un perfil con datos personalizados. La plataforma facilita la conexión entre personas que buscan ofrecer o contratar servicios en las ciudades de Hohenau, Bella Vista y Obligado (Paraguay).

---

## 🚀 Funcionalidades principales

- Registro de usuarios (empleados o empleadores)
- Inicio de sesión con correo y contraseña
- Creación de perfil personalizado
  - Nombre, cédula, teléfono
  - Oficios múltiples
  - Horario laboral (mañana, tarde, personalizado)
  - Área de trabajo (ciudad)
  - Tarifa opcional
- Interfaz sencilla y estilizada
- Guardado de datos en base de datos local SQLite
- API backend funcional (Node.js + Express)

---

## 🧰 Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Base de datos**: SQLite
- **Control de versiones**: Git y GitHub
- **Editor**: Visual Studio Code

---

## 📁 Estructura del proyecto

plataforma-servicios/
│
├── controllers/ # Lógica del backend
│ └── authController.js
│
├── db/ # Base de datos SQLite y conexión
│ └── connection.js
│
├── public/ # Archivos HTML + CSS
│ ├── index.html
│ ├── registro.html
│ ├── login.html
│ ├── menu.html
│ ├── perfil.html
│ └── estilos.css
│
├── routes/ # Rutas de la API
│ └── auth.js
│
├── app.js # Archivo principal del servidor
└── README.md # Documentación del proyecto
