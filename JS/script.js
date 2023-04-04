let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;


function iniciarJuego() {
    let seccionAtaque = document.getElementById('seleccionar-ataque');
    let seccionReiniciar = document.getElementById('reiniciar');
    let seccionAtaques = document.getElementById('ataques');
    let seccionResultadoFinal = document.getElementById('resultado-final');

    seccionAtaque.style.display = 'none';
    seccionReiniciar.style.display = 'none';
    seccionAtaques.style.display = 'none';
    seccionResultadoFinal.style.display = 'none';


    const btnMascota = document.getElementById('btn-mascota');
    btnMascota.addEventListener('click', seleccionarMascotaJugador);

    spanVidasJugador = document.getElementById('vida-jugador');
    spanVidasEnemigo = document.getElementById('vida-enemigo');

    spanVidasJugador.innerText = vidaJugador;
    spanVidasEnemigo.innerText = vidaEnemigo;

    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnTierra = document.getElementById('btn-tierra');

    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);

    let btnReiniciar = document.getElementById('btn-reiniciar');
    btnReiniciar.addEventListener('click', reiniciarJuego);
}    

function seleccionarMascotaJugador() {    
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo');
    let ratigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    let seccionAtaque = document.getElementById('seleccionar-ataque');
    let seccionMascota = document.getElementById('seleccionar-mascota');
    seccionAtaque.style.display = 'block';
    seccionMascota.style.display = 'none';


    if (hipodoge.checked) {
        spanMascotaJugador.innerText = 'Hipodoge';
    }
    else if (capipepo.checked) {
        spanMascotaJugador.innerText = 'Capipepo';
    }
    else if (ratigueya.checked) {
        spanMascotaJugador.innerText = 'Ratigueya';
    }
    seleccionarMascotaEnemigo();
    
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1, 3);
    spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatoria === 1) {
        spanMascotaEnemigo.innerText = 'Hipodoge';   
    }
    else if (mascotaAleatoria === 2) {
        spanMascotaEnemigo.innerText = 'Capipepo';

    }
    else if (mascotaAleatoria === 3) {
        spanMascotaEnemigo.innerText = 'Ratigueya';

    }

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataqueFuego () {
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();        
}

function ataqueAgua () {
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo(); 
}

function ataqueTierra () {
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo(); 
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    

    if (ataqueAleatorio === 1) {
        ataqueEnemigo = 'Fuego'
    }
    else if (ataqueAleatorio === 2) {
        ataqueEnemigo = 'Agua'
    }
    else if (ataqueAleatorio === 3) {
        ataqueEnemigo = 'Tierra'
    }
    combate();
    

}

function combate() {
    let resultado;
    

    if (ataqueEnemigo === ataqueJugador ) {
        resultado = 'Habeis empatado!';
    }
    else if (ataqueEnemigo === 'Fuego') {
        if (ataqueJugador === 'Agua') {
            resultado = 'Has ganado!';
            vidaEnemigo--;
        }
        else if (ataqueJugador === 'Tierra') {
            resultado = 'Has perdido!';
            vidaJugador--;
        }
    }
    else if ( ataqueEnemigo === 'Agua'){
        if (ataqueJugador === 'Tierra') {
            resultado = 'Has ganado!';
            vidaEnemigo--;
        }
        else if (ataqueJugador === 'Fuego') {
            resultado = 'Has perdido!';
            vidaJugador--;
        }
    }
    else if ( ataqueEnemigo === 'Tierra'){
        if (ataqueJugador === 'Fuego') {
            resultado = 'Has ganado!';
            vidaEnemigo--;
        }
        else if (ataqueJugador === 'Agua') {
            resultado = 'Has perdido!';
            vidaJugador--;
        }
    }
    
    spanVidasJugador = document.getElementById('vida-jugador');
    spanVidasEnemigo = document.getElementById('vida-enemigo');

    spanVidasJugador.innerText = vidaJugador;
    spanVidasEnemigo.innerText = vidaEnemigo;

    crearMensaje(resultado);
    revisarVidas();
    
}

function revisarVidas() {
    let resultado;
    if (vidaEnemigo === 0) {
        resultado = 'Has ganado el combate!';
        desactivarBotones();
        let seccionReiniciar = document.getElementById('reiniciar');
        seccionReiniciar.style.display = 'block';

    }
    else if (vidaJugador === 0) {
        resultado = 'Has perdido el combate :(';
        desactivarBotones();
        let seccionReiniciar = document.getElementById('reiniciar');
        seccionReiniciar.style.display = 'block';
    }
    else {
        resultado = '';
    }

    mensajeFinal(resultado);    
}

function crearMensaje(resultado) {
    let seccionAtaques = document.getElementById('ataques');
    let ataquesJugador = document.getElementById('ataque-jugador');
    let ataquesEnemigo = document.getElementById('ataque-enemigo');
    let ataquesResultado = document.getElementById('resultado');

    seccionAtaques.style.display = 'flex';    
    
    let parrafoJugador = document.createElement('p');
    let parrafoEnemigo = document.createElement('p');
    let parrafoResultado = document.createElement('p');

    parrafoJugador.innerText = ataqueJugador;
    parrafoEnemigo.innerText = ataqueEnemigo;
    parrafoResultado.innerText = resultado;
    

     ataquesJugador.appendChild(parrafoJugador);
     ataquesEnemigo.appendChild(parrafoEnemigo);
     ataquesResultado.appendChild(parrafoResultado);
}

function mensajeFinal(resultado) {
    let seccionResultadoFinal = document.getElementById('resultado-final');
    let parrafo = document.createElement('p');
    seccionResultadoFinal.style.display = 'block';    

    parrafo.innerText = resultado;

    seccionResultadoFinal.appendChild(parrafo);    
}

function desactivarBotones() {
    let btnFuego = document.getElementById('btn-fuego');
    let btnAgua = document.getElementById('btn-agua');
    let btnTierra = document.getElementById('btn-tierra');

    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;
}

function reiniciarJuego() {
    location.reload();
}



window.addEventListener('load', iniciarJuego);