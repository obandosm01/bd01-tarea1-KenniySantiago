const form = document.getElementById("form");
const log = document.getElementById("log");


var empleado = {
    nombre: "Kenni",
    salario: 1000000
};


function enviar(event) {
    event.preventDefault();

    empleado.nombre = document.getElementById("nombre").value;
    empleado.salario = Number(document.getElementById("salario").value);
    console.log(empleado.nombre);
    console.log(empleado.salario);


  fetch("http://localhost:3000/insertar", {
    method: "POST",
    body: JSON.stringify(empleado),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.text()).catch((err) => console.error("Error: ", err))
    .then((response) => {
      console.log("Success: ", response);
      alert('El empleado fue registrado correctamente.')
      form.reset();
    });

}

form.addEventListener("submit", enviar);
