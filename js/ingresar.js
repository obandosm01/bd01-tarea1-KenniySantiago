const sql = require('mssql')

const form = document.getElementById("form");

const config = {
    user: 'user_db_tp1',
    password: 'ContraDB01!',
    server: '159.203.106.150',
    database: 'TareaProgramada1',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};



function enviar(event) {
  event.preventDefault();
  try {
    let empleado;
    empleado.nombre = document.getElementsByName("nombre")[0].value;
    empleado.salario = Number(document.getElementsByName("salario")[0].value); //validar antes de parsear

    //consulta que llama a InsertarEmpleado(nombre, salario)
    //
  } catch (err) {
    alert(err)
  }
  finally {
    //cerrar conexion
  }

}

form.addEventListener("submit", enviar);
