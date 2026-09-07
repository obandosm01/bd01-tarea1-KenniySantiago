const form = document.getElementById("form");
const log = document.getElementById("log");
const nombreInput = document.getElementById("nombre");
const salarioInput = document.getElementById("salario");

function enviar(event) {
  event.preventDefault();

  let nombre = nombreInput.value;
  let salario = salarioInput.value;

  let esValido = true;

  if (nombre.trim() === "") {
    nombreInput.style.borderColor = 'red';

    Swal.fire({
      icon: 'error',
      title: 'Error al registrar empleado',
      text: 'El nombre es obligatorio.',
      confirmButtonText: 'Aceptar'
    });

    esValido = false;
  }

  if(salario.trim() === "") {
    salarioInput.style.borderColor = 'red';

    Swal.fire({
      icon: 'error',
      title: 'Error al registrar empleado',
      text: 'El salario es obligatorio.',
      confirmButtonText: 'Aceptar'
    });

    esValido = false;
  }

  if(!esValido) {
    return;
  }

  if (isNaN(salario) || Number(salario) <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error al registrar empleado',
      text: 'El salario debe ser un número válido (mayor que 0).',
      confirmButtonText: 'Aceptar'
    });

    return;
  }


  let empleado = {
    nombre: nombre,
    salario: Number(salario)
  };

  fetch("http://localhost:3000/insertar", {
    method: "POST",
    body: JSON.stringify(empleado),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.text()).catch((err) => {
    console.error("Error: ", err);
    Swal.fire({
      icon: 'error',
      title: 'Error al registrar empleado',
      text: err.message,
      confirmButtonText: 'Aceptar'
    });
  })
    .then((response) => {
      console.log("Success: ", response);
      Swal.fire({
        icon: 'success',
        title: 'Empleado registrado',
        text: 'El empleado fue registrado correctamente.',
        confirmButtonText: 'Aceptar'
      })
      form.reset();
    });

}

form.addEventListener("submit", enviar);
nombreInput.addEventListener('change', () => {
  nombreInput.style.borderColor = '';
})

salarioInput.addEventListener('change', () => {
  salarioInput.style.borderColor = '';
})
