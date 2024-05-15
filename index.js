function comprobarLogin() {
    event.preventDefault();
    const emailInput = document.getElementById('correo');
    const email = emailInput.value.trim();
    const errorCorreo = document.getElementById('errorMessages');

    
    errorMessages.innerHTML = '';

    
    if (typeof email !== 'string' || email.length === 0) {
        agregarError('El email no puede estar vacío.');
        return false; 
    }

    
    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        agregarError('El email debe contener un "@"');
        return false; 
    }


    const dotIndex = email.indexOf('.', atIndex);
    if (dotIndex === -1) {
        agregarError('El dominio del email debe contener un "."');
        return false; 
    }
    

    agregarMensaje('Inicio de sesión exitoso.');
    return true; 
}

function agregarError(mensaje) {
    const errorElement = document.getElementById('errorMessages');
    errorElement.textContent = mensaje;
}

function agregarMensaje(mensaje) {
    const mensajeElement = document.createElement('errorMessages');
    errorElement.textContent = mensaje;
}
function paginacion(numeroClicado) {
    const botones = document.querySelectorAll(".pagination-link");
    botones.forEach((boton, index) => {
        if (index === numeroClicado - 1) {
            boton.classList.add("is-current");
        } else {
            boton.classList.remove("is-current");
        }
    });
}