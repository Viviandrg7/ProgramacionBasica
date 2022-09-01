let ataqueJugador
let ataqueEnemigo
let mensajes
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    } else {
        alert('No elegiste mascota');
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio =  aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    }
    else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo";
    }
    else{
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
    
}

//ATAQUE DEL JUGADOR
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

//ATAQUE DEL ENEMIGO
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }
    else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }
    else{
        ataqueEnemigo = "TIERRA"
    }

   combate()
}
function combate(){
    let spanvidasJugador = document.getElementById('vidas-jugador')
    let spanvidasEnemigo = document.getElementById('vidas-enemigo')

        if (ataqueEnemigo == ataqueJugador) {
            mensajes = "Empate"
        }
        else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
            mensajes = "Ganaste"
            vidaEnemigo--
            spanvidasEnemigo.innerHTML = vidaEnemigo
        }
        else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
            mensajes = "Ganaste"
            vidaEnemigo--
            spanvidasEnemigo.innerHTML = vidaEnemigo
        }
        else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
            mensajes = "Ganaste"
            vidaEnemigo--
            spanvidasEnemigo.innerHTML = vidaEnemigo
        }
        else {
            mensajes = "Perdiste"
            vidaJugador--
            spanvidasJugador.innerHTML = vidaJugador
        }

        crearMensaje()
        revisarVidas()
}
function revisarVidas(){
    if (vidaEnemigo == 0){
        crearMensajeFinal("Felicitacines - Ganaste")
    } else if (vidaJugador == 0){
        crearMensajeFinal("No tienes más vidas, Perdiste")
    }
}

function crearMensaje(){
    let sectionMensaje = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataqueJugador')
    let ataqueDelEnemigo = document.getElementById('ataqueEnemigo')

   
    let nuevoAtaqueJ = document.createElement('p')
    let nuevoAtaqueE = document.createElement('p')
   

    sectionMensaje.innerHTML = mensajes 
    nuevoAtaqueJ.innerHTML = ataqueJugador
    nuevoAtaqueE.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJ)
    ataqueDelEnemigo.appendChild(nuevoAtaqueE)
}

function crearMensajeFinal(resultadoFianl){
    let sectionMensaje = document.getElementById('resultado')
    sectionMensaje.innerHTML = resultadoFianl 


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego)