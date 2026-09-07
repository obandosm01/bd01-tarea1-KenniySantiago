const tabla = document.getElementById("tabla");

function consultar() {
    fetch("http://localhost:3000/consultar")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error en la petición: ${res.status}`);
            }
            return res.json();
        })
        .then((empleados) => {
            const tbody = document.querySelector("tbody");
            tbody.innerHTML = "";

            empleados.forEach((empleado) => {
                const fila = document.createElement("tr");
                fila.innerHTML = `<td>${empleado.Nombre}</td>
                                  <td>${empleado.Salario}</td>`;
                tbody.appendChild(fila);
            });
        })
      .then(() => {
        tabla.classList.remove('d-none');
        document.getElementById('spinner').classList.add('d-none');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al consultar empleados',
          text: err.message,
          confirmButtonText: 'Aceptar'
        });
      });
}

document.addEventListener("DOMContentLoaded", consultar);
