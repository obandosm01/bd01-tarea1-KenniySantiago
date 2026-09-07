const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const PORT = 3000;

corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

const config = {
  user: 'user_db_tp1',
  password: 'ContraDB01!',
  server: '159.203.106.150',
  database: 'TareaProgramada1',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

app.get('/consultar', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .execute('dbo.ConsultarEmpleado');
    res.json(result.recordset);
  }
  catch (err) {
    res.status(500).send(err.message);
  }
});

app.post('/insertar', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('inNombre', sql.VarChar, req.body.nombre)
      .input('inSalario', sql.Money, req.body.salario)
      .execute('dbo.InsertarEmpleado');
    res.status(200).send('Empleado ingresado correctamente');
  }
  catch (err) {
    res.status(500).send(err.message);
  }
})


app.listen(PORT, () => {
  console.log(`La api está corriendo en localhost:${PORT}`);
});
