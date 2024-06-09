let contador = 0
const maxContador = 120;
const intervalo = 10;

const intervalId = setInterval(() => {
    document.getElementById('contador').innerText = contador;
    if (contador >= maxContador) {
        clearInterval(intervalId);
    }
    contador++;
}, intervalo);


let imagenes = ["./Imagenes/milibro.jpg", "./Imagenes/mine.jpg", "./Imagenes/Don_Quijote_de_la_Mancha.jpg", "./Imagenes/saw.jpg"];
let descripcion = ["En un lejano parque de atracciones y en plena misión secreta para defender a su amada luna de un peligroso emperador, la joven Claudia, hija de Metallus, conoce a Knaach, y juntos se embarcan en una odisea de sucesos desafortunados que desatarán una verdadera guerra galáctica.","Hay muchas formas de jugar a Minecraft, y una de las más populares es el modo Supervivencia, en el que tendrás que forjar tu propio camino en el juego, solo con los bloques que encuentres para fabricar cosas, y te enfrentarás a muchos peligros con la certeza de que, con un solo movimiento en falso, podrías perderlo todo. Es muy emocionante, ¡y muy difícil!","Es el personaje principal de la obra, y tiene como características físicas: De aspecto pálido, alto, delgado, nariz puntiaguda, tiene Barba y bigote. Es el protagonista de la novela y constituye un consagrado mito de la literatura universal, y el más universal y profundo de la literatura española.","La película cuenta una narración no lineal que gira en torno al misterio del asesino Jigsaw, que pone a prueba la voluntad de vivir de sus víctimas sometiéndolas a juegos mortales en los que deben infligirse un gran dolor físico para sobrevivir."];

var posicion = 0;
    const btnizquierda = document.getElementById('margintopmovimientoizquierda');
    const btnderecha = document.getElementById('margintopmovimientoderecha');
    btnizquierda.addEventListener('click', function() {
var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')
var desc1 = document.getElementById('descripcion1')
var desc2 = document.getElementById('descripcion2')
var desc3 = document.getElementById('descripcion3')
var enlace1 = document.getElementById('enlace1')
var enlace2 = document.getElementById('enlace2')
var enlace3 = document.getElementById('enlace3')
        if(posicion + 2 >= 4){
            posicion = 0;
        }
        card1.src = imagenes[posicion];
        card2.src = imagenes[posicion+1];
        card3.src = imagenes[posicion+2];
        desc1.textContent = descripcion[posicion]
        desc2.textContent = descripcion[posicion+1]
        desc3.textContent = descripcion[posicion+2]
        posicion +=1
        if (posicion == 3){
            enlace1.href = "./detalle.html"
        }else{
            enlace1.href = "#"
        }
        if (posicion+1 == 3){
            enlace2.href = "./detalle.html"
        }else{
            enlace2.href = "#"
        }
        if (posicion+2 == 3){
            enlace3.href = "./detalle.html"
        }else{
            enlace3.href = "#"
        }
    });

    btnderecha.addEventListener('click', function() {
        var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var card3 = document.getElementById('card3')
var desc1 = document.getElementById('descripcion1')
var desc2 = document.getElementById('descripcion2')
var desc3 = document.getElementById('descripcion3')
        if(posicion - 2 <= -1){
            posicion = imagenes.length-1;
        }
        card1.src = imagenes[posicion-2];
        card2.src = imagenes[posicion-1];
        card3.src = imagenes[posicion];
        desc1.textContent = descripcion[posicion-2]
        desc2.textContent = descripcion[posicion-1]
        desc3.textContent = descripcion[posicion]
        posicion -=1

        if (posicion == 3){
            enlace1.href = "./detalle.html"
        }else{
            enlace1.href = "#"
        }
        if (posicion+1 == 3){
            enlace2.href = "./detalle.html"
        }else{
            enlace2.href = "#"
        }
        if (posicion+2 == 3){
            enlace3.href = "./detalle.html"
        }else{
            enlace3.href = "#"
        }
    });
