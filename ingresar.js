const form = document.getElementById("form");
const log = document.getElementById("log");


var empleado = {
    nombre: "Kenni",
    salario: 1000000
};


function enviar(event) {
    event.preventDefault();

    log.textContent = `Formulario enviado! Timestamp: ${event.timeStamp}`;
    empleado.nombre = document.getElementById("nombre").value;
    empleado.salario = Number(document.getElementById("salario").value);
    console.log(empleado.nombre);
    console.log(empleado.salario);


    fetch("159.203.106.150", {
        method: "POST",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json()).catch((err) => console.error("Error: ", err))
        .then((response) => console.log("Success: ", response));

}

form.addEventListener("submit", enviar);