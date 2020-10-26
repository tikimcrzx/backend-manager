require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hola Mundo',
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.APPLICATION_NAME} - corriendo en el puerto`,
    process.env.PORT,
  );
});
