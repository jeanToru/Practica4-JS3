/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const content = document.querySelector('.validacion');
const warning = document.createElement('div');
const check = document.createElement('p');

const validation = () => {
  const name = document.querySelector('input[type=name]');
  const lastName = document.querySelector('input[type=text]');
  const email = document.querySelector('input[type=email]');

  if (name.value === '' && lastName.value === '' && email.value === '') {
    name.classList.add('error');
    lastName.classList.add('error');
    email.classList.add('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica los siguientes campos:</p><ul><li>Nombre</li><li>Apellido</li><li>Email</li></ul>`;
    content.appendChild(warning);

  } else if (name.value === '' && lastName.value === '') {
    name.classList.add('error');
    lastName.classList.add('error');
    email.classList.remove('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica los siguientes campos:</p><ul><li>Nombre</li><li>Apellido</li></ul>`;
    content.appendChild(warning);
  }

  else if (email.value === '' && lastName.value === '') {
    name.classList.remove('error');
    lastName.classList.add('error');
    email.classList.add('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica los siguientes campos:</p><ul><li>Apellido</li><li>Email</li></ul>`;
    content.appendChild(warning);
  }

  
  else if (name.value === '' && email.value === '') {
    name.classList.add('error');
    lastName.classList.remove('error');
    email.classList.add('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica los siguientes campos:</p><ul><li>Nombre</li><li>Email</li></ul>`;
    content.appendChild(warning);
  }

  else if (name.value === '') {
    name.classList.add('error');
    lastName.classList.remove('error');
    email.classList.remove('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica el siguiente campo:</p><ul><li>Nombre</li></ul>`;
    content.appendChild(warning);
  }

  else if (lastName.value === '') {
    name.classList.remove('error');
    lastName.classList.add('error');
    email.classList.remove('error');
    warning.innerHTML = `<p>Ocurrio un error, verifica el siguiente campo:</p><ul><li>Apellido</li></ul>`;
    content.appendChild(warning);
  }

  else if (email.value === '') {
    name.classList.remove('error');
    lastName.classList.remove('error');
    email.classList.add('error');
    warning.innerHTML = `<p>Ocurrio un error,verifica el siguiente campo:</p><ul><li>Email</li></ul>`;
    content.appendChild(warning);
  }

 else {
    warning.innerHTML = '';
    name.classList.remove('error');
    lastName.classList.remove('error');
    email.classList.remove('error');
    check.innerHTML = 'Su formulario fue enviado';
    check.classList.add('success');
    form.appendChild(check);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
  console.log("FORMULARIO ENVIADO");
});
