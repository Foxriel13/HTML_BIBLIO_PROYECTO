function comprobarLogin() {
    let clave = document.getElementById('password');
    let usuario = document.getElementById('usuario');
    let errores = "";
    if (clave.value == "") {
        console.log('el campo contraseña es obligatorio')
        clave.style.borderColor = '#ff0000'
        errores += "La contraseña no puede quedar vacia\n"
    } else {
        titulo.style.borderColor = '#009846'
    }
    if (usuario.value=="") {
        usuario.style.borderColor = '#ff0000'
        errores += "El usuario no puede quedar vacio\n"
    }else {
        usuario.style.borderColor = '#009846'
    }  
    document.getElementById("error").style.color = '#ff0000';
    document.getElementById("error").innerText = errores;

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
function registroLibro() {
    let titulo = document.getElementById("Titulo");
    let autor = document.getElementById("Autor");
    let num = document.getElementById("NumPaginas");
    let errores = "";
    if (titulo.value == "") {
        titulo.style.borderColor = '#ff0000'
        errores += "El título no puede quedar vacio\n"
    } else {
        titulo.style.borderColor = '#009846'
    }
    if (autor.value == "") {
        autor.style.borderColor = '#ff0000'
        errores += "El autor no puede quedar vacio\n"
    } else {
        autor.style.borderColor = '#009846'
    }
    if (num.value == "") {
        num.style.borderColor = '#ff0000'
        errores += "El número de páginas no puede quedar vacio\n"
    } else if (num.value <= 0) {
        num.style.borderColor = '#ff0000'
        errores += "El número de páginas no puede ser 0 o inferior\n"
    } else {
        num.style.borderColor = '#009846'
    }
    document.getElementById("error").style.color = '#ff0000';
    document.getElementById("error").innerText = errores;
}
$(document).ready(function () {

    $('.ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

});

function estrellas(num) {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, index) => {
        if (index < num) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid', 'selected');
        } else {
            star.classList.remove('fa-solid', 'selected');
            star.classList.add('fa-regular');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const btnFiltrar = document.getElementById('btnFiltrar');
    const inputAutor = document.getElementById('inputAutor');
    alert("suuu")
    btnFiltrar.addEventListener('click', function() {
        let autor = inputAutor.value.trim(); 

        
        if (autor.toLowerCase() === "iker") {

            ajustar_cartas(5);
        } else {
            console.log("El autor no es 'Iker'");
        }
    });
});


function ajustar_cartas(val) {
    let carta = "carta" + val
    alert(carta)
    let cartaInv = document.getElementById(carta)
    cartaInv.hidden=true;
}

function enviarResenya() {
    let desc = document.getElementById("DescripcionRes");
    let errores = "";
    if (desc.value == "") {
        desc.style.borderColor = '#ff0000'
        errores += "El título no puede quedar vacio\n"
    } else {
        desc.style.borderColor = '#009846'
    }
    document.getElementById("error").style.color = '#ff0000';
    document.getElementById("error").innerText = errores;
}