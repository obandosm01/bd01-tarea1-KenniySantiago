const tabla = document.getElementById("tabla");

function consultar(event) {
    fetch("https://159.203.106.150/api/empleados").then((res) => res.json()).then(empleados => {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        empleados.forEach(empleado => {
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${empleado.nombre}</td>
                              <td>${empleado.salario}</td>`;
            tbody.appendChild(fila);
        })
    }).catch((err) => console.error("Error: ", err));

    event.preventDefault();
}

document.addEventListene("DOMContentLoaded", consultar);