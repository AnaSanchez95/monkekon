const seccionAtaque = document.getElementById('seleccionar-ataque');
const seccionMascota = document.getElementById('seleccionar-mascota');

const btnMascota = document.getElementById('btn-mascota');



const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');   

const spanVidasJugador = document.getElementById('vida-jugador');
const spanVidasEnemigo = document.getElementById('vida-enemigo');

const seccionAtaques = document.getElementById('ataques');
const ataquesJugador = document.getElementById('ataque-jugador');
const ataquesEnemigo = document.getElementById('ataque-enemigo');

const btnFuego = document.getElementById('btn-fuego');
const btnAgua = document.getElementById('btn-agua');
const btnTierra = document.getElementById('btn-tierra');

const ataquesResultado = document.getElementById('resultado');
const seccionResultadoFinal = document.getElementById('resultado-final');

const seccionReiniciar = document.getElementById('reiniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');

let monkekones = [];
let ataqueJugador;
let ataqueEnemigo;
let vidaJugador = 3;
let vidaEnemigo = 3;

class Monkekon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;        
    }
}

let hipodoge = new Monkekon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 3);
let capipepo = new Monkekon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 3);
let ratigueya = new Monkekon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 3);
// let langostelvis = new Monkekon('langostelvis', './assets/mokepons_mokepon_ratigueya_attack.png', 3);
// let tucapalma = new Monkekon('tucapalma', './assets/mokepons_mokepon_ratigueya_attack.png', 3);
// let pydos = new Monkekon('pydos', './assets/mokepons_mokepon_ratigueya_attack.png', 3);

monkekones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    seccionAtaque.style.display = 'none';
    seccionReiniciar.style.display = 'none';
    seccionAtaques.style.display = 'none';
    seccionResultadoFinal.style.display = 'none';
    
    btnMascota.addEventListener('click', seleccionarMascotaJugador);    

    spanVidasJugador.innerText = vidaJugador;
    spanVidasEnemigo.innerText = vidaEnemigo;   

    btnFuego.addEventListener('click', ataqueFuego);
    btnAgua.addEventListener('click', ataqueAgua);
    btnTierra.addEventListener('click', ataqueTierra);
    
    btnReiniciar.addEventListener('click', reiniciarJuego);
}    

function seleccionarMascotaJugador() {
    const hipodoge = document.getElementById('hipodoge');
    const capipepo = document.getElementById('capipepo');
    const ratigueya = document.getElementById('ratigueya');

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
    let parrafo = document.createElement('p');
    seccionResultadoFinal.style.display = 'block';    

    parrafo.innerText = resultado;

    seccionResultadoFinal.appendChild(parrafo);    
}

function desactivarBotones() {
    btnFuego.disabled = true;
    btnAgua.disabled = true;
    btnTierra.disabled = true;
}

function reiniciarJuego() {
    location.reload();
}

window.addEventListener('load', iniciarJuego);