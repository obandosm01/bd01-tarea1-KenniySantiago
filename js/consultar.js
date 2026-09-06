const sql = require('mssql')

const tbody = document.getElementById("body-tabla");

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

function consultar(event) {
  try {
    let empleados;

    //consulta de mssql que llama al sp 'ConsultarEmpleados' y guarda el resultado en empleados

    empleados.forEach(empleado => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${empleado.nombre}</td>
                          <td>${empleado.salario}</td>`;
        tbody.appendChild(fila);
    })
  } catch (err) {
    alert(err)
  }
  finally {
    //cerrar conexion
  }
}

document.addEventListener("DOMContentLoaded", consultar);
